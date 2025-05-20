"use client";

import dynamic from "next/dynamic";
import { ComponentType, ReactNode } from "react";

type DynamicWrapperProps<T extends object> = {
    loader: () => Promise<{ default: ComponentType<T> }>;
    loadingFallback?: ReactNode;
    props?: T;
};

export default function DynamicWrapper<T extends object>({
    loader,
    loadingFallback = <div className="animate-pulse h-40 w-full bg-gray-100" />,
    props,
}: DynamicWrapperProps<T>) {
    const LoadedComponent = dynamic(loader, {
        ssr: false,
        loading: () => <>{loadingFallback}</>,
    });

    return <LoadedComponent {...(props as T)} />;
}
