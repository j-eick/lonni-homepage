"use client";

import styles from "./page.module.css";
import useWindowSize from "./hooks/useWindowSize";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function App() {
    const windowSize = useWindowSize();

    return (
        <main className={styles.main}>
            <p className={styles.resizeInfo}>{windowSize.width}px</p>

            <section className={styles.lonni}>
                <h1>Lonni Inman</h1>
                <p>Ich unterrichte</p>
                <p>
                    Ich gebe Konzerte. <br /> Jetzt buchen: [contact]
                </p>
                <p>Workshops</p>
            </section>
            <nav className={styles.nav}>
                <Link
                    href="/home"
                    className={styles.linkButton}
                >
                    <Image
                        src={"/icon.png"}
                        alt={"enter_icon"}
                        width={50}
                        height={50}
                    />
                </Link>
            </nav>
        </main>
    );
}
