import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ButtonLink } from "../ui/button-link";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Transform values based on scroll position
    const headerBgOpacity = useTransform(scrollY, [0, 50], [0, 1]);

    const navLinks = [
        { href: "#features", label: "Features" },
        { href: "#benefits", label: "Benefits" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 py-5"
        >
            <motion.div
                className="absolute inset-0 header-blur border-b border-gray-100"
                style={{ opacity: headerBgOpacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />

            <div className="container mx-auto px-6 lg:px-10 relative">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-black text-xl font-light tracking-tight"
                    >
                        <span className="font-light">Flow</span>Ops
                    </a>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black p-1 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-[#111] hover:text-black text-sm font-light link-underline"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button (desktop) */}
                    <div className="hidden md:block">
                        <ButtonLink
                            href="#demo"
                            variant="default"
                            className="btn-3rdbase btn-primary btn-arrow group"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="ml-1 h-4 w-4 arrow-animate" />
                        </ButtonLink>
                    </div>
                </div>

                {/* Mobile navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden bg-[#f5f5f5] mt-4 absolute left-0 right-0 p-6 border-t border-gray-100"
                        >
                            <div className="flex flex-col space-y-5">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        className="text-black font-light"
                                        onClick={() => setIsMenuOpen(false)}
                                        initial={{ opacity: 0, x: -4 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.2 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <ButtonLink
                                    href="#demo"
                                    variant="default"
                                    className="btn-3rdbase btn-primary mt-2 w-full btn-arrow justify-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </ButtonLink>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
