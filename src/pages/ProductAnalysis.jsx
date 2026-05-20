import React from "react";

import { motion } from "framer-motion";

import {
    ArrowLeft,
    ExternalLink,
    Star,
    TrendingDown,
    Flame,
    Bell,
    ShoppingBag,
    Sparkles,
    ShieldCheck,
    Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

import { PriceChart } from "../components/charts/PriceChart";
import { PredictionChart } from "../components/charts/PredictionChart";

import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/Tabs";

import { MOCK_PRODUCT } from "../services/mockData";

import { cn } from "../utils/helpers";

export function ProductAnalysisPage() {

    const product = MOCK_PRODUCT;

    const discount = Math.round(
        (
            (product.originalPrice - product.currentPrice) /
            product.originalPrice
        ) * 100
    );

    return (
        <div className="relative min-h-screen overflow-hidden pt-28 pb-20">

            {/* Ambient Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full -z-10 pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/10 blur-[160px] rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">

                {/* Top Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">

                    {/* Back */}
                    <Link
                        to="/"
                        className="group inline-flex items-center gap-3 text-sm font-medium text-slate-500 hover:text-violet-600 transition-all"
                    >

                        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group-hover:bg-violet-500/10 transition-all">

                            <ArrowLeft className="w-4 h-4" />
                        </div>

                        Back to Dashboard
                    </Link>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3">

                        <Button className="h-12 px-6 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-bold shadow-lg shadow-violet-500/20 hover:scale-[1.02] transition-all duration-300">

                            <Bell className="w-4 h-4 mr-2" />

                            Track Price
                        </Button>

                        <Button
                            variant="outline"
                            className="h-12 px-6 rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:bg-orange-500/10 hover:border-orange-500/20 transition-all"
                        >

                            <Flame className="w-4 h-4 text-orange-500 mr-2" />

                            Wishlist
                        </Button>
                    </div>
                </div>

                {/* Main */}
                <div className="grid lg:grid-cols-12 gap-10 items-start">

                    {/* LEFT */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Product Image */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}

                            transition={{
                                duration: 0.5,
                            }}
                        >

                            <Card className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-5">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full" />

                                {/* Image */}
                                <div className="relative aspect-square rounded-[1.5rem] bg-white flex items-center justify-center overflow-hidden">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-[85%] h-[85%] object-contain transition-transform duration-700 hover:scale-110"
                                    />
                                </div>

                                {/* Badges */}
                                <div className="absolute top-8 left-8 flex flex-col gap-3">

                                    <Badge className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white border-none rounded-full px-4 py-1.5 shadow-lg shadow-violet-500/20">

                                        <ShieldCheck className="w-3 h-3 mr-1" />

                                        AI VERIFIED
                                    </Badge>

                                    <Badge className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full px-4 py-1.5 font-bold">

                                        {discount}% OFF
                                    </Badge>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Product Details */}
                        <div>

                            {/* Category */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/5 border border-violet-500/10 mb-5">

                                <ShoppingBag className="w-4 h-4 text-violet-500" />

                                <span className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">

                  Best Seller
                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl font-black leading-tight mb-5">

                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex flex-wrap items-center gap-5 mb-8">

                                <div className="flex items-center gap-1 text-yellow-500">

                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={cn(
                                                "w-4 h-4 fill-current",
                                                i >= 4 && "opacity-30"
                                            )}
                                        />
                                    ))}

                                    <span className="ml-2 font-bold text-black">

                    {product.rating}
                  </span>
                                </div>

                                <span className="text-sm text-slate-500">

                  {product.reviewCount.toLocaleString()} reviews
                </span>
                            </div>

                            {/* Price */}
                            <div className="flex items-end gap-4 mb-10">

                <span className="text-6xl font-black">

                  ${product.currentPrice}
                </span>

                                <span className="text-2xl line-through text-slate-400 mb-2">

                  ${product.originalPrice}
                </span>
                            </div>

                            {/* Buy Signal */}
                            <Card className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-gradient-to-br from-emerald-500/5 via-transparent to-violet-500/5 backdrop-blur-xl p-6">

                                {/* Glow */}
                                <div className="absolute right-0 top-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full" />

                                <div className="relative">

                                    <div className="flex items-center justify-between mb-5">

                                        <div>

                                            <div className="flex items-center gap-2 mb-2">

                                                <Sparkles className="w-4 h-4 text-emerald-500" />

                                                <span className="text-xs uppercase tracking-[0.2em] font-black text-emerald-500">

                          AI BUY SIGNAL
                        </span>
                                            </div>

                                            <h3 className="text-2xl font-black">

                                                Strong Buy
                                            </h3>
                                        </div>

                                        <TrendingDown className="w-10 h-10 text-emerald-500" />
                                    </div>

                                    {/* Progress */}
                                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden mb-4">

                                        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-emerald-500 to-violet-500" />
                                    </div>

                                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em]">

                    <span className="text-slate-500">

                      WAIT
                    </span>

                                        <span className="text-emerald-500">

                      BEST BUY TIME
                    </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-8">

                        <Tabs
                            defaultValue="history"
                            className="w-full"
                        >

                            {/* Tabs */}
                            <TabsList className="mb-8 rounded-full bg-white/5 border border-white/10 p-1 backdrop-blur-xl">

                                <TabsTrigger
                                    value="history"
                                    className="rounded-full px-8 py-2.5 font-bold"
                                >

                                    Price History
                                </TabsTrigger>

                                <TabsTrigger
                                    value="prediction"
                                    className="rounded-full px-8 py-2.5 font-bold"
                                >

                                    AI Prediction
                                </TabsTrigger>

                                <TabsTrigger
                                    value="compare"
                                    className="rounded-full px-8 py-2.5 font-bold"
                                >

                                    Compare
                                </TabsTrigger>
                            </TabsList>

                            {/* HISTORY */}
                            <TabsContent value="history">

                                <Card className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden">

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">

                                        <div>

                                            <div className="flex items-center gap-2 mb-2">

                                                <Clock3 className="w-4 h-4 text-violet-500" />

                                                <span className="text-xs uppercase tracking-[0.2em] font-black text-violet-500">

                          Historical Analysis
                        </span>
                                            </div>

                                            <h3 className="text-3xl font-black mb-2">

                                                Price Timeline
                                            </h3>

                                            <p className="text-slate-500">

                                                Last 6 months intelligent price movement.
                                            </p>
                                        </div>

                                        <Badge className="bg-violet-500/10 text-violet-600 border-none rounded-full px-4 py-2">

                                            Live Tracking
                                        </Badge>
                                    </div>

                                    <PriceChart
                                        data={product.priceHistory}
                                    />
                                </Card>
                            </TabsContent>

                            {/* PREDICTION */}
                            <TabsContent value="prediction">

                                <Card className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden">

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">

                                        <div>

                                            <div className="flex items-center gap-2 mb-2">

                                                <Sparkles className="w-4 h-4 text-violet-500" />

                                                <span className="text-xs uppercase tracking-[0.2em] font-black text-violet-500">

                          AI FORECAST
                        </span>
                                            </div>

                                            <h3 className="text-3xl font-black mb-2">

                                                Neural Price Prediction
                                            </h3>

                                            <p className="text-slate-500">

                                                Machine learning based future pricing forecast.
                                            </p>
                                        </div>

                                        <Badge className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white border-none rounded-full px-4 py-2 shadow-lg shadow-violet-500/20">

                                            92% Accuracy
                                        </Badge>
                                    </div>

                                    <PredictionChart
                                        data={product.predictions}
                                    />
                                </Card>
                            </TabsContent>

                            {/* COMPARE */}
                            <TabsContent value="compare">

                                <div className="space-y-5">

                                    {product.comparisons.map((item, idx) => (

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
                                        >

                                            <Card className="p-6 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-violet-500/20 transition-all duration-300">

                                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                                                    {/* Left */}
                                                    <div className="flex items-center gap-5">

                                                        {/* Logo */}
                                                        <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center overflow-hidden shrink-0 p-3">

                                                            <img
                                                                src={
                                                                    item.platform === "Amazon"
                                                                        ? "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                                                                        : item.platform === "Best Buy"
                                                                            ? "https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg"
                                                                            : item.platform === "Flipkart"
                                                                                ? "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flipkart_logo.png"
                                                                                : item.platform === "Tata Cliq"
                                                                                    ? "https://upload.wikimedia.org/wikipedia/commons/0/00/Tata_CLiQ_logo.png"
                                                                                    : ""
                                                                }

                                                                alt={item.platform}

                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>

                                                        {/* Info */}
                                                        <div>

                                                            <h4 className="text-2xl font-black mb-2">

                                                                {item.platform} Official
                                                            </h4>

                                                            <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-black">

                                <span
                                    className={cn(
                                        item.inStock
                                            ? "text-emerald-500"
                                            : "text-red-500"
                                    )}
                                >

                                  {item.inStock
                                      ? "IN STOCK"
                                      : "OUT OF STOCK"}
                                </span>

                                                                <span className="opacity-20">•</span>

                                                                <span className="text-slate-500">

                                  Delivery: {item.deliveryDate}
                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Right */}
                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">

                                                        <div className="sm:text-right">

                                                            <p className="text-4xl font-black mb-1">

                                                                ${item.price}
                                                            </p>

                                                            <p className="text-sm text-slate-500">

                                                                +${item.shipping} shipping
                                                            </p>
                                                        </div>

                                                        <Button className="h-12 px-7 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-bold shadow-lg shadow-violet-500/20 hover:scale-[1.02] transition-all duration-300">

                                                            Visit Store

                                                            <ExternalLink className="w-4 h-4 ml-2" />
                                                        </Button>
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
            </div>
        </div>
    );
}