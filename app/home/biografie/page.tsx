"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import AuftritteCds from "@/lib/paragraphs/auftritteCds";
import Image from "next/image";
import profilePic from "../../../public/content/profile.jpg";
import MyImage from "@/components/image/MyImage";
import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";

export default function Home() {
    return (
        <MainLayout>
            {/* w-12/12 px-7 mx-auto my-0 flex flex-col
                            2xs:mt-10
                            md-768:w-8/10 */}
            <main
                className={`grow
                            mx-auto flex-col gap-5 
                            mt-content_top-mobile 
                            mb-content_bottom-mobile
                            2xs:w-10/12
                            2xs:text-size-mobile-2xs
                            md-768:w-9/12 
                            md-768:mt-content_top-desktop 
                            md-768:mb-content_bottom-desktop
                            `}
            >
                <h1 className="relative mb-pageTitle font-secondary">
                    <span
                        className={`
                                xss-320:text-size-pageTitle-mobile`}
                    >
                        Über mich
                    </span>
                    <span
                        className={`
                                    absolute block w-full bottom-1 border-b-1.5 border-slate-700/40
                                    xss-320:border-b-1
                                `}
                    />
                </h1>
                <div className="flex gap-5">
                    <article
                        className={`w-8/12 flowText hyphens-auto
                                    2xs:leading-7
                                    sm-620:leading-regularText
                                    md:text-size-desktop-md `}
                    >
                        <Bulletpoint active={true}>
                            Dozentin-Tätigkeit als Privat-Lehrerin und an der Staatlichen Jugendmusikschule Hamburg seit
                            1984 in den Standorten Gymnasium Bondenwald und Albert-Schweitzer-Gymnasium in Hamburg.
                        </Bulletpoint>
                        <Bulletpoint active={true}>
                            Als Pionierin des Gruppenunterrichts und Schulkooperations Hamburg weit bekannt.
                        </Bulletpoint>
                        <Bulletpoint active={true}>
                            Workshop Leiterin mehrmals an Pädagogischen Jahreskonferenzen der Staatliche
                            Jugendmusikschule z.B. &apos;Wie kommt man in der Puste?&apos; und &apos;Musikspiele -
                            Spiele mit Musik - Spiele für den Instrumentalen Gruppenunterricht&apos;.
                        </Bulletpoint>
                        <Bulletpoint active={true}>
                            Mehrmals im Rahmen des „JeKi Tages“ der Landesinstitut für Lehrerbildung und
                            Schulentwicklung Hamburg Fortbildungen gehalten
                        </Bulletpoint>
                        <Bulletpoint active={true}>
                            Erfolgreiche Teilnahme von diverse Schüler an Wettbewerbe, u.a. Jugendmusiziert bis zum
                            Bundeswettbewerb
                        </Bulletpoint>
                    </article>

                    <div className="w-4/12 flex justify-center">
                        <MyImage
                            src={profilePic}
                            alt={"Profile photo"}
                            className={`h-max rounded-lg overflow-hidden 
                                        shadow-softWhite border-1.5 border-slate-200 `}
                        />
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
