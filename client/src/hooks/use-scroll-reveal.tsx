import { useEffect, useRef, useState, ReactNode, Children, isValidElement, cloneElement, RefObject, CSSProperties } from 'react';

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useScrollReveal({
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
}: UseScrollRevealOptions = {}) {
    const ref = useRef<HTMLElement | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    setIsIntersecting(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, once]);

    return { ref, isIntersecting };
}

// Component for scroll reveal
interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    direction?: 'bottom' | 'left' | 'right';
    delay?: number;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function ScrollReveal({
    children,
    className = '',
    direction = 'bottom',
    delay = 0,
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
}: ScrollRevealProps) {
    const { ref, isIntersecting } = useScrollReveal({
        threshold,
        rootMargin,
        once,
    });

    const directionClass = direction
        ? `reveal-from-${direction}`
        : '';

    return (
        <div
            ref={ref as RefObject<HTMLDivElement>}
            className={`
        reveal-on-scroll 
        ${directionClass} 
        ${isIntersecting ? 'is-revealed' : ''} 
        ${className}
      `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

// Component for container with staggered children
interface StaggeredRevealProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function StaggeredReveal({
    children,
    className = '',
    staggerDelay = 100,
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
}: StaggeredRevealProps) {
    const { ref, isIntersecting } = useScrollReveal({
        threshold,
        rootMargin,
        once,
    });

    // Convert children to array
    const childrenArray = Children.toArray(children);

    return (
        <div
            ref={ref as RefObject<HTMLDivElement>}
            className={`stagger-children ${className}`}
        >
            {childrenArray.map((child, index) => {
                if (!isValidElement(child)) return child;

                // Create wrapper div for each child with animation
                return (
                    <div
                        key={index}
                        className={`
              reveal-on-scroll 
              reveal-from-bottom 
              ${isIntersecting ? 'is-revealed' : ''}
            `}
                        style={{ transitionDelay: `${index * staggerDelay}ms` }}
                    >
                        {child}
                    </div>
                );
            })}
        </div>
    );
}