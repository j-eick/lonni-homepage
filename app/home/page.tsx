"use client";

import useWindowSize from "../hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import links from "../../lib/navLinks.ts";
import Nav from "@/components/ui/nav/Nav.tsx";
import PageTitle from "@/components/ui/page-title/PageTitle.tsx";
import InfoContainer from "@/components/ui/info-container/InfoContainer.tsx";
import Link from "next/link";

export default function Home() {
    const windowSize = useWindowSize();

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div className="br h-full w-9/10 mx-auto my-0 grid grid-cols-12 grid-rows-12">
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
                        href={""}
                        className={`row-start-2 row-end-6
                                    col-start-1 col-end-7`}
                    >
                        Leidenschaft
                    </Link>
                    <Link
                        href={""}
                        className={`z-10
                                    col-start-6 col-end-12
                                    row-start-4 row-end-8
                                    `}
                    >
                        Unterricht
                    </Link>
                    <Link
                        href={""}
                        className={`col-start-3 col-end-9
                                    row-start-7 row-end-11`}
                    >
                        Künsterlische Tätigkeiten
                    </Link>
                    <Link
                        href={""}
                        className={`bb bg-blue-400
                                    col-start-2 col-end-7
                                    row-start-12 row-end-15`}
                    >
                        Auftritte
                    </Link>
                    <Link
                        href={""}
                        className={`bb bg-slate-400
                                    col-start-6 col-end-11
                                    row-start-14 row-end-17`}
                    >
                        Kontakt
                    </Link>
                </nav>
            </aside>
            <h1
                className={`br col-start-5 col-end-13
                            row-start-1 row-end-3`}
            >
                Lonni Inman
            </h1>
            <main
                className={`bb 
                            col-start-6 col-end-13
                            row-start-2 row-end-12`}
            >
                <article></article>
            </main>
        </div>
    );
}
