"use client";

import Image from "next/image";
import styles from "./page.module.css";
import useWindowSize from "./hooks/useWindowSize";
import { useEffect } from "react";

export default function Home() {
    const WidthInfo = useWindowSize();

    useEffect(() => {
        // console.log(windowSize);
    }, []);
    return (
        <div className={styles.page}>
            <WidthInfo />
            <div className={styles.canvas}>
                <Image
                    src={"/profil.jpg"}
                    width={"300"}
                    alt={"Lonni_Inman"}
                    height={"300"}
                    className={styles.profilePic}
                    priority={false}
                />
                <main className={styles.main}>Main</main>
            </div>
        </div>
    );
}
