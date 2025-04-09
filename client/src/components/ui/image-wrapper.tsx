import { cn } from "@/lib/utils";

interface ImageWrapperProps {
    src: string;
    alt: string;
    className?: string;
    wrapperClassName?: string;
}

export function ImageWrapper({ src, alt, className, wrapperClassName }: ImageWrapperProps) {
    return (
        <div className={cn("relative overflow-hidden", wrapperClassName)}>
            <img
                src={src}
                alt={alt}
                className={cn("w-full h-full object-cover", className)}
            />
        </div>
    );
}
