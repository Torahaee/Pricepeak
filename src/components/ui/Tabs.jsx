import React, { createContext, useContext, useState } from "react";

import { cn } from "../../utils/helpers";

const TabsContext = createContext();

function Tabs({
                  defaultValue,
                  className,
                  children,
              }) {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <TabsContext.Provider
            value={{
                activeTab,
                setActiveTab,
            }}
        >
            <div className={cn("w-full", className)}>
                {children}
            </div>
        </TabsContext.Provider>
    );
}

function TabsList({
                      className,
                      children,
                  }) {
    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1",
                className
            )}
        >
            {children}
        </div>
    );
}

function TabsTrigger({
                         value,
                         className,
                         children,
                     }) {
    const { activeTab, setActiveTab } =
        useContext(TabsContext);

    const isActive = activeTab === value;

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                isActive
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-white",
                className
            )}
        >
            {children}
        </button>
    );
}

function TabsContent({
                         value,
                         className,
                         children,
                     }) {
    const { activeTab } =
        useContext(TabsContext);

    if (activeTab !== value) return null;

    return (
        <div className={cn("mt-4", className)}>
            {children}
        </div>
    );
}

export {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
};