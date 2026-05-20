import React from "react";

import { cn } from "../../utils/helpers";

function Card({
                  className,
                  size = "default",
                  ...props
              }) {
    return (
        <div
            data-slot="card"
            data-size={size}
            className={cn(
                "group/card flex flex-col gap-4 overflow-hidden rounded-2xl bg-card py-4 text-sm text-card-foreground border border-white/5 backdrop-blur-xl",
                "data-[size=sm]:gap-3 data-[size=sm]:py-3",
                className
            )}
            {...props}
        />
    );
}

function CardHeader({
                        className,
                        ...props
                    }) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "grid auto-rows-min items-start gap-1 px-4",
                className
            )}
            {...props}
        />
    );
}

function CardTitle({
                       className,
                       ...props
                   }) {
    return (
        <div
            data-slot="card-title"
            className={cn(
                "text-base font-semibold leading-snug",
                className
            )}
            {...props}
        />
    );
}

function CardDescription({
                             className,
                             ...props
                         }) {
    return (
        <div
            data-slot="card-description"
            className={cn(
                "text-sm text-muted-foreground",
                className
            )}
            {...props}
        />
    );
}

function CardAction({
                        className,
                        ...props
                    }) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "self-end",
                className
            )}
            {...props}
        />
    );
}

function CardContent({
                         className,
                         ...props
                     }) {
    return (
        <div
            data-slot="card-content"
            className={cn(
                "px-4",
                className
            )}
            {...props}
        />
    );
}

function CardFooter({
                        className,
                        ...props
                    }) {
    return (
        <div
            data-slot="card-footer"
            className={cn(
                "flex items-center border-t border-white/5 bg-muted/20 p-4",
                className
            )}
            {...props}
        />
    );
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
};