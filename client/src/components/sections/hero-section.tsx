import { motion, useScroll, useTransform } from "framer-motion";
import { ButtonLink } from "../ui/button-link";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { DashboardUI } from "../ui/dashboard-ui";
import { ScrollReveal, StaggeredReveal } from "@/hooks/use-scroll-reveal";

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effect on scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Text animation variants for staggered reveal
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <section
            ref={ref}
            className="bg-gradient-to-b from-[#f9f9f9] to-[#f5f5f5] section-spacing overflow-hidden relative"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] opacity-50" />

                {/* Animated gradient circles */}
                <motion.div
                    className="absolute top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-blue-50 to-blue-100 opacity-50 blur-[120px]"
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-[10%] -right-[5%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-amber-50 to-amber-100 opacity-40 blur-[100px]"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Decorative shapes */}
                <motion.div
                    className="absolute top-[25%] left-[8%] w-16 h-16 border border-black/5 rounded-full opacity-60"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                    className="absolute bottom-[20%] right-[10%] w-24 h-24 border border-black/5 rounded-lg opacity-60"
                    animate={{ rotate: [0, -180, -360] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="container max-w-7xl mx-auto px-6 lg:px-10 pt-10 md:pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Text Content */}
                    <motion.div
                        className="flex flex-col justify-center relative z-10"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-balance"
                            variants={item}
                        >
                            <span className="block">The Ultimate</span>
                            <span className="block">Solution<span className="font-normal"> for</span></span>
                            <span className="block">Manufacturing</span>
                            <span className="block">Efficiency</span>
                        </motion.h1>

                        <motion.div
                            className="h-[1px] w-16 bg-black/20 my-8"
                            variants={item}
                        />

                        <motion.p
                            className="text-[#555] text-lg mb-12 max-w-md leading-relaxed"
                            variants={item}
                        >
                            Flow Operations is revolutionizing manufacturing operations by enabling
                            businesses to optimize their workflow with AI-powered insights.
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                        >
                            <ButtonLink
                                href="#demo"
                                variant="default"
                                className="bg-black text-white hover:bg-black/90 px-8 py-3.5 rounded-lg shadow-lg group relative overflow-hidden transition-all duration-300"
                            >
                                <span className="relative z-10 font-medium">Schedule a Demo</span>
                                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                                {/* Button glow effect */}
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -z-10"
                                    animate={{
                                        x: ['-100%', '200%'],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatType: 'loop',
                                        ease: 'linear',
                                        repeatDelay: 1,
                                    }}
                                />
                            </ButtonLink>

                            <ButtonLink
                                href="#features"
                                variant="default"
                                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3.5 rounded-lg transition-colors duration-300 flex items-center justify-center group"
                            >
                                <span>Explore Features</span>
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </ButtonLink>
                        </motion.div>

                        <motion.div
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                            variants={item}
                        >
                            {[
                                // { label: "GLOBAL BRANDS", number: "150+" },
                                // { label: "INTEGRATIONS", number: "80+" },
                                // { label: "INDUSTRIES", number: "25+" },
                                { label: "", number: "" }
                            ].map((item, index) => (
                                <div key={index} className="border border-black/5 rounded-lg p-4 bg-white/50 backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300">
                                    <div className="text-xs text-[#777] mb-1 tracking-wider">{item.label}</div>
                                    <div className="text-xl font-medium">{item.number}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Dashboard UI */}
                    <motion.div
                        className="relative flex items-center justify-center"
                        style={{ y, opacity }}
                    >
                        <div className="relative">
                            {/* Main Dashboard */}
                            <motion.div
                                className="relative z-10"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                whileHover={{
                                    translateY: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="md:pl-10 relative">
                                    {/* Shadow effect */}
                                    <div className="absolute -inset-2.5 bg-gradient-to-tr from-blue-100/20 to-white/5 rounded-2xl blur-xl -z-10"></div>

                                    {/* Dashboard UI */}
                                    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 relative">
                                        <DashboardUI />

                                        {/* Hover shine effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 hover:opacity-100 -translate-x-full hover:translate-x-full transition-all duration-1500 ease-in-out pointer-events-none"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Enhanced Stats card */}
                            <motion.div
                                className="absolute -bottom-6 right-0 md:-right-12 bg-white p-5 rounded-xl shadow-xl border border-gray-100 max-w-[240px] z-20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center space-x-3 mb-1">
                                        <div className="w-3 h-3 bg-green-500 rounded-full">
                                            <motion.div
                                                className="w-full h-full rounded-full bg-green-400 opacity-80"
                                                animate={{ scale: [1, 1.8, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">Performance Score</span>
                                    </div>
                                    <div className="h-[6px] w-full bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full w-0 bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                                            animate={{ width: "87%" }}
                                            transition={{ duration: 1.5, delay: 1.2 }}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-[#777]">Efficiency rating</span>
                                        <span className="text-sm font-medium">87%</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Enhanced Cost savings card */}
                            <motion.div
                                className="absolute -top-8 -left-5 md:-left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/10">
                                        <motion.span
                                            className="text-sm font-medium text-blue-600"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >28%</motion.span>
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500">Average</span>
                                        <div className="text-sm font-medium">Cost reduction</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* New AI insights badge */}
                            <motion.div
                                className="absolute top-1/4 -right-6 md:-right-12 bg-black px-3 py-2 rounded-lg shadow-lg z-20 text-white text-xs flex items-center gap-2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">AI</span>
                                <span>Smart insights ready</span>
                                <motion.div
                                    className="w-2 h-2 bg-green-400 rounded-full"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                        </div>

                        {/* Background decorative elements */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] border border-black/5 rounded-3xl z-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />

                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[110%] border border-black/10 rounded-2xl z-0"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
