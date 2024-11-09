"use client";

import useWindowSize from "../hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import links from "../../lib/navLinks.ts";
import Nav from "@/components/ui/nav/Nav.tsx";

export default function Home() {
    const windowSize = useWindowSize();

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <>
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
            <div className="content-allPages">
                <aside className={`max-w-52 min-w-40 p-4 pt-28 h-full leading-6 shadow-asideShadow bg-stone-500/20`}>
                    <Nav
                        links={links}
                        path={path}
                    />
                </aside>
                <main
                    className={`w-full pt-2 px-10 pb-10 grid grid-cols-1 grid-rows-mainLayout overflow-hidden
                                rounded-3xl `}
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
                                    h-auto overflow-y-auto `}
                    >
                        <h4 className="pb-10 text-2xl font-semibold">Welcome to my page!</h4>
                        <p className="leading-relaxed">
                            As a professional musician and educator, I am passionate about sharing the joy of music.
                            Whether you're interested in music lessons, attending concerts, or participating in
                            workshops, you're in the right place. I offer private music lessons for all ages and skill
                            levels, from beginners to advanced players, in [list instruments/styles]. My teaching style
                            is patient and personalized to help you achieve your musical goals. Additionally, I host
                            public performances and interactive workshops throughout the year, open to all music lovers.
                            Explore my site to learn more about my services, upcoming events, and special offers. I look
                            forward to connecting with you and being part of your musical journey! <br /> <br />
                            Best regards, Lonni
                        </p>
                    </article>
                </main>
            </div>
        </>
    );
}
