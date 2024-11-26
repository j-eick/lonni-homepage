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
        <div className="h-full w-full grid grid-cols-12 grid-rows-12">
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>

            <aside
                className={`bb 
                            w-full
                            col-start-1 col-end-6
                            row-start-2 row-end-11
                            `}
            >
                <nav className={`h-full br grid grid-cols-8 grid-rows-12`}>
                    <Link href={""}>Leidenschaft</Link>
                    <Link href={""}>Unterricht</Link>
                    <Link href={""}>Künsterlische Tätigkeiten</Link>
                    <Link href={""}>Kontakt</Link>
                </nav>
            </aside>
            <h1
                className={`col-start-5 col-end-13       
                            row-start-1 row-end-3`}
            >
                Lonni Inman
            </h1>
            <main
                className={`bb 
                            col-start-6 col-end-13
                            row-start-2 row-end-11`}
            >
                <article></article>
            </main>
        </div>
    );
}
