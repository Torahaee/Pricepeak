import React from "react";

import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "../../utils/helpers";

function Input({
                   className,
                   type,
                   ...props
               }) {
    return (
        <InputPrimitive
            type={type}
            data-slot="input"
            className={cn(
                "h-10 w-full min-w-0 rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white transition-all outline-none placeholder:text-slate-500 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50",
                className
            )}
            {...props}
        />
    );
}

export { Input };