"use client";

import Link from "next/link";
import styles from "./home.module.css";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
    const windowSize = useWindowSize();
    return (
        <main className={styles.main}>
            <p className={styles.resizeInfo}>{windowSize.width}px</p>

            <Link href="/">Start</Link>
        </main>
    );
}
