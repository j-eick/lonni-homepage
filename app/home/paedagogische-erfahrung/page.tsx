"use client";

import Link from "next/link";
import links from "@/lib/navLinks";
import useWindowSize from "../../hooks/useWindowSize";
import { usePathname } from "next/navigation";

export default function Ausbildung() {
    const windowSize = useWindowSize();
    const path = usePathname();

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
                        <h4 className="pb-4">Pädagogische Erfahrung</h4>
                        <ul
                            className=""
                            role="list"
                        >
                            <li>
                                Dozentin-Tätigkeit als Privat-Lehrerin und an der Staatlichen Jugendmusikschule Hamburg
                                seit 1984 in den Standorten Gymnasium Bondenwald und Albert-Schweitzer-Gymnasium in
                                Hamburg
                            </li>
                            <li>Als Pionierin des Gruppenunterrichts und Schulkooperations Hamburg weit bekannt</li>
                            <li>
                                Workshop Leiterin mehrmals an Pädagogischen Jahreskonferenzen der Staatliche
                                Jugendmusikschule z.B. "Wie kommt man in der Puste?" und "Musikspiele - Spiele mit Musik
                                - Spiele für den Instrumentalen Gruppenunterricht"
                            </li>
                            <li>
                                Mehrmals im Rahmen des „JeKi Tages“ der Landesinstitut für Lehrerbildung und
                                Schulentwicklung Hamburg Fortbildungen gehalten
                            </li>
                            <li>
                                erfolgreiche Teilnahme von diverse Schüler an Wettbewerbe, u.a. Jugendmusiziert bis zum
                                Bundeswettbewerb
                            </li>
                        </ul>
                    </article>
                </main>
            </div>
        </>
    );
}
