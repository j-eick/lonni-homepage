"use client";

import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import links from "../../lib/navLinks.ts";

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
                <aside className={`p-4 pt-20 max-w-52 w-2/10 h-full leading-6 shadow-asideShadow bg-stone-500/20`}>
                    <nav>
                        <ul className="flex flex-col gap-5">
                            {links.map((link, i) => (
                                <li
                                    key={i}
                                    className={`relative px-3 h-14 flex items-end
                                                before:absolute before:left-1/2 before:-translate-x-1/2 ${
                                                    path === link.href ? "fadingLineWhite" : "fadingLineBlack"
                                                } `}
                                >
                                    <Link
                                        href={link.href}
                                        className="w-full "
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main
                    className={`w-full pr-5 pb-10 grid grid-cols-1 grid-rows-mainLayout overflow-hidden
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
                                    h-auto border-dashed`}
                    >
                        <h4 className="pb-4">Welcome to my page!</h4>
                        <p className="leading-9">
                            As a professional musician and educator, my passion is sharing the joy of music with others.
                            Whether you're looking to take music lessons, attend one of my upcoming concerts, or
                            participate in a special workshop, you've come to the right place. <br />
                            My private music lessons cater to students of all ages and skill levels, from complete
                            beginners to advanced players. I offer instruction in [list instruments/styles]. My teaching
                            style is patient, personalized, and designed to help you reach your unique musical goals. In
                            addition to lessons, I also host a variety of public performances and interactive workshops
                            throughout the year. These events are open to music lovers of all backgrounds and are a
                            great way to discover new artists, learn new skills, and connect with the local music
                            community. Feel free to explore the rest of my site to learn more about my services,
                            upcoming events, and special offers. I look forward to connecting with you soon and being a
                            part of your musical journey! <br /> <br />
                            Best regards, Lonni
                        </p>
                    </article>
                </main>
            </div>
        </>
    );
}
