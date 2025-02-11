import React, { useEffect } from "react";
import SideNavSquaresA from "../nav/desktop-design-versions/SideNavSquaresA";
import { welcomeText } from "@/lib/paragraphs/home";
import useWindowSize from "@/app/hooks/useWindowSize";
import { usePathname } from "next/navigation";

export default function CardLayout() {
    const windowSize = useWindowSize();

    const path = usePathname();
    console.log(windowSize.width);

    // const desktopView = windowSize.width >= 1119;

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <>
            {windowSize.width >= 1119 && (
                <>
                    <SideNavSquaresA
                        className={`w-full bb
                                        col-start-1 col-end-6
                                        row-start-2 row-end-12
                                        `}
                    />
                    <div
                        className={`h-full pl-6 pr-7 z-10 bb
                                            flex items-end
                                            col-start-6 col-end-18
                                            row-start-1 row-end-3
                                            `}
                    >
                        <h1 className="text-80px leading-none">Lonni Inman</h1>
                    </div>
                    <main
                        className={`pb-10 pr-7 bb
                                            col-start-6 col-end-18
                                            row-start-4 row-end-12
                                            `}
                    >
                        <article className={`pl-7 flowText`}>{welcomeText}</article>
                    </main>
                </>
            )}
        </>
    );
}
