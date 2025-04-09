import { motion } from "framer-motion";
import { BarChart3, Activity, ArrowUpRight, TrendingUp, Settings, BarChart, Gauge, TrendingDown } from "lucide-react";

// A mock manufacturing dashboard UI component for visual display
export function DashboardUI() {
    return (
        <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-xl aspect-[5/6]">
            {/* Dashboard header */}
            <div className="border-b border-gray-100 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-gray-700">FlowOps Analytics</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Settings className="w-4 h-4 text-gray-500" />
                    <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-700">JS</span>
                    </div>
                </div>
            </div>

            {/* Dashboard content */}
            <div className="p-5">
                {/* Title section */}
                <div className="mb-8">
                    <h4 className="text-lg font-medium text-black mb-1">Manufacturing Analytics</h4>
                    <div className="flex items-center text-sm text-gray-500">
                        <span>Performance insights</span>
                        <div className="mx-2 w-1 h-1 rounded-full bg-gray-300"></div>
                        <span className="text-green-600 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            8.2% week-over-week
                        </span>
                    </div>
                </div>

                {/* Metrics cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                        { label: "Efficiency Rate", value: "87%", icon: Gauge, color: "bg-blue-500", trend: 3.2, up: true },
                        { label: "Downtime", value: "4.3 hrs", icon: Activity, color: "bg-orange-500", trend: 2.1, up: false },
                        { label: "Production", value: "4,312 units", icon: BarChart, color: "bg-green-500", trend: 5.7, up: true },
                        { label: "Quality Rate", value: "96.2%", icon: BarChart3, color: "bg-purple-500", trend: 1.3, up: true },
                    ].map((metric, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-lg p-3"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className={`${metric.color} p-1.5 rounded-md`}>
                                    <metric.icon className="w-3.5 h-3.5 text-white" />
                                </div>
                                <span className={`text-xs font-medium flex items-center ${metric.up ? 'text-green-600' : 'text-red-500'}`}>
                                    {metric.up ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                                    {metric.trend}%
                                </span>
                            </div>
                            <div className="text-lg font-semibold text-gray-900">{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Chart section */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h5 className="text-sm font-medium text-gray-900">Production Efficiency</h5>
                        <div className="flex items-center text-xs text-blue-600">
                            <span>View Details</span>
                            <ArrowUpRight className="w-3 h-3 ml-1" />
                        </div>
                    </div>

                    {/* Mock chart */}
                    <div className="h-32 flex items-end space-x-2">
                        {[65, 70, 55, 80, 75, 90, 85].map((height, index) => (
                            <motion.div
                                key={index}
                                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                                style={{ height: `${height}%` }}
                                initial={{ scaleY: 0, opacity: 0 }}
                                animate={{ scaleY: 1, opacity: 1 }}
                                transition={{ delay: 0.05 * index, duration: 0.5 }}
                            />
                        ))}
                    </div>

                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>

                {/* AI Insights section */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <h5 className="text-sm font-medium text-gray-900">AI Recommendations</h5>
                    </div>

                    <p className="text-xs text-gray-700 mb-3">
                        Machine 3 shows early warning signs of maintenance issues.
                        Schedule preventive maintenance to avoid potential 4.2 hrs of downtime.
                    </p>

                    <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Confidence: 92%</span>
                        <motion.button
                            className="text-xs bg-blue-500 text-white py-1 px-3 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Take Action
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Floating elements for design */}
            <motion.div
                className="absolute top-20 -right-8 w-16 h-16 border border-gray-200 rounded-md z-0 opacity-30"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 -left-8 w-12 h-12 border border-gray-200 rounded-md z-0 opacity-30"
                animate={{ rotate: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}