import React, { useState } from "react";

import { motion } from "framer-motion";

import {
    Link,
    useNavigate,
} from "react-router-dom";

import {
    TrendingDown,
    Mail,
    Lock,
    ArrowRight,
    Globe,
} from "lucide-react";

import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card } from "../components/ui/Card";

export function AuthPage() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        setLoading(true);

        // Temporary Fake Login
        setTimeout(() => {

            localStorage.setItem(
                "pricepeak-user",
                "loggedin"
            );

            setLoading(false);

            navigate("/dashboard");

        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-[#f8fafc]">

            {/* Ambient Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[180px] -z-10" />

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[160px] -z-10" />

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

                className="w-full max-w-md"
            >

                {/* Logo */}
                <div className="text-center mb-8">

                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 mb-6 group"
                    >

                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-110">

                            <TrendingDown className="w-7 h-7 text-white" />
                        </div>

                        <span className="text-4xl font-black tracking-tight bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">

              PricePeak
            </span>
                    </Link>

                    <h1 className="text-3xl font-black text-black mb-3">

                        Welcome Back
                    </h1>

                    <p className="text-slate-500">

                        Sign in to continue your smart shopping journey.
                    </p>
                </div>

                {/* Auth Card */}
                <Card className="p-8 bg-white/20 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden relative">

                    {/* Small Glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full" />

                    {/* Form */}
                    <form
                        onSubmit={handleLogin}
                        className="space-y-6 relative z-10"
                    >

                        {/* Email */}
                        <div className="space-y-2">

                            <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 ml-1">

                                Email Address
                            </label>

                            <div className="relative group">

                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">

                                    <Mail className="w-5 h-5 text-slate-500 group-focus-within:text-violet-500 transition-colors" />
                                </div>

                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                    className="h-14 rounded-2xl bg-white/40 border border-white/20 pl-12 text-black placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-violet-500/30 focus-visible:border-violet-400"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">

                            <div className="flex justify-between items-center px-1">

                                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">

                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="text-[10px] font-bold tracking-widest uppercase text-violet-500 hover:text-violet-600"
                                >
                                    Forgot?
                                </button>
                            </div>

                            <div className="relative group">

                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">

                                    <Lock className="w-5 h-5 text-slate-500 group-focus-within:text-violet-500 transition-colors" />
                                </div>

                                <Input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="h-14 rounded-2xl bg-white/40 border border-white/20 pl-12 text-black placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-violet-500/30 focus-visible:border-violet-400"
                                    required
                                />
                            </div>
                        </div>

                        {/* Login Button */}
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-black uppercase tracking-[0.2em] text-xs shadow-lg shadow-violet-500/20 hover:scale-[1.01] transition-all duration-300"
                        >

                            {loading ? (
                                "Authenticating..."
                            ) : (
                                <div className="flex items-center gap-2">

                                    Login

                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            )}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">

                        <div className="absolute inset-0 flex items-center">

                            <div className="w-full border-t border-black/10" />
                        </div>

                        <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] font-bold">

              <span className="bg-white px-4 text-slate-500 rounded-full">

                Continue With
              </span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* Google */}
                        <button className="h-14 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-sm text-black shadow-sm">

                            <Globe className="w-5 h-5" />

                            Google
                        </button>

                        {/* GitHub */}
                        <button className="h-14 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-sm text-black shadow-sm">

                            {/*<Github className="w-5 h-5" />*/}

                            GitHub
                        </button>
                    </div>
                </Card>

                {/* Bottom Text */}
                <p className="text-center mt-8 text-xs text-slate-500">

                    Don’t have an account?

                    {" "}

                    <span className="text-violet-500 font-bold cursor-pointer hover:underline">

            Create One
          </span>
                </p>
            </motion.div>
        </div>
    );
}