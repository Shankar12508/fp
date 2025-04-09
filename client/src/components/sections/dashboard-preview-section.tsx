import { motion, useInView } from "framer-motion";
import { ButtonLink } from "../ui/button-link";
import { ImageWrapper } from "../ui/image-wrapper";
import { PlayCircle, ArrowRight, ChevronRight, BarChart3, PlusCircle, Download, Zap } from "lucide-react";
import { useRef } from "react";
import { DashboardUI } from "../ui/dashboard-ui";

export function DashboardPreviewSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    return (
        <section className="py-28 bg-gradient-to-b from-white to-[#f9fafb] relative overflow-hidden" ref={sectionRef}>
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] opacity-60" />

                {/* Gradient orbs */}
                <motion.div
                    className="absolute top-[20%] -right-[5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-blue-50 to-blue-100 opacity-40 blur-[120px]"
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-[10%] -left-[5%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-amber-50 to-amber-100 opacity-30 blur-[100px]"
                    animate={{
                        y: [0, 20, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Decorative elements */}
                <motion.div
                    className="absolute top-[15%] left-[10%] w-4 h-16 bg-black/5 rounded-full"
                    animate={{
                        height: ["4rem", "2rem", "4rem"]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-[20%] right-[15%] w-8 h-8 border border-black/10 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        className="inline-block mb-4 overflow-hidden relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[#111] mb-5 relative z-10">
                            Experience the Dashboard
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
                        Get a glimpse of our intuitive, data-rich dashboard designed for manufacturing excellence.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <motion.div
                        className="absolute -top-8 -left-8 w-20 h-20 border border-gray-200 rounded-md"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.div
                        className="absolute -bottom-8 -right-8 w-24 h-24 border border-gray-200 rounded-md"
                        animate={{ rotate: [0, -15, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className="perspective-[2000px]">
                        <motion.div
                            className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200"
                            initial={{ opacity: 0, y: 20, rotateX: 10 }}
                            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: 10 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            {/* Browser mockup header */}
                            <div className="bg-[#f8f8f8] p-3 border-b border-gray-200 flex items-center">
                                <div className="flex space-x-2 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28c940]"></div>
                                </div>
                                <div className="flex-1 bg-white rounded-md px-4 py-1 text-[#555] text-xs font-mono border border-gray-200">
                                    app.flowops.ai/dashboard
                                </div>
                            </div>

                            {/* Custom Dashboard UI */}
                            <div className="relative overflow-hidden">
                                <DashboardUI />

                                {/* Hover overlay shine effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-full hover:translate-x-full transition-all duration-1500 ease-in-out pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />

                                {/* Interactive floating elements */}
                                <motion.div
                                    className="absolute top-[15%] right-[10%] px-4 py-2 bg-white rounded-lg shadow-xl border border-gray-100 text-sm font-medium flex items-center gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                >
                                    <Zap className="w-4 h-4 text-amber-500" />
                                    <span>Efficiency increased by 24%</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-[25%] left-[15%] px-3 py-2 bg-black text-white rounded-lg shadow-lg text-xs font-medium flex items-center gap-2"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                >
                                    <BarChart3 className="w-3 h-3" />
                                    <span>AI insights ready</span>
                                    <motion.div
                                        className="w-2 h-2 bg-green-400 rounded-full"
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-[10%] right-[20%] rounded-full bg-blue-600 p-2 shadow-lg cursor-pointer"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [0, 1, 0.9, 1] }}
                                    transition={{ duration: 0.8, delay: 2 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <PlusCircle className="w-5 h-5 text-white" />
                                    <motion.span
                                        className="absolute inset-0 rounded-full border-2 border-blue-400"
                                        animate={{ scale: [1, 1.4], opacity: [1, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>

                                <motion.div
                                    className="absolute top-[40%] left-[8%] px-3 py-1.5 bg-green-50 text-green-700 rounded-md text-xs font-medium flex items-center gap-1 border border-green-200"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 2.2 }}
                                >
                                    <Download className="w-3 h-3" />
                                    <span>Report ready</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <ButtonLink
                            href="#demo"
                            variant="default"
                            className="bg-black hover:bg-black text-white group relative overflow-hidden flex items-center gap-2 px-6 py-3"
                        >
                            <PlayCircle className="w-5 h-5 relative z-10" />
                            <span className="relative z-10 text-base">Watch Live Demo</span>

                            {/* Button hover effect */}
                            <span className="absolute inset-0 w-0 group-hover:w-full bg-opacity-20 h-full transition-all duration-300 ease-out -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </ButtonLink>

                        <ButtonLink
                            href="#book-demo"
                            variant="outline"
                            className="border-black text-black hover:bg-black hover:text-white group relative overflow-hidden transition-colors duration-300 flex items-center gap-2 px-6 py-3"
                        >
                            <span className="relative z-10 text-base">Schedule a Personalized Tour</span>
                            <ArrowRight className="ml-1 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        </ButtonLink>

                        <motion.div
                            className="absolute -right-4 bottom-0 w-36 h-36 bg-gradient-to-tr from-blue-50 to-blue-100 rounded-full opacity-40 blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* Feature highlights */}
                    <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto text-center">
                        {[
                            { icon: Zap, title: "Real-time Updates", desc: "See changes as they happen" },
                            { icon: BarChart3, title: "Visual Analytics", desc: "Understand your data at a glance" },
                            { icon: Download, title: "Easy Export", desc: "Share insights with your team" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                            >
                                <div className="bg-black/5 p-3 rounded-full mb-3">
                                    <feature.icon className="w-5 h-5 text-black" />
                                </div>
                                <h4 className="text-sm font-medium mb-1">{feature.title}</h4>
                                <p className="text-xs text-gray-500">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
