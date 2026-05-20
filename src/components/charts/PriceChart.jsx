import React, { useMemo } from "react";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export function PriceChart({ data }) {

    const chartData = useMemo(() => {
        return data.map((d) => ({
            ...d,

            displayDate: new Date(d.date).toLocaleDateString(
                undefined,
                {
                    month: "short",
                    day: "numeric",
                }
            ),
        }));
    }, [data]);

    return (
        <div className="h-[300px] w-full">

            <ResponsiveContainer width="100%" height="100%">

                <AreaChart
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 10,
                        left: -20,
                        bottom: 0,
                    }}
                >

                    {/* Gradient */}
                    <defs>
                        <linearGradient
                            id="colorPrice"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#8b5cf6"
                                stopOpacity={0.3}
                            />

                            <stop
                                offset="95%"
                                stopColor="#8b5cf6"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    {/* Grid */}
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="rgba(255,255,255,0.05)"
                    />

                    {/* X Axis */}
                    <XAxis
                        dataKey="displayDate"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fill: "rgba(255,255,255,0.4)",
                        }}
                    />

                    {/* Y Axis */}
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fill: "rgba(255,255,255,0.4)",
                        }}
                        domain={["auto", "auto"]}
                    />

                    {/* Tooltip */}
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(0,0,0,0.8)",
                            backdropFilter: "blur(4px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                            padding: "10px",
                        }}

                        itemStyle={{
                            color: "#fff",
                            fontWeight: "bold",
                        }}

                        labelStyle={{
                            color: "rgba(255,255,255,0.6)",
                            marginBottom: "4px",
                        }}
                    />

                    {/* Area */}
                    <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorPrice)"
                        animationDuration={1500}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}