"use client";

import useWindowSize from "@/app/hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { unterricht } from "@/lib/paragraphs/unterricht";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SideNavSquaresA from "@/components/ui/nav/desktop-design-versions/SideNavSquaresA";

export default function Home() {
    const windowSize = useWindowSize();

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div className="h-full mx-auto my-0 grid grid-cols-18 grid-rows-12">
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
            <SideNavSquaresA
                className={`w-full bb
                            col-start-1 col-end-6
                            row-start-2 row-end-12
                            1175x: `}
            />
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
                            col-start-6 col-end-13
                            row-start-4 row-end-12
                            `}
            >
                <article className={`whitespace-pre-wrap`}>
                    <ul className="br flex flex-col gap-5 leading-standardText overflow-auto">
                        {unterricht.unterrichtText.map((text, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3"
                            >
                                <div className="pt-2.5 text-sm">
                                    <MdOutlineKeyboardArrowRight />
                                </div>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                </article>
            </main>
        </div>
    );
}
