import React, { useState } from "react";

import { motion } from "framer-motion";

import {
    Search,
    Filter,
    ExternalLink,
    ShieldCheck,
    Zap,
    Star,
    Sparkles,
} from "lucide-react";

import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Badge } from "../components/ui/Badge";

import { cn } from "../utils/helpers";

export function PriceComparisonPage() {

    const [query, setQuery] = useState("");

    const [comparisons, setComparisons] = useState([]);

    const searchProduct = async () => {

        if (!query) return;

        try {

            const response = await fetch(
                `http://localhost:3000/search?q=${query}`
            );

            const data = await response.json();

            setComparisons(data);

        } catch (error) {

            console.error("Error fetching products:", error);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden pt-28 pb-20">

            {/* Ambient Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full -z-10 pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/10 blur-[160px] rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">

                {/* HERO */}
                <div className="max-w-4xl mx-auto text-center mb-20">

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
                            duration: 0.5,
                        }}
                    >

                        <Badge
                            variant="outline"
                            className="mb-6 py-1.5 px-5 border-violet-500/20 bg-violet-500/5 text-violet-600 rounded-full"
                        >

                            ⚡ AI Powered Smart Comparison
                        </Badge>

                        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">

                            Compare Prices Across

                            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">

                                {" "}Every Platform
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">

                            Discover the lowest possible price,
                            verified sellers, and AI-backed
                            recommendations instantly.
                        </p>
                    </motion.div>
                </div>

                {/* SEARCH */}
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
                        delay: 0.2,
                    }}

                    className="max-w-4xl mx-auto mb-20"
                >

                    <div className="relative group">

                        <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-700" />

                        <div className="relative flex items-center justify-between h-16 px-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-500 group-hover:border-purple-400/40">

                            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-violet-500/10 to-transparent pointer-events-none" />

                            <div className="pl-5 pr-3 flex items-center justify-center relative z-10 h-full">

                                <Search className="w-5 h-5 text-slate-500 group-hover:text-violet-500 transition-colors duration-300" />
                            </div>

                            <Input
                                placeholder="Search products..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 h-full border-0 bg-transparent text-black placeholder:text-slate-500 text-[15px] font-medium focus-visible:ring-0 focus-visible:border-0 shadow-none relative z-10 px-0"
                            />

                            <button
                                onClick={searchProduct}
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

                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-90" />

                                <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                <div className="absolute inset-[1px] rounded-full bg-white/10 backdrop-blur-xl border border-white/10" />

                                <span className="relative z-10 text-white font-semibold text-sm tracking-wide">

                                    Compare
                                </span>

                                <Sparkles className="relative z-10 w-4 h-4 text-white" />
                            </button>
                        </div>

                        {/* Categories */}
                        <div className="mt-6 flex flex-wrap justify-center gap-5">

                            {[
                                "Electronics",
                                "Fashion",
                                "Home",
                                "Beauty",
                            ].map((cat) => (

                                <button
                                    key={cat}
                                    className="text-sm font-medium text-slate-500 hover:text-violet-500 transition-colors flex items-center gap-2"
                                >

                                    <Zap className="w-3.5 h-3.5" />

                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* RESULTS */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* SIDEBAR */}
                    <div className="lg:col-span-3">

                        <div className="sticky top-28">

                            <Card className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">

                                <div className="flex items-center gap-3 mb-8">

                                    <div className="w-10 h-10 rounded-2xl bg-violet-500/10 flex items-center justify-center">

                                        <Filter className="w-5 h-5 text-violet-500" />
                                    </div>

                                    <div>

                                        <h3 className="font-black text-lg">
                                            Smart Filters
                                        </h3>

                                        <p className="text-xs text-slate-500">
                                            Refine your comparison
                                        </p>
                                    </div>
                                </div>

                            </Card>
                        </div>
                    </div>

                    {/* RESULTS */}
                    <div className="lg:col-span-9">

                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-white/5 bg-white/[0.03]">

                                <div className="flex items-center gap-3">

                                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 flex items-center justify-center">

                                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                    </div>

                                    <div>

                                        <h3 className="font-black text-lg text-black">

                                            {comparisons.length} Stores Verified
                                        </h3>

                                        <p className="text-sm text-slate-500">
                                            Real-time platform intelligence
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="divide-y divide-white/5">

                                {comparisons.map((item, idx) => (

                                    <motion.div
                                        key={idx}

                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}

                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}

                                        transition={{
                                            delay: idx * 0.05,
                                        }}

                                        className="p-6 md:p-8 hover:bg-white/[0.03] transition-all duration-300 group"
                                    >

                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                                            <div className="flex items-center gap-5">

                                                <div className="w-16 h-16 rounded-2xl bg-black border border-white/5 flex items-center justify-center font-black text-[10px] uppercase tracking-tight text-slate-300 shrink-0">

                                                    {item.platform_name}
                                                </div>

                                                <div>

                                                    <h4 className="text-xl font-black mb-2 text-black">

                                                        {item.product_name}
                                                    </h4>

                                                    <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest font-black">

                                                        <span className="text-emerald-500">

                                                            IN STOCK
                                                        </span>

                                                        <span className="opacity-20">•</span>

                                                        <span className="text-slate-500">
                                                            Free Shipping
                                                        </span>

                                                        <span className="opacity-20">•</span>

                                                        <span className="flex items-center gap-1 text-slate-500">

                                                            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />

                                                            4.9 Rating
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">

                                                <div className="sm:text-right">

                                                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-1">

                                                        Best Price
                                                    </p>

                                                    <p className="text-4xl font-black text-black">

                                                        ₹{item.price}
                                                    </p>
                                                </div>

                                                <Button className="h-12 px-7 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-bold hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-violet-500/20">

                                                    Visit Store

                                                    <ExternalLink className="ml-2 w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}