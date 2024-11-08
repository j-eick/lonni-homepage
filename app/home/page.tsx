"use client";

import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
    const windowSize = useWindowSize();

    return (
        <div
            className={`relative h-full w-full flex items-center justify-center
                        bg-bg1 bg-no-repeat bg-center bg-cover
                        `}
        >
            <div className="absolute inset-0 z-0 w-full h-full grid place-items-center backdrop-blur-4px" />
            <div
                className={`h-8/10 w-9/10 max-w-1150px flex gap-8 overflow-hidden mainGradient
                            backdrop-blur-xl backdrop-brightness-85 bg-slate-200/30
                            shadow-mainShadow rounded-3xl border-1 border-slate-100/50
                            `}
            >
                <aside className={`p-4 pt-20 max-w-52 w-2/10 h-full leading-6 shadow-asideShadow bg-stone-500/20`}>
                    <nav>
                        <ul className="flex flex-col gap-5">
                            {links.map((link, i) => (
                                <li
                                    key={i}
                                    className={`relative px-3 border-2
                                                before:absolute before:left-1/2 before:-translate-x-1/2 fadingLine `}
                                >
                                    <Link
                                        href={link.href}
                                        className="w-full border-2 border-white"
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
                        <h5>Welcome to my page!</h5>
                        <p>
                            I'm so glad you're here. As a professional musician and educator, my passion is sharing the
                            joy of music with others. Whether you're looking to take music lessons, attend one of my
                            upcoming concerts, or participate in a special workshop, you've come to the right place. My
                            private music lessons cater to students of all ages and skill levels, from complete
                            beginners to advanced players. I offer instruction in [list instruments/styles]. My teaching
                            style is patient, personalized, and designed to help you reach your unique musical goals. In
                            addition to lessons, I also host a variety of public performances and interactive workshops
                            throughout the year. These events are open to music lovers of all backgrounds and are a
                            great way to discover new artists, learn new skills, and connect with the local music
                            community. Feel free to explore the rest of my site to learn more about my services,
                            upcoming events, and special offers. I look forward to connecting with you soon and being a
                            part of your musical journey! Best regards, [Musician's Name]
                        </p>
                    </article>
                </main>
            </div>

            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
        </div>
    );
}

const links = [
    { href: "/home", name: "Home" },
    { href: "/ausbildung", name: "Ausbildung" },
    { href: "/ausbildung", name: "Künterische Tätigkeit" },
    { href: "/ausbildung", name: "Ausbildung" },
    { href: "/ausbildung", name: "Ausbildung" },
];
