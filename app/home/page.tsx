"use client";

import desktop from "../desktop.module.scss";
import useWindowSize from "../hooks/useWindowSize";
import Nav from "../components/nav/Nav";
import Link from "next/link";

export default function Home() {
    const windowSize = useWindowSize();
    return (
        <div className={desktop.canvas}>
            <p className={`resizeInfo border`}>{windowSize.width}px</p>
            <div>
                <aside className={`${desktop.navCanvas}`}>
                    <div className={desktop.fluteHead} />
                    <div className={desktop.fluteBody}>
                        {/* <span className={desktop.ring} /> */}
                        <ul
                            role="list"
                            className={desktop.keyContainer}
                        >
                            <li className={desktop.option}>
                                <Link href="/home">Start</Link>
                            </li>
                            <li className={desktop.option}>
                                <Link href="/ausbildung">Ausbildung</Link>
                            </li>
                            <li className={desktop.option}>
                                <Link href="/ausbildung">Künstlerische Tätigkeit</Link>
                            </li>
                            <li className={desktop.option}>
                                <Link href="/ausbildung">Pädagogische Erfahrung</Link>
                            </li>
                            <li className={desktop.option}>
                                <Link href="/ausbildung">Links</Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <div className={desktop.mainCanvas}>
                <div className={`border-dashed ${desktop.header}`}>
                    <h1 className={`border ${desktop.title}`}>Title</h1>
                    <span className={`border ${desktop.track}`}>Track</span>
                </div>
                <main className={`border-dashed ${desktop.main}`}>main</main>
            </div>
        </div>
    );
}
