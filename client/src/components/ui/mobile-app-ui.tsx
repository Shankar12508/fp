import { motion } from "framer-motion";
import { Check, Bell, PieChart, Settings, User, Gauge, Calendar, BarChart, Activity } from "lucide-react";

// A mock mobile app UI component for visual display
export function MobileAppUI() {
    return (
        <div className="relative mx-auto">
            {/* Phone frame */}
            <div className="relative overflow-hidden bg-black rounded-[40px] w-[270px] aspect-[9/19] p-2 shadow-2xl">
                {/* Phone screen */}
                <div className="absolute inset-2 rounded-[36px] overflow-hidden bg-gray-50">
                    {/* Status bar */}
                    <div className="bg-white p-2 flex justify-between items-center">
                        <div className="text-xs font-medium">9:41</div>
                        <div className="flex items-center space-x-1">
                            <div className="w-4 h-4">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="font-bold text-xs">FlowOps</div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 flex items-end">
                                <div className="w-[3px] h-[6px] bg-black rounded-sm"></div>
                                <div className="w-[3px] h-[9px] bg-black rounded-sm mx-[1px]"></div>
                                <div className="w-[3px] h-[12px] bg-black rounded-sm"></div>
                            </div>
                            <div className="text-xs">67%</div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 h-full">
                        {/* App header */}
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-sm font-semibold text-black">Shop Floor</h3>
                                <p className="text-[10px] text-gray-500">Real-time manufacturing insights</p>
                            </div>
                            <div className="flex space-x-2">
                                <Bell className="w-4 h-4 text-gray-600" />
                                <motion.div
                                    className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <User className="w-3 h-3 text-blue-700" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="flex justify-between mb-4">
                            {[
                                { value: "97%", label: "OEE", color: "bg-green-500" },
                                { value: "103%", label: "Output", color: "bg-blue-500" },
                                { value: "18min", label: "Downtime", color: "bg-orange-500" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-1 bg-white rounded-lg p-1.5 mx-1 first:ml-0 last:mr-0 shadow-sm"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                >
                                    <div className={`${stat.color} h-1 rounded-full w-1/2 mb-1`}></div>
                                    <div className="text-[11px] font-semibold">{stat.value}</div>
                                    <div className="text-[9px] text-gray-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main metrics */}
                        <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                            <div className="flex justify-between items-center mb-2">
                                <div className="text-xs font-medium flex items-center">
                                    <Gauge className="w-3 h-3 mr-1 text-blue-600" />
                                    Machine Performance
                                </div>
                                <div className="text-[9px] text-blue-600">View All</div>
                            </div>

                            {[
                                { machine: "CNC Mill #3", status: "Running", completion: 78, healthy: true },
                                { machine: "Assembly Line A", status: "Idle", completion: 100, healthy: true },
                                { machine: "Packaging #2", status: "Alert", completion: 45, healthy: false }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-between py-1.5 border-t border-gray-100"
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                                >
                                    <div>
                                        <div className="text-[10px] font-medium">{item.machine}</div>
                                        <div className={`text-[9px] ${item.healthy ? 'text-green-600' : 'text-red-500'}`}>
                                            {item.status}
                                        </div>
                                    </div>
                                    <div className="w-20 bg-gray-100 rounded-full h-1.5">
                                        <motion.div
                                            className={`h-full rounded-full ${item.healthy ? 'bg-green-500' : 'bg-red-500'}`}
                                            style={{ width: `${item.completion}%` }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.completion}%` }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* AI insights */}
                        <motion.div
                            className="bg-blue-50 border border-blue-100 rounded-lg p-2 shadow-sm mb-3"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <div className="flex items-center space-x-2 mb-1">
                                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                    <span className="text-white text-[8px] font-bold">AI</span>
                                </div>
                                <div className="text-[10px] font-medium">Predictive Analysis</div>
                            </div>
                            <p className="text-[9px] text-gray-700">
                                Maintenance recommended for CNC Mill #2 in 48 hours to prevent potential downtime.
                            </p>
                            <div className="mt-1 flex justify-end">
                                <div className="text-[8px] bg-blue-500 text-white py-0.5 px-2 rounded-full">
                                    Schedule
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom navigation */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1.5 flex justify-around">
                            {[
                                { icon: PieChart, active: true },
                                { icon: BarChart, active: false },
                                { icon: Calendar, active: false },
                                { icon: Activity, active: false },
                                { icon: Settings, active: false }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`p-1 rounded-full ${item.active ? 'bg-blue-100' : ''}`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <item.icon className={`w-4 h-4 ${item.active ? 'text-blue-600' : 'text-gray-400'}`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute -top-3 -right-3 w-8 h-8 border border-gray-300 rounded-md z-0"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-3 -left-3 w-6 h-6 border border-gray-300 rounded-md z-0"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}