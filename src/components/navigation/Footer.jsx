import React from "react";
import { Link } from "react-router-dom";
import {
    TrendingDown,
    Globe,
    Share2,
    Mail,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="relative mt-32 overflow-hidden border-t border-white/10">

            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Footer */}
            <div className="relative container mx-auto px-6 py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                    {/* BRAND */}
                    <div className="lg:col-span-1">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="inline-block group"
                        >

                            <h2 className="text-5xl font-black tracking-tight bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-[1.02]">

                                PricePeak
                            </h2>
                        </Link>

                        {/* Description */}
                        <p className="mt-6 text-slate-600 leading-relaxed max-w-sm text-[15px]">

                            AI-powered shopping intelligence platform helping users
                            track prices, compare platforms, and predict the best
                            buying opportunities in real-time.
                        </p>

                        {/* Socials */}
                        <div className="flex items-center gap-4 mt-8">

                            {[
                                Globe,
                                Share2,
                                Mail,
                            ].map((Icon, i) => (
                                <button
                                    key={i}
                                    className="w-11 h-11 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl flex items-center justify-center hover:scale-110 hover:border-violet-400/40 transition-all duration-300 shadow-sm"
                                >

                                    <Icon className="w-5 h-5 text-slate-700" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* LINKS */}
                    {[
                        {
                            title: "Product",
                            links: [
                                "Extension",
                                "Price Trends",
                                "Comparison Engine",
                                "Mobile App",
                            ],
                        },

                        {
                            title: "Company",
                            links: [
                                "About Us",
                                "Careers",
                                "Contact",
                                "Privacy Policy",
                            ],
                        },

                        {
                            title: "Support",
                            links: [
                                "Help Center",
                                "Community",
                                "API Docs",
                                "Partner Program",
                            ],
                        },
                    ].map((section, idx) => (
                        <div key={idx}>

                            <h4 className="text-lg font-bold text-black mb-6">
                                {section.title}
                            </h4>

                            <ul className="space-y-4">

                                {section.links.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-slate-600 hover:text-violet-600 transition-colors cursor-pointer text-[15px] font-medium"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-20 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-slate-500">
                        © 2026 PricePeak AI Ltd. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-slate-500">

        <span>
          Built with ❤️ for smart shoppers
        </span>

                        <span className="px-4 py-1 rounded-full bg-white/40 border border-white/20 backdrop-blur-md text-xs font-semibold">

          v2.4.0 Stable
        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}