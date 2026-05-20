import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import {
    Search,
    Menu,
    X,
    TrendingDown,
    User,
} from "lucide-react";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

import { cn } from "../../utils/helpers";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "Deals", href: "/dashboard" },
        { title: "Compare", href: "/compare" },
        { title: "Price Tracking", href: "/dashboard#tracking" },
    ];

    return (
        <nav className="fixed top-5 left-0 right-0 z-50 px-6">

            <div className="max-w-6xl mx-auto">

                <div className="flex items-center justify-between px-6 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">

                    {/* LEFT */}
                    <div className="flex items-center gap-14">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-3 group"
                        >

                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-110">

                                <TrendingDown className="w-5 h-5 text-white" />
                            </div>

                            <span className="text-2xl font-black tracking-tight text-black">
              PricePeak
            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">

                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.href}
                                    className={cn(
                                        "text-sm font-semibold transition-all duration-300 relative pb-1",
                                        location.pathname === link.href
                                            ? "text-black"
                                            : "text-slate-500 hover:text-black"
                                    )}
                                >
                                    {link.title}

                                    {location.pathname === link.href && (
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">

                        {/* Savings */}
                        <div className="hidden lg:flex items-center h-10 px-5 rounded-full bg-white/70 border border-white/20 backdrop-blur-md text-[11px] font-black tracking-[0.18em] uppercase text-black shadow-sm">

                            $4,281 Saved
                        </div>

                        {/* Profile */}
                        <Link to="/auth">

                            <button className="w-10 h-10 rounded-full bg-white/70 border border-white/20 backdrop-blur-md flex items-center justify-center hover:scale-105 transition-transform">

                                <User className="w-4 h-4 text-black" />
                            </button>
                        </Link>

                        {/* Mobile */}
                        <button
                            className="md:hidden w-10 h-10 rounded-full bg-white/70 border border-white/20 backdrop-blur-md flex items-center justify-center"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5 text-black" />
                            ) : (
                                <Menu className="w-5 h-5 text-black" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}