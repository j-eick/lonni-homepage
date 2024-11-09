"use client";

import links from "@/lib/navLinks";
import useWindowSize from "../../hooks/useWindowSize";
import { usePathname } from "next/navigation";
import Nav from "@/components/ui/nav/Nav";
import PageTitle from "@/components/ui/page-title/PageTitle";

export default function Ausbildung() {
    const windowSize = useWindowSize();
    const path = usePathname();

    return (
        <>
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
            <div className="content-allPages">
                <aside className={`p-4 pt-20 max-w-52 w-2/10 h-full leading-6 shadow-asideShadow bg-stone-500/20`}>
                    <Nav
                        links={links}
                        path={path}
                    />
                </aside>
                <main
                    className={`w-8/10 pt-2 px-10 pb-10 grid grid-cols-1 grid-rows-mainLayout overflow-hidden
                                rounded-3xl`}
                >
                    <section
                        className={`row-start-1
                                    h-11 w-9/10 ml-auto flex justify-end items-center
                                    border-b-1 border-slate-600/30`}
                    >
                        <p className="translate-y-1.5 text-right">Music ticker...</p>
                        <span className="translate-y-1">PlayIcon</span>
                    </section>
                    <article
                        className={`row-start-2 
                                    h-auto`}
                    >
                        <PageTitle content="Links" />
                        <ul
                            className=""
                            role="list"
                        >
                            <li>https://www.youtube.com/watch?v=is9dRWiRDNs</li>
                            <li>https://www.youtube.com/watch?v=gEUwCTkKEwM</li>
                            <li>https://www.youtube.com/watch?v=NEyrmkzSGLg</li>
                        </ul>
                    </article>
                </main>
            </div>
        </>
    );
}
