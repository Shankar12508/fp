import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import { ScrollReveal, StaggeredReveal } from "@/hooks/use-scroll-reveal";
import { MobileAppUI } from "../ui/mobile-app-ui";
import { AnalyticsDisplay } from "../ui/analytics-display";
import { ImageWrapper } from "../ui/image-wrapper";

export function FeaturesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            className="section-spacing bg-gradient-to-b from-[#fcfcfc] to-white"
            id="features"
            ref={sectionRef}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute right-0 top-0 w-full h-full">
                        <svg viewBox="0 0 100 100" className="absolute w-48 h-48 text-black opacity-5 top-[5%] right-[10%]">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"></circle>
                            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"></circle>
                            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"></circle>
                        </svg>

                        <svg viewBox="0 0 100 100" className="absolute w-64 h-64 text-black opacity-5 bottom-[15%] left-[5%]">
                            <rect width="70" height="70" x="15" y="15" fill="none" stroke="currentColor" strokeWidth="0.5" rx="6"></rect>
                            <rect width="50" height="50" x="25" y="25" fill="none" stroke="currentColor" strokeWidth="0.5" rx="4"></rect>
                            <rect width="30" height="30" x="35" y="35" fill="none" stroke="currentColor" strokeWidth="0.5" rx="2"></rect>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="container max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                {/* Top section with heading and intro */}
                <div className="flex flex-col md:flex-row md:items-end gap-12 lg:gap-24 mb-20 lg:mb-32">
                    <div className="md:w-2/5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <h2 className="mb-6 relative z-10">
                                Key Features
                                <motion.span
                                    className="absolute -z-10 -inset-1 bg-gradient-to-r from-blue-50 to-blue-100/30 blur-xl rounded-xl opacity-70"
                                    animate={{
                                        opacity: [0.4, 0.7, 0.4],
                                        scale: [0.95, 1, 0.95],
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </h2>

                            <motion.div
                                className="h-[2px] w-16 bg-gradient-to-r from-black/30 to-black/5 mb-6"
                                initial={{ width: 0 }}
                                whileInView={{ width: 64 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />
                        </motion.div>
                    </div>

                    <div className="md:w-3/5">
                        <motion.p
                            className="text-[#555] text-lg font-light mb-6 max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Flow Opserations transforms manufacturing operations with a comprehensive suite of tools designed for the modern factory floor.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {[
                                { name: "AI-Powered", color: "from-blue-500/10 to-blue-400/5" },
                                { name: "Real-time Analytics", color: "from-amber-500/10 to-amber-400/5" },
                                { name: "Seamless Integration", color: "from-emerald-500/10 to-emerald-400/5" }
                            ].map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className={`inline-block text-xs py-1.5 px-3.5 rounded-full text-black/80 font-medium bg-gradient-to-r ${tag.color} border border-black/5`}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {tag.name}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Primary feature highlight (larger feature) */}
                <div className="mb-32 relative">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 overflow-hidden -z-10">
                        <motion.div
                            className="absolute top-[20%] -right-[20%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-blue-50 to-blue-100 opacity-20 blur-[120px]"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <ScrollReveal
                        className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 relative"
                        direction="bottom"
                    >
                        <div className="lg:col-span-3 order-2 lg:order-1 relative">
                            <motion.div
                                className="rounded-xl overflow-hidden relative z-10 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.1)]"
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 20px 60px -12px rgba(0,0,0,0.15)',
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Subtle border glow */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-300/20 to-blue-500/10 opacity-50 -z-10 blur-xl"></div>

                                {/* Dashboard UI */}
                                <div className="relative rounded-xl overflow-hidden border border-gray-200">
                                    <AnalyticsDisplay />

                                    {/* Hover effect overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 hover:opacity-100 -translate-x-full hover:translate-x-full transition-all duration-1500 ease-in-out pointer-events-none"
                                    />
                                </div>
                            </motion.div>

                            {/* Decorative elements */}
                            <motion.div
                                className="absolute -top-6 -left-6 w-24 h-24 border border-gray-200 rounded-xl z-0 opacity-50"
                                animate={{ rotate: [0, 15, 0] }}
                                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                            />

                            <motion.div
                                className="absolute -bottom-6 -right-6 w-20 h-20 border border-gray-200 rounded-lg z-0 opacity-50"
                                animate={{ rotate: [0, -20, 0] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Floating callout badge */}
                            <motion.div
                                className="absolute -bottom-4 left-10 bg-white px-4 py-2 rounded-lg shadow-lg z-20 border border-gray-100 text-sm flex items-center gap-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                <div className="w-3 h-3 bg-green-500 rounded-full">
                                    <motion.div
                                        className="w-full h-full rounded-full bg-green-400 opacity-80"
                                        animate={{ scale: [1, 1.8, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                                <span className="font-medium">Live data streaming</span>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-2 flex flex-col justify-center order-1 lg:order-2">
                            <div className="inline-flex items-center mb-6 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-blue-400/5 text-black/80 rounded-full border border-blue-500/10">
                                <span className="text-xs font-semibold">{FEATURES[0].badge.label}</span>
                                <span className="ml-2 w-1 h-1 bg-blue-500/50 rounded-full"></span>
                                <span className="ml-2 text-[10px] text-blue-500/80">CORE FEATURE</span>
                            </div>

                            <h3 className="text-3xl font-light mb-6 relative">
                                {FEATURES[0].title}
                                <motion.span
                                    className="absolute -z-10 -inset-1 bg-gradient-to-r from-blue-50 to-transparent blur-md rounded-xl opacity-0"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.7 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                />
                            </h3>

                            <p className="text-[#555] mb-8 leading-relaxed">
                                {FEATURES[0].description}
                            </p>

                            <StaggeredReveal className="space-y-4 mb-8">
                                {[
                                    { text: "Predictive maintenance alerts", color: "from-green-500/20 to-green-500/5" },
                                    { text: "Real-time equipment monitoring", color: "from-blue-500/20 to-blue-500/5" },
                                    { text: "Smart task scheduling", color: "from-amber-500/20 to-amber-500/5" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={`flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r ${item.color}`}
                                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                    >
                                        <div className="mt-0.5 flex-shrink-0 bg-white w-5 h-5 rounded-full flex items-center justify-center">
                                            <Check className="w-3 h-3 text-black" />
                                        </div>
                                        <span className="text-black/80">{item.text}</span>
                                    </motion.div>
                                ))}
                            </StaggeredReveal>

                            <a href="#" className="group inline-flex items-center gap-2 text-black font-medium border-b-2 border-transparent hover:border-black transition-all duration-300 w-fit">
                                Explore detailed capabilities
                                <motion.span
                                    className="inline-block"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </motion.span>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Secondary features with mobile app - enhanced section */}
                <div className="relative mb-24">
                    {/* Background styling elements */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute right-0 bottom-0 w-full h-full">
                            <motion.div
                                className="absolute top-[40%] -left-[10%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-amber-50 to-amber-100 opacity-30 blur-[100px]"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.4, 0.2]
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 relative">
                        {/* Mobile app image */}
                        <ScrollReveal
                            className="relative flex items-center justify-center"
                            direction="left"
                            delay={200}
                        >
                            <motion.div
                                className="relative z-10"
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                {/* Shadow/glow effect */}
                                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/10 to-amber-100/5 rounded-[40px] blur-xl -z-10"></div>

                                {/* Decorative elements */}
                                <motion.div
                                    className="absolute -top-6 -left-6 w-16 h-16 border border-amber-200/20 rounded-full"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                />

                                <motion.div
                                    className="absolute -bottom-8 -right-8 w-20 h-20 border border-amber-200/20 rounded-full"
                                    animate={{ rotate: [0, -360] }}
                                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Phone frame */}
                                <div className="relative rounded-[32px] overflow-hidden border-[9px] border-black shadow-2xl">
                                    <MobileAppUI />

                                    {/* Screen reflection overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 -translate-x-full hover:translate-x-full transition-all duration-1500 ease-in-out pointer-events-none"
                                    />
                                </div>

                                {/* Floating notification */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-black text-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium flex items-center gap-2 z-20"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: 0.9 }}
                                >
                                    <span className="w-2 h-2 bg-red-500 rounded-full">
                                        <motion.span
                                            className="absolute inset-0 w-2 h-2 bg-red-400 rounded-full"
                                            animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </span>
                                    <span>Alert: Line 3 status change</span>
                                </motion.div>
                            </motion.div>
                        </ScrollReveal>

                        {/* Content */}
                        <div className="flex flex-col justify-center">
                            <ScrollReveal
                                className="mb-8"
                                direction="right"
                                delay={300}
                            >
                                <div className="inline-flex items-center mb-6 px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-400/5 text-black/80 rounded-full border border-amber-500/10">
                                    <span className="text-xs font-semibold">Mobile Integration</span>
                                    <span className="ml-2 w-1 h-1 bg-amber-500/50 rounded-full"></span>
                                    <span className="ml-2 text-[10px] text-amber-500/80">ANYWHERE ACCESS</span>
                                </div>

                                <h3 className="text-3xl font-light mb-6 relative">
                                    Control From Anywhere
                                    <motion.span
                                        className="absolute -z-10 -inset-1 bg-gradient-to-r from-amber-50 to-transparent blur-md rounded-xl opacity-0"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.7 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                    />
                                </h3>

                                <motion.div
                                    className="h-[2px] w-16 bg-gradient-to-r from-amber-500/30 to-amber-500/5 mb-6"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 64 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                />

                                <p className="text-[#555] mb-8 leading-relaxed">
                                    Flow Operations puts real-time manufacturing insights in your pocket. Monitor production, receive alerts, and take action from anywhere with our intuitive mobile experience.
                                </p>
                            </ScrollReveal>

                            <StaggeredReveal
                                className="space-y-4 mb-8"
                                staggerDelay={150}
                            >
                                {[
                                    { text: "Real-time KPI monitoring on the go", icon: "📊" },
                                    { text: "Instant notifications for critical events", icon: "🔔" },
                                    { text: "Remote control of shop floor processes", icon: "🔄" },
                                    { text: "Team collaboration features integrated", icon: "👥" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 p-3 pl-4 rounded-lg hover:bg-amber-50/50 transition-colors duration-200"
                                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 shadow-sm flex items-center justify-center">
                                            <span className="text-base">{item.icon}</span>
                                        </div>
                                        <div>
                                            <span className="font-medium text-black/80">{item.text}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </StaggeredReveal>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <a href="#" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Additional features grid - enhanced */}
                <div className="pt-12 relative">
                    {/* Section header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-light mb-4">More Powerful Features</h3>
                        <div className="h-[2px] w-16 bg-gradient-to-r from-black/30 to-black/5 mx-auto mb-6" />
                        <p className="text-[#555] max-w-2xl mx-auto">
                            FlowOps offers a comprehensive suite of tools designed to optimize every aspect of your manufacturing process.
                        </p>
                    </motion.div>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                        {[
                            {
                                title: "AI-Powered Optimization",
                                description: "Our machine learning algorithms analyze production patterns to find optimization opportunities, reducing downtime and maximizing throughput.",
                                badge: { label: "Smart Automation" },
                                color: "from-blue-500/10 to-blue-400/5",
                                borderColor: "border-blue-200/30",
                                icon: "🧠"
                            },
                            {
                                title: "Seamless Integration",
                                description: "Connect FlowOps with your existing systems through our extensive API library and pre-built integrations with major manufacturing software.",
                                badge: { label: "Connectivity" },
                                color: "from-emerald-500/10 to-emerald-400/5",
                                borderColor: "border-emerald-200/30",
                                icon: "🔄"
                            },
                            {
                                title: "Real-Time Analytics",
                                description: "Gain instant visibility into your entire operation with customizable dashboards that highlight the metrics that matter most to your business.",
                                badge: { label: "Business Intelligence" },
                                color: "from-amber-500/10 to-amber-400/5",
                                borderColor: "border-amber-200/30",
                                icon: "📊"
                            }
                        ].map((feature, index) => (
                            <ScrollReveal
                                key={index}
                                className={`group`}
                                delay={index * 200}
                                direction={index === 0 ? "left" : index === 1 ? "bottom" : "right"}
                            >
                                <motion.div
                                    className={`h-full p-6 rounded-xl bg-white border ${feature.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                                    whileHover={{
                                        y: -6,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {/* Feature card background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />

                                    {/* Top badge */}
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-black/5 text-black/80 rounded-full">
                                                {feature.badge.label}
                                            </div>

                                            <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${feature.color} text-lg shadow-sm`}>
                                                {feature.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-medium mb-3 group-hover:text-black transition-colors duration-300">
                                            {feature.title}
                                        </h3>

                                        <p className="text-[#555] mb-6 group-hover:text-black/70 transition-colors duration-300">
                                            {feature.description}
                                        </p>

                                        {/* Feature card footer with hover effect */}
                                        <div className="pt-2 mt-auto">
                                            <motion.div
                                                className="overflow-hidden relative inline-flex items-center gap-1"
                                                whileHover={{ gap: 8, transition: { duration: 0.3 } }}
                                            >
                                                <span className="font-medium text-sm relative z-10 text-black">Explore feature</span>
                                                <ArrowRight className="w-4 h-4 text-black relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                                                <motion.div
                                                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300"
                                                />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <motion.div
                                        className="absolute -bottom-2 -right-2 w-16 h-16 border-t border-l border-gray-200/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        animate={{ rotate: [0, 90] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* View all features button */}
                    <motion.div
                        className="flex justify-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <a
                            href="#all-features"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors duration-300 shadow-md"
                        >
                            <span>View all features</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
