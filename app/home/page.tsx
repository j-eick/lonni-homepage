"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import { welcomeText } from "@/lib/paragraphs/home";
// import styles from "./MovingBanner.module.css";

export default function Home() {
    return (
        <MainLayout>
            <Header className="relative flex w-full mb-14" />
            {/* ---vvv---vvv--- PER PAGE CONTENT GOES HERE ---vvv---vvv--- */}
            <section
                className={`grow
                w-9/10 mx-auto my-0 flex gap-5`}
            >
                <main className={`w-9/12`}>
                    <article className="flowText">
                        <PageTitle
                            firstLetter="W"
                            rest="illkommen"
                        />
                        <div className="pr-10 flowTextAndLastChild">{welcomeText}</div>
                    </article>
                </main>
            </section>
            {/* <div className={`bb ${styles.bannerContainer}`}>
                <p className={styles.movingBanner}>This is information</p>
            </div> */}
        </MainLayout>
    );
}
