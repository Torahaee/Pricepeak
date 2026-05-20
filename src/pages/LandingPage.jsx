import React from "react";

import { motion } from "framer-motion";

import {
    Search,
    Zap,
    Shield,
    BarChart3,
    Globe,
    ArrowRight,
    TrendingDown,
    Bell,
} from "lucide-react";

import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

import { cn } from "../utils/helpers";

import { Footer } from "../components/navigation/Footer";

export function LandingPage() {

    return (
        <div className="relative overflow-hidden pt-24 ">

            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[180px] -z-10 pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[160px] -z-10 pointer-events-none" />

            {/* HERO */}
            <section className="container mx-auto px-4 md:px-6 relative text-center">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.6,
                    }}
                >

                    {/* Badge */}
                    <Badge
                        variant="outline"
                        className="mb-6 py-1.5 px-5 border-violet-500/20 bg-violet-500/5 text-violet-600 rounded-full"
                    >

                        🚀 Next-Gen AI Shopping Intelligence
                    </Badge>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto">

                        Stop Guessing.

                        <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">

              {" "}Buy Smarter
            </span>

                        {" "}with PricePeak AI.
                    </h1>

                    {/* Subtext */}
                    <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">

                        Paste any product URL from Amazon,
                        Flipkart, Myntra, Meesho or any
                        major marketplace and let our AI
                        predict the perfect time to buy.
                    </p>
                </motion.div>

                {/* SEARCH BAR */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.96,
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}

                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}

                    className="max-w-4xl mx-auto mb-20"
                >

                    <div className="relative max-w-4xl mx-auto group">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-700" />

                        {/* Main Bar */}
                        <div
                            className="
                relative
                flex
                items-center
                justify-between
                h-16
                px-2
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                overflow-hidden
                transition-all
                duration-500
                group-hover:border-purple-400/40
                group-hover:bg-white/15
              "
                        >

                            {/* Left Glow */}
                            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-violet-500/10 to-transparent pointer-events-none" />

                            {/* Search Icon */}
                            <div className="pl-5 pr-3 flex items-center justify-center relative z-10 h-full">

                                <Search className="w-5 h-5 text-slate-500 group-hover:text-violet-500 transition-colors duration-300" />
                            </div>

                            {/* Input */}
                            <Input
                                placeholder="Paste Amazon, Flipkart, or product URL..."
                                className="
                  flex-1
                  h-full
                  border-0
                  bg-transparent
                  text-black
                  placeholder:text-slate-500
                  text-[15px]
                  font-medium
                  focus-visible:ring-0
                  focus-visible:border-0
                  shadow-none
                  relative
                  z-10
                  px-0
                "
                            />

                            {/* Analyze Button */}
                            <button
                                className="
                  group
                  relative
                  h-12
                  px-7
                  rounded-full
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  duration-500
                  hover:scale-[1.01]
                  shrink-0
                "
                            >

                                {/* Gradient */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-90" />

                                {/* Hover Glow */}
                                <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                {/* Shine */}
                                <div className="absolute inset-[1px] rounded-full bg-white/10 backdrop-blur-xl border border-white/10" />

                                {/* Text */}
                                <span className="relative z-10 text-white font-semibold text-sm tracking-wide">

                  Analyze Now
                </span>

                                {/* Icon */}
                                <ArrowRight className="relative z-10 w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mt-5 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">

            <span className="flex items-center gap-2 hover:text-violet-500 transition-colors">

              <Zap className="w-4 h-4 text-yellow-500" />

              Instant Discovery
            </span>

                        <span className="flex items-center gap-2 hover:text-violet-500 transition-colors">

              <Shield className="w-4 h-4 text-green-500" />

              Platform Verified
            </span>

                        <span className="flex items-center gap-2 hover:text-violet-500 transition-colors">

              <BarChart3 className="w-4 h-4 text-blue-500" />

              2-Year History
            </span>
                    </div>
                </motion.div>

                {/* STATS */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {[
                        {
                            title: "Price Accuracy",
                            value: "99.8%",
                            desc: "Real-time updates",
                        },

                        {
                            title: "Total Savings",
                            value: "$4.2M+",
                            desc: "Saved by users worldwide",
                        },

                        {
                            title: "AI Prediction",
                            value: "85%+",
                            desc: "Drop forecast precision",
                        },
                    ].map((item, i) => (

                        <motion.div
                            key={i}

                            initial={{
                                opacity: 0,
                                y: 20,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                            }}

                            transition={{
                                delay: 0.4 + i * 0.1,
                            }}
                        >

                            <Card
                                className={cn(
                                    "p-6 bg-white/5 border-white/10 backdrop-blur-md group hover:scale-105 transition-all duration-300 overflow-hidden relative rounded-3xl"
                                )}
                            >

                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <h3 className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-2">

                                    {item.title}
                                </h3>

                                <p className="text-3xl font-black mb-1">

                                    {item.value}
                                </p>

                                <p className="text-xs text-slate-500 font-medium">

                                    {item.desc}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PLATFORMS */}
            <section className="py-20 mt-24 border-y border-white/5 bg-secondary/10">

                <div className="container mx-auto px-4 text-center">

                    <p className="text-slate-500 uppercase tracking-[0.3em] text-xs font-black mb-12">

                        Supporting 50+ Global Retailers
                    </p>

                    <div className="flex flex-wrap justify-center gap-14 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">

                        {[
                            "Amazon",
                            "Flipkart",
                            "Meesho",
                            "Myntra",
                            "Ajio",
                            "Croma",
                        ].map((platform) => (

                            <span
                                key={platform}
                                className="text-2xl font-black tracking-tight"
                            >

                {platform}
              </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24 container mx-auto px-4">

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-black mb-5">

                        Why PricePeak?
                    </h2>

                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">

                        We combine advanced AI prediction systems
                        with real-time platform intelligence
                        to give you unfair shopping advantages.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[
                        {
                            icon: <Zap />,
                            title: "Instant Analysis",
                            desc:
                                "Paste a URL and get a complete AI-powered pricing report in seconds.",
                        },

                        {
                            icon: <BarChart3 />,
                            title: "Historical Trends",
                            desc:
                                "Track how product pricing fluctuated over the last 24 months.",
                        },

                        {
                            icon: <TrendingDown />,
                            title: "Price Prediction",
                            desc:
                                "Our AI predicts future price drops with advanced forecasting.",
                        },

                        {
                            icon: <Globe />,
                            title: "Platform Compare",
                            desc:
                                "Compare prices across Amazon, Flipkart, Meesho and more.",
                        },

                        {
                            icon: <Bell />,
                            title: "Smart Alerts",
                            desc:
                                "Receive instant notifications when products hit target prices.",
                        },

                        {
                            icon: <Shield />,
                            title: "Authenticity Check",
                            desc:
                                "AI-powered seller and review verification to avoid fake deals.",
                        },
                    ].map((feature, i) => (

                        <motion.div
                            key={i}

                            whileHover={{
                                y: -5,
                            }}

                            className="
                p-8
                rounded-3xl
                bg-white/5
                border
                border-white/10
                hover:border-primary/40
                backdrop-blur-md
                transition-all
                group
              "
                        >

                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">

                                {feature.icon}
                            </div>

                            <h4 className="text-xl font-bold mb-3">

                                {feature.title}
                            </h4>

                            <p className="text-slate-500 text-sm leading-relaxed">

                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}