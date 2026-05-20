import React from "react";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {
    ArrowUpRight,
    TrendingDown,
    Clock,
} from "lucide-react";

import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function ProductCard({
                                id,
                                name,
                                image,
                                oldPrice,
                                newPrice,
                                discount,
                                index,
                            }) {
    return (
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
                delay: index * 0.1,
            }}
        >
            <Link to={`/analysis/${id}`}>

                <Card className="group overflow-hidden bg-secondary/10 border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-300">

                    {/* Image */}
                    <div className="aspect-[4/5] overflow-hidden relative">

                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Discount Badge */}
                        <div className="absolute top-4 left-4">

                            <Badge className="bg-primary text-white border-none font-bold">
                                -{discount}%
                            </Badge>
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">

                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">

                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">

                        <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-3">

              <span className="text-lg font-black">
                ${newPrice}
              </span>

                            <span className="text-xs text-muted-foreground line-through">
                ${oldPrice}
              </span>
                        </div>

                        {/* Bottom Meta */}
                        <div className="flex items-center justify-between text-[10px] text-muted-foreground uppercase font-bold">

                            <div className="flex items-center gap-1">

                                <Clock className="w-3 h-3 text-primary" />

                                Updated 2m ago
                            </div>

                            <div className="flex items-center gap-1">

                                <TrendingDown className="w-3 h-3 text-emerald-500" />

                                Price Drop
                            </div>
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}