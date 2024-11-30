"use client";

import useWindowSize from "@/app/hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { unterricht } from "@/lib/paragraphs/unterricht";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
    const windowSize = useWindowSize();

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div className="h-full w-9/10 mx-auto my-0 grid grid-cols-12 grid-rows-12">
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>

            <aside
                className={`bb
                            w-full
                            col-start-1 col-end-6
                            row-start-2 row-end-12
                            `}
            >
                <nav
                    className={`h-full grid grid-cols-12 grid-rows-16`}
                    id="startpage-navItems"
                >
                    <Link
                        href={"/home"}
                        className={`z-20
                                    row-start-2 row-end-5
                                    col-start-6 col-end-10`}
                    >
                        Willkommen!
                    </Link>
                    <Link
                        href={"/home/unterricht"}
                        className={`z-10
                                    col-start-2 col-end-8
                                    row-start-4 row-end-8
                                    ${path === "unterricht" ? "bg-selected" : ""}
                                    `}
                    >
                        Unterricht
                    </Link>
                    <Link
                        href={""}
                        className={`z-20
                                    col-start-5 col-end-10
                                    row-start-7 row-end-10`}
                    >
                        Künsterlische Tätigkeiten
                    </Link>
                    <Link
                        href={""}
                        className={`bb bg-blue-400
                                    col-start-2 col-end-7
                                    row-start-12 row-end-15`}
                    >
                        Auftritte & CDs
                    </Link>
                    <Link
                        href={""}
                        className={`bb bg-slate-400
                                    col-start-5 col-end-10
                                    row-start-14 row-end-16`}
                    >
                        Kontakt
                    </Link>
                </nav>
            </aside>
            <h1
                className={`br
                            col-start-5 col-end-13
                            row-start-1 row-end-3
                            `}
            >
                Lonni Inman
            </h1>
            <main
                className={`
                            pb-10
                            col-start-6 col-end-13
                            row-start-4 row-end-12
                            `}
            >
                <article
                    className={`pl-12
                                whitespace-pre-wrap
                                `}
                >
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
