import { motion } from "framer-motion";
import { WHY_FLOWOPS_REASONS } from "@/lib/constants";
import {
    Bot,
    TrendingUp,
    UsersRound,
    ArrowRight,
    ArrowUpRight,
    ExternalLink
} from "lucide-react";
import { ButtonLink } from "../ui/button-link";
import { useRef } from "react";

const iconComponents = {
    "robot": Bot,
    "chart-line": TrendingUp,
    "users-gear": UsersRound
};

export function WhyFlowOpsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            className="section-spacing bg-black text-white relative overflow-hidden"
            id="why-flowops"
            ref={sectionRef}
        >
            {/* Background elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                </div>
                <motion.div
                    className="absolute bottom-0 left-0 w-[60%] h-[40%] rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-60 blur-[120px] -translate-x-1/2 translate-y-1/4"
                    animate={{
                        opacity: [0.3, 0.15, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                {/* Two column layout for heading and description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-white font-light max-w-md">
                                Why choose FlowOps?
                            </h2>
                            <div className="h-[1px] w-16 bg-white/20 my-8"></div>
                        </motion.div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-white/80 text-lg font-light mb-10 max-w-xl">
                                Our AI-powered platform is specifically designed for manufacturing
                                operations, delivering intelligent solutions that maximize efficiency
                                and profitability.
                            </p>

                            <ButtonLink
                                href="#contact"
                                variant="default"
                                className="btn-3rdbase btn-outline-white btn-arrow group"
                            >
                                <span>Get in touch</span>
                                <ArrowRight className="ml-2 h-4 w-4 arrow-animate" />
                            </ButtonLink>
                        </motion.div>
                    </div>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WHY_FLOWOPS_REASONS.map((reason, index) => {
                        const IconComponent = iconComponents[reason.icon as keyof typeof iconComponents];

                        return (
                            <motion.div
                                key={index}
                                className="group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="border border-white/10 p-8 rounded-lg h-full relative overflow-hidden hover:border-white/20 transition-colors duration-500">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <IconComponent className="text-white h-5 w-5" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-light text-white mb-3">
                                        {reason.title}
                                    </h3>

                                    <p className="text-white/70 mb-6 text-sm">
                                        {reason.description}
                                    </p>

                                    <a
                                        href="#"
                                        className="text-white inline-flex items-center text-sm arrow-container group"
                                    >
                                        Learn more
                                        <ExternalLink className="ml-2 w-3.5 h-3.5 arrow-animate" />
                                    </a>

                                    {/* Subtle hover effect */}
                                    <motion.div
                                        className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats section */}
                <motion.div
                    className="mt-28 pt-16 border-t border-white/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        {[
                            { number: "95%", label: "Reduction in errors" },
                            { number: "32%", label: "Cost savings" },
                            { number: "3.5×", label: "Faster deployment" },
                            { number: "24/7", label: "Global support" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <motion.div
                                    className="text-4xl font-light text-white mb-2"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-white/60 text-sm uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
