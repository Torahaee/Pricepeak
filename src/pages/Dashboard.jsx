import React from "react";

import { motion } from "framer-motion";

import {
    Bell,
    Settings,
    History,
    Heart,
    TrendingDown,
    ShoppingBag,
    Plus,
    Search,
    Filter,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/Tabs";

import { ProductCard } from "../components/cards/ProductCard";

import { TRENDING_DEALS } from "../services/mockData";

export function DashboardPage() {

    return (
        <div className="relative min-h-screen overflow-hidden pt-28 pb-20">

            {/* Ambient Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full -z-10 pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/10 blur-[160px] rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">

                {/* HERO */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10 mb-16">

                    {/* Left */}
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

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/5 border border-violet-500/10 mb-6">

                            <Sparkles className="w-4 h-4 text-violet-500" />

                            <span className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">

                AI Dashboard
              </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-5">

                            Smart Shopping

                            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">

                {" "}Control Center
              </span>
                        </h1>

                        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">

                            Track products, monitor intelligent
                            alerts, compare trends, and let
                            AI optimize your purchases.
                        </p>
                    </motion.div>

                    {/* Right Action Card */}
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

                        className="w-full xl:w-[380px]"
                    >

                        <Card className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden relative">

                            {/* Glow */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full" />

                            <div className="relative">

                                <div className="flex items-center justify-between mb-6">

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-2">

                                            Total Savings
                                        </p>

                                        <h3 className="text-4xl font-black">

                                            $4,281
                                        </h3>
                                    </div>

                                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">

                                        <TrendingDown className="w-7 h-7 text-emerald-500" />
                                    </div>
                                </div>

                                <Button className="w-full h-14 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-bold shadow-lg shadow-violet-500/20 hover:scale-[1.01] transition-all duration-300">

                                    Create New Tracker

                                    <ArrowUpRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">

                    {[
                        {
                            label: "Alert Matrix",
                            value: "12",
                            icon: <Bell className="text-violet-500 w-5 h-5" />,
                            glow: "from-violet-500/10",
                        },

                        {
                            label: "Net Savings",
                            value: "$1,248",
                            icon: <TrendingDown className="text-emerald-500 w-5 h-5" />,
                            glow: "from-emerald-500/10",
                        },

                        {
                            label: "Wishlist Pulse",
                            value: "48",
                            icon: <Heart className="text-red-500 w-5 h-5" />,
                            glow: "from-red-500/10",
                        },

                        {
                            label: "Buy Cycles",
                            value: "8",
                            icon: <ShoppingBag className="text-cyan-500 w-5 h-5" />,
                            glow: "from-cyan-500/10",
                        },
                    ].map((stat, i) => (

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
                                delay: i * 0.1,
                            }}
                        >

                            <Card className="relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">

                                {/* Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.glow} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                                <div className="relative flex items-center justify-between">

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-3">

                                            {stat.label}
                                        </p>

                                        <h3 className="text-4xl font-black">

                                            {stat.value}
                                        </h3>
                                    </div>

                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">

                                        {stat.icon}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* TABS */}
                <Tabs
                    defaultValue="tracking"
                    className="w-full"
                >

                    {/* Controls */}
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-10">

                        {/* Tabs */}
                        <TabsList className="bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-xl">

                            <TabsTrigger
                                value="tracking"
                                className="rounded-full px-8 py-2.5 text-sm font-bold"
                            >

                                Tracking
                            </TabsTrigger>

                            <TabsTrigger
                                value="alerts"
                                className="rounded-full px-8 py-2.5 text-sm font-bold"
                            >

                                Alerts
                            </TabsTrigger>

                            <TabsTrigger
                                value="history"
                                className="rounded-full px-8 py-2.5 text-sm font-bold"
                            >

                                History
                            </TabsTrigger>
                        </TabsList>

                        {/* Search */}
                        <div className="flex items-center gap-3 w-full xl:w-auto">

                            {/* Search Input */}
                            <div className="relative flex-1 xl:w-[320px] group">

                                <div className="absolute inset-0 rounded-full bg-violet-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                <div className="relative flex items-center h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden px-4">

                                    <Search className="w-4 h-4 text-slate-500 mr-3" />

                                    <Input
                                        placeholder="Search products..."
                                        className="border-0 bg-transparent h-full focus-visible:ring-0 shadow-none px-0 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Filter */}
                            <Button
                                variant="outline"
                                size="icon"
                                className="w-12 h-12 rounded-full border-white/10 bg-white/5 backdrop-blur-xl hover:bg-violet-500/10 hover:border-violet-500/20 transition-all"
                            >

                                <Filter className="w-4 h-4" />
                            </Button>

                            {/* Settings */}
                            <Button
                                variant="outline"
                                size="icon"
                                className="w-12 h-12 rounded-full border-white/10 bg-white/5 backdrop-blur-xl hover:bg-violet-500/10 hover:border-violet-500/20 transition-all"
                            >

                                <Settings className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* TRACKING */}
                    <TabsContent value="tracking">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                            {TRENDING_DEALS.map((deal, i) => (

                                <ProductCard
                                    key={deal.id}
                                    id={deal.id}
                                    name={deal.name}
                                    image={deal.image}
                                    oldPrice={deal.oldPrice}
                                    newPrice={deal.newPrice}
                                    discount={deal.discount}
                                    index={i}
                                />
                            ))}

                            {TRENDING_DEALS.map((deal, i) => (

                                <ProductCard
                                    key={`${deal.id}-copy`}
                                    id={deal.id}
                                    name={deal.name}
                                    image={deal.image}
                                    oldPrice={deal.oldPrice}
                                    newPrice={deal.newPrice}
                                    discount={deal.discount}
                                    index={i + 3}
                                />
                            ))}
                        </div>
                    </TabsContent>

                    {/* ALERTS */}
                    <TabsContent value="alerts">

                        <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-14 text-center">

                            {/* Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-3xl rounded-full" />

                            <div className="relative">

                                <div className="w-24 h-24 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-8">

                                    <Bell className="w-10 h-10 text-violet-500" />
                                </div>

                                <h3 className="text-3xl font-black mb-4">

                                    No Active Price Alerts
                                </h3>

                                <p className="text-slate-500 max-w-md mx-auto leading-relaxed mb-10">

                                    Set intelligent AI alerts and let
                                    PricePeak monitor the market for
                                    the perfect buying opportunity.
                                </p>

                                <Button className="h-14 px-10 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-black uppercase tracking-[0.2em] text-xs shadow-lg shadow-violet-500/20 hover:scale-[1.01] transition-all duration-300">

                                    Create First Alert
                                </Button>
                            </div>
                        </Card>
                    </TabsContent>

                    {/* HISTORY */}
                    <TabsContent value="history">

                        <div className="space-y-5">

                            {[1, 2, 3].map((i) => (

                                <motion.div
                                    key={i}

                                    whileHover={{
                                        y: -2,
                                    }}
                                >

                                    <Card className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300">

                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                                            {/* Left */}
                                            <div className="flex items-center gap-5">

                                                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0">

                                                    <img
                                                        src={`https://images.unsplash.com/photo-${1600000000000 + i}?auto=format&fit=crop&w=300&q=80`}
                                                        alt="history"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div>

                                                    <h4 className="text-xl font-black mb-2">

                                                        Sony XM5 Purchase
                                                    </h4>

                                                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">

                                                        <History className="w-3 h-3" />

                                                        May 12, 2026
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right */}
                                            <div className="md:text-right">

                                                <p className="text-3xl font-black text-emerald-500 mb-1">

                                                    $249
                                                </p>

                                                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">

                                                    Saved $100
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}