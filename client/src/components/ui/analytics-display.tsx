import { motion } from "framer-motion";
import { BarChart3, ArrowUpRight, TrendingUp, Gauge, Clock } from "lucide-react";

export function AnalyticsDisplay() {
    // Array of production data for visualization
    const productionData = [78, 55, 67, 80, 95, 87, 90, 76, 82, 89, 93, 85];
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

    return (
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden">
            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-xl font-light text-gray-900">Production Analytics</h3>
                        <p className="text-sm text-gray-500">Real-time manufacturing metrics</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                        <span>Live</span>
                        <motion.div
                            className="w-2 h-2 rounded-full bg-blue-600 ml-1"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                    {[
                        {
                            label: "Efficiency",
                            value: "92%",
                            change: "+3.2%",
                            icon: Gauge,
                            color: "bg-blue-500"
                        },
                        {
                            label: "Production",
                            value: "8,432",
                            change: "+5.7%",
                            icon: BarChart3,
                            color: "bg-green-500"
                        },
                        {
                            label: "Cycle Time",
                            value: "4.2 min",
                            change: "-1.8%",
                            icon: Clock,
                            color: "bg-purple-500"
                        },
                        {
                            label: "Cost Savings",
                            value: "$12.5K",
                            change: "+8.3%",
                            icon: TrendingUp,
                            color: "bg-amber-500"
                        }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * index, duration: 0.4 }}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className={`${stat.color} p-1 rounded-md`}>
                                    <stat.icon className="w-3.5 h-3.5 text-white" />
                                </div>
                                <span className="text-xs text-green-600">{stat.change}</span>
                            </div>
                            <div className="text-xl font-medium">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Chart */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-sm font-medium">Monthly Production Output</h4>
                        <button className="text-xs text-blue-600 flex items-center">
                            <span>View Details</span>
                            <ArrowUpRight className="w-3 h-3 ml-1" />
                        </button>
                    </div>

                    <div className="h-36 flex items-end space-x-1">
                        {productionData.map((value, index) => (
                            <motion.div
                                key={index}
                                className="flex-1 relative group"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ delay: 0.05 * index, duration: 0.5 }}
                            >
                                <motion.div
                                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none"
                                    transition={{ duration: 0.2 }}
                                >
                                    {value}%
                                </motion.div>
                                <div className="w-full bg-blue-100 rounded-t" style={{ height: `${value}%` }}>
                                    <div
                                        className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t h-full"
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-2">
                        {daysOfWeek.map((day, index) => (
                            <div key={index} className="text-xs text-gray-500">{day}</div>
                        ))}
                    </div>
                </div>

                {/* AI Insights */}
                <motion.div
                    className="bg-blue-50 border border-blue-100 rounded-lg p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <div className="flex space-x-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                            <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div>
                            <h5 className="text-sm font-medium mb-1">AI Optimization Insight</h5>
                            <p className="text-xs text-gray-700">
                                Analysis suggests adjusting Line 2 parameters could increase throughput by 8.3%
                                while reducing energy consumption by 5.2%. Click for implementation details.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="text-xs bg-blue-500 text-white py-1 px-3 rounded-full">
                            Apply Changes
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 border border-gray-200 rounded-md z-0"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-6 -left-6 w-14 h-14 border border-gray-200 rounded-md z-0"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
        </div>
    );
}