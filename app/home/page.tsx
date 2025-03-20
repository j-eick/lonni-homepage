"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import MyImage from "@/components/image/MyImage";
import profilePic from "../../public/content/profile.jpg";

// import styles from "./MovingBanner.module.css";

export default function Home() {
    return (
        <MainLayout>
            <main
                className={`grow
                            mx-auto flex gap-5 mt-content_top-mobile mb-content_bottom-mobile
                            2xs:w-10/12
                            2xs:text-size-mobile-2xs
                            xs:text-size-mobile-xs
                            md-768:w-8/10 
                            md-768:mt-content_top-desktop 
                            md-768:mb-content_bottom-desktop
                        `}
            >
                <article className="relative">
                    <MyImage
                        src={profilePic}
                        alt={"Profile Photo"}
                        className={`w-profileImage h-profileImage mx-auto rounded-full overflow-hidden
                                    2xs:shadow-step 2xs:border-[.15px] 2xs:border-slate-300
                                    md:hidden`}
                    />
                    <h1 className="relative my-5 font-secondary text-center">
                        <span className={`xss-320:text-size-firstLetterPagetitle-mobile `}>W</span>
                        <span
                            className={`tracking-wider
                                xss-320:text-size-pageTitle-mobile`}
                        >
                            illkommen!
                        </span>
                        {/* <div
                            className={`absolute w-full bottom-pageTitle-underline border-b-1.5 border-slate-700/40
                                xss-320:border-b-1
                                `}
                        /> */}
                    </h1>
                    <div
                        className={`flowTextAndLastChild hyphens-auto
                                    2xs:leading-7
                                    sm-620:leading-regularText
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
                            Herzliche Grüße!
                            <br />
                            Lonni Inman
                        </p>
                    </div>
                </article>
            </main>
        </MainLayout>
    );
}
