"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useWindowSize from "./hooks/useWindowSize";
import { useEffect } from "react";

export default function Home() {
    const [windowSize] = useWindowSize();

    useEffect(() => {
        console.log(windowSize);
    }, []);
    return (
        <div className={styles.page}>
            <p className={styles.resizeInfo}>{windowSize.width}px</p>
            <div className={styles.canvas}>
                <Image
                    src={"/profil.jpg"}
                    width={"300"}
                    height={"300"}
                    alt={"Lonni_Inman"}
                    className={styles.profilePic}
                    priority={false}
                />
                <main className={styles.main}>Main</main>
            </div>
        </div>
    );
}
