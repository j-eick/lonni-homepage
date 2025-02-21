"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import { welcomeText } from "@/lib/paragraphs/home";
import Image from "next/image";
import profilePic from "../../public/content/profile.jpg";

// import styles from "./MovingBanner.module.css";

export default function Home() {
    return (
        <MainLayout>
            {/* ----- PER PAGE CONTENT GOES HERE ----- */}

            <main
                className={`grow 
                            pl-10 mx-auto my-0 flex gap-5
                            2xs:px-7 2xs:w-12/12 2xs:mt-10
                            2xs:text-size-mobile-2xs
                            xs:text-size-mobile-xs
                            md-768:w-8/10
                        `}
            >
                <article className="relative flowText">
                    {/* ----  OPTIONAL PROFILE IMAGE  ----- */}
                    <div
                        className={`fixed z-10 right-[5vw] top-profilePhoto
                                    w-profileImage h-profileImage mx-auto rounded-full overflow-hidden
                                    2xs:shadow-line 2xs:border-[.5px] 2xs:border-slate-300
                                    md:hidden
                                    `}
                    >
                        <Image
                            src={profilePic}
                            alt={""}
                            className="w-auto h-auto object-contain block"
                        />
                    </div>
                    {/* ------------------------------------- */}
                    <PageTitle
                        firstLetter="W"
                        rest="illkommen!"
                    />
                    <div
                        className={`flowTextAndLastChild leading-9
                                    2xs:leading-7
                                    md:text-size-desktop-md
                            `}
                    >
                        <p>
                            Ich freue mich, meine Leidenschaft für Musik mit Ihnen zu teilen – sei es in individuellen
                            Unterrichtsstunden, spannenden Projekten oder besonderen Konzerterlebnissen.{" "}
                        </p>
                        <p>
                            Mein Unterricht ist für alle da, egal ob Anfängerin oder Fortgeschrittener. Mit viel Geduld
                            und einem persönlichen Ansatz helfe ich Ihnen, Ihre musikalischen Ziele zu erreichen und die
                            Freude an der Musik zu entdecken. Neben dem Unterricht lade ich Sie zu Konzerten, Workshops
                            und CD-Projekten ein. Gerne können Sie mich auch für eigene Projekte anfragen.
                        </p>
                        <p>
                            Schauen Sie sich in Ruhe um, und wenn Sie Fragen haben oder Interesse an einem meiner
                            Angebote, melden Sie sich einfach. Ich freue mich darauf, von Ihnen zu hören!
                        </p>

                        <p>
                            Herzliche Grüße, <br />
                            Lonni Inman
                        </p>
                    </div>
                </article>
            </main>

            {/* <div className={`bb ${styles.bannerContainer}`}>
                <p className={styles.movingBanner}>This is information</p>
            </div> */}
        </MainLayout>
    );
}
