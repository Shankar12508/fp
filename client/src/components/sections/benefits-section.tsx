import { motion, useInView } from "framer-motion";
import { BENEFITS } from "@/lib/constants";
import { Bolt, Clock, PieChart } from "lucide-react";
import { useRef } from "react";

const iconComponents = {
    "bolt": Bolt,
    "clock": Clock,
    "chart-pie": PieChart
};

export function BenefitsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    const progressVariants = {
        hidden: { width: 0 },
        visible: (percentage: number) => ({
            width: `${percentage}%`,
            transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
        })
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 100
            }
        }
    };

    return (
        <section className="py-28 bg-white relative overflow-hidden" id="benefits" ref={sectionRef}>
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(to_right,#f9f9f9_1px,transparent_1px),linear-gradient(to_bottom,#f9f9f9_1px,transparent_1px)] opacity-60" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        className="inline-block mb-4 overflow-hidden relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[#111] mb-5 relative z-10">
                            Measurable Benefits
                        </h2>
                        <motion.span
                            className="absolute bottom-4 left-0 h-[6px] bg-black/5 w-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </motion.div>

                    <motion.p
                        className="text-[#555] text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        FlowOps delivers tangible improvements to your manufacturing operations with real, measurable results.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {BENEFITS.map((benefit, index) => {
                        const IconComponent = iconComponents[benefit.icon as keyof typeof iconComponents];

                        return (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group hover:border-gray-200"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mr-4 group-hover:bg-black/10 transition-colors duration-300">
                                        <IconComponent className="text-black h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-medium text-[#111]">{benefit.title}</h3>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-[#555] font-medium text-sm">Average Improvement</span>
                                        <div className="relative">
                                            <motion.span
                                                className="text-black font-bold text-2xl"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                            >
                                                {benefit.percentage}%
                                            </motion.span>
                                            {/* Animated pulse behind percentage */}
                                            <motion.div
                                                className="absolute -inset-2 rounded-full bg-black/5 -z-10"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.2, 0.5, 0.2]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.3
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Progress bar with cleaner design */}
                                    <div className="w-full bg-gray-100 rounded-full h-2 mb-6 overflow-hidden">
                                        <motion.div
                                            className="bg-black/70 h-2 rounded-full"
                                            custom={benefit.percentage}
                                            variants={progressVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        />
                                    </div>

                                    <p className="text-[#555] text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Floating statistics */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <motion.div
                        className="relative p-6 rounded-lg bg-white border border-gray-100 shadow-sm transform-3d"
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <motion.span
                            className="block text-3xl font-bold text-black mb-2"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            92%
                        </motion.span>
                        <span className="text-[#555] text-sm">Client Satisfaction</span>
                    </motion.div>

                    <motion.div
                        className="relative p-6 rounded-lg bg-white border border-gray-100 shadow-sm transform-3d"
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <motion.span
                            className="block text-3xl font-bold text-black mb-2"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            38%
                        </motion.span>
                        <span className="text-[#555] text-sm">Average ROI</span>
                    </motion.div>

                    <motion.div
                        className="relative p-6 rounded-lg bg-white border border-gray-100 shadow-sm transform-3d"
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <motion.span
                            className="block text-3xl font-bold text-black mb-2"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            3x
                        </motion.span>
                        <span className="text-[#555] text-sm">Faster Implementation</span>
                    </motion.div>

                    <motion.div
                        className="relative p-6 rounded-lg bg-white border border-gray-100 shadow-sm transform-3d"
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <motion.span
                            className="block text-3xl font-bold text-black mb-2"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            24/7
                        </motion.span>
                        <span className="text-[#555] text-sm">Monitoring & Support</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
