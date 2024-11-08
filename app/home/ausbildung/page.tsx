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
                        <h4 className="pb-4">Ausbildung</h4>
                        <ul
                            className=""
                            role="list"
                        >
                            <li>
                                Studium der moderne Querflöte an Northwestern University, Chicago, USA sowie
                                Postgraduate Studies als Rotary Foundation Fellow an der Royal Academy of Music in
                                Glasgow, Schottland.
                            </li>
                            <li>
                                Kontakt-Studium in barocke und klassische Traversflöte an der Akademie für Alte Musik
                                bzw. Hochschule für Musik Bremen sowie Weiterbildungsstudium in klassische
                                Klappen-Traversflöte an der Hochschule für Musik Bremen.
                            </li>
                            <li>
                                Regelmäßig Teilnahme an Fortbildungen und Meisterkurse an diverse Institutionen u.a.
                                Mozarteum in Salzburg, Stiftung Kloster Michaelstein, Hochschule für Musik Bremen,
                                Landesmusikakademie Hamburg und Johannes-Brahms-Konservatorium Hamburg.
                            </li>
                        </ul>
                    </article>
                </main>
            </div>
        </>
    );
}
