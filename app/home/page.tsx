"use client";

import useWindowSize from "../hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { startpage } from "@/lib/paragraphs/startpage";
import SideNavSquaresA from "@/components/ui/nav/design-versions/SideNavSquaresA";

export default function Home() {
    const windowSize = useWindowSize();

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div className={`h-full mx-auto my-0 grid grid-cols-12 grid-rows-12`}>
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>

            <SideNavSquaresA />
            <div
                className={`h-full pl-10 z-10
                            flex items-end
                            col-start-5 col-end-12
                            row-start-1 row-end-3
                            `}
            >
                <h1 className="text-80px leading-none">Lonni Inman</h1>
            </div>
            <main
                className={`
                            pb-10 
                            col-start-6 col-end-12
                            row-start-4 row-end-12
                            `}
            >
                <article
                    className={`
                                whitespace-pre-wrap
                                `}
                >
                    <p className="bb">{startpage.welcomeText}</p>
                </article>
            </main>
        </div>
    );
}
