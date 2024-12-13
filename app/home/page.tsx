"use client";

import useWindowSize from "../hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import DesktopView from "@/components/ui/desktopView/DesktopView";
import MobileTabletView from "@/components/ui/mobile-tablet-view/MobileTabletView";

export default function Home() {
    const windowSize = useWindowSize();

    const path = usePathname();
    console.log(windowSize.width);

    const desktopView = windowSize.width >= 1119;

    const tabletMobileView = windowSize.width <= 1119;

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div
            className={`h-full mx-auto my-0  
                        ${windowSize.width >= 1119 ? "grid grid-cols-18 grid-rows-12" : ""}`}
        >
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
            {desktopView && <DesktopView />}
            {tabletMobileView && <MobileTabletView />}
        </div>
    );
}
