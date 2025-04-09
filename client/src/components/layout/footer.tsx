import { motion } from "framer-motion";
import {
    Bolt,
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    YoutubeIcon,
    MapPin,
    Phone,
    Mail,
    ArrowUp
} from "lucide-react";
import { FOOTER_LINKS, PHONE_NUMBER, EMAIL_INFO, COMPANY_ADDRESS } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const linkVariants = {
        hover: {
            x: 5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <footer className="bg-white border-t border-gray-100 py-16 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(to_right,#f9f9f9_1px,transparent_1px),linear-gradient(to_bottom,#f9f9f9_1px,transparent_1px)] opacity-60 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-end mb-12">
                    <motion.button
                        onClick={scrollToTop}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-black hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={18} />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <motion.a
                            href="#"
                            className="flex items-center mb-6"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center mr-2 group-hover:bg-black/10 transition-colors duration-300">
                                <Bolt className="text-black h-5 w-5" />
                            </div>
                            <span className="text-black font-medium text-xl">
                                Flow<span className="font-bold"> Operations</span>
                            </span>
                        </motion.a>

                        <p className="text-[#555] mb-8">
                            AI-powered efficiency for modern manufacturing.
                        </p>

                        <div className="flex space-x-4">
                            {[
                                { Icon: LinkedinIcon, label: "LinkedIn" },
                                { Icon: TwitterIcon, label: "Twitter" },
                                { Icon: FacebookIcon, label: "Facebook" },
                                { Icon: YoutubeIcon, label: "YouTube" }
                            ].map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href="#"
                                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#555] hover:text-black hover:border-black/30 transition-colors duration-300"
                                    aria-label={item.label}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <item.Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[#111] font-medium text-lg mb-6">Solutions</h4>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.solutions.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={link.href}
                                        className="text-[#555] hover:text-black transition duration-300 flex items-center"
                                        variants={linkVariants}
                                        whileHover="hover"
                                    >
                                        {link.label}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#111] font-medium text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.company.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={link.href}
                                        className="text-[#555] hover:text-black transition duration-300 flex items-center"
                                        variants={linkVariants}
                                        whileHover="hover"
                                    >
                                        {link.label}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#111] font-medium text-lg mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center group">
                                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mr-3 group-hover:bg-black/10 transition-colors duration-300">
                                    <MapPin className="text-black h-4 w-4" />
                                </div>
                                <span className="text-[#555]">{COMPANY_ADDRESS}</span>
                            </li>
                            <li className="flex items-center group">
                                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mr-3 group-hover:bg-black/10 transition-colors duration-300">
                                    <Phone className="text-black h-4 w-4" />
                                </div>
                                <motion.a
                                    href={`tel:${303 - 999 - 6844}`}
                                    className="text-[#555] hover:text-black relative"
                                    whileHover={{ x: 3 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {PHONE_NUMBER}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-[1px] bg-black/30"
                                        initial={{ scaleX: 0, originX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </li>
                            <li className="flex items-center group">
                                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mr-3 group-hover:bg-black/10 transition-colors duration-300">
                                    <Mail className="text-black h-4 w-4" />
                                </div>
                                <motion.a
                                    href={`mailto:${EMAIL_INFO}`}
                                    className="text-[#555] hover:text-black relative"
                                    whileHover={{ x: 3 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {EMAIL_INFO}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-[1px] bg-black/30"
                                        initial={{ scaleX: 0, originX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[#777] text-sm mb-4 md:mb-0">
                        &copy; {currentYear} Flow Operations. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center space-x-6">
                        {FOOTER_LINKS.legal.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                className="text-[#777] hover:text-black text-sm transition duration-300 relative"
                                whileHover={{ y: -2 }}
                            >
                                {link.label}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-[1px] bg-black/20"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
