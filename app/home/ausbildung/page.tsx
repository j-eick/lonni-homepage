"use client";

import Link from "next/link";
import desktop from "./main.desktop.module.css";
import useWindowSize from "../../hooks/useWindowSize";

export default function Ausbildung() {
    const windowSize = useWindowSize();
    return (
        <div className={desktop.canvas}>
            <p className={`${desktop.resizeInfo}`}>{windowSize.width}px</p>
            <main className={` ${desktop.main}`}>
                <nav className={desktop.nav}>
                    <Link
                        href="/home"
                        className={desktop.link}
                    >
                        Home
                    </Link>
                    <Link
                        href="/main/ausbildung"
                        className={desktop.link}
                    >
                        Ausbildung
                    </Link>
                    <Link
                        href="/main/künstlerischeTätigkeit"
                        className={desktop.link}
                    >
                        Künstlerische Tätigkeit
                    </Link>
                    <Link
                        href="/main/pädagogischeErfahrung"
                        className={desktop.link}
                    >
                        Pädagogische Erfahrung
                    </Link>
                    <Link
                        href="/main/links"
                        className={desktop.link}
                    >
                        Links
                    </Link>
                    <Link
                        href="/main/kontakt"
                        className={desktop.link}
                    >
                        Kontakt
                    </Link>
                </nav>
                <section className={desktop.content}>
                    <article>
                        <h1>Ausbildung</h1>
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
                </section>
                <section className={desktop.profile}>Profile</section>
                <footer className={desktop.footer}>asd</footer>
            </main>
        </div>
    );
}
