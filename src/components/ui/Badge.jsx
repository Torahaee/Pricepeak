import React from "react";

import { cva } from "class-variance-authority";

import { cn } from "../../utils/helpers";

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs font-medium transition-all",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-white",

                secondary:
                    "bg-secondary text-secondary-foreground",

                destructive:
                    "bg-red-500/10 text-red-500",

                outline:
                    "border border-white/10 text-foreground",

                ghost:
                    "hover:bg-muted",

                link:
                    "text-primary underline-offset-4 hover:underline",
            },
        },

        defaultVariants: {
            variant: "default",
        },
    }
);

function Badge({
                   className,
                   variant,
                   ...props
               }) {
    return (
        <span
            className={cn(
                badgeVariants({ variant }),
                className
            )}
            {...props}
        />
    );
}

export { Badge, badgeVariants };