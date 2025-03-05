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
            <main
                className={`w-12/12 px-7 mx-auto my-0 flex flex-col
                            2xs:mt-10
                            md-768:w-8/10
                            `}
            >
                <PageTitle
                    firstLetter="B"
                    rest="iografie"
                />
                <div className="flex">
                    <article
                        className={`w-8/12 flowText 
                                    2xs:leading-7
                                    sm-620:leading-regularText
                                    md:text-size-desktop-md `}
                    >
                        {/* ###-----  PageTitle without opaque mirroring  -----### */}
                        {/* <h1 className="relative mb-7 text-pageTitle leading-1.3">
                            <span
                                className={`block font-pageTitle tracking-wider
                                            w-11/12 border-b-1 border-slate-700/40`}
                            >
                                <span className="font-bold text-firstLetterTitle">B</span>iografie
                            </span>
                                 </h1> */}
                        <Bulletpoint>
                            Dozentin-Tätigkeit als Privat-Lehrerin und an der Staatlichen Jugendmusikschule Hamburg seit
                            1984 in den Standorten Gymnasium Bondenwald und Albert-Schweitzer-Gymnasium in Hamburg.
                        </Bulletpoint>
                        <Bulletpoint>
                            Als Pionierin des Gruppenunterrichts und Schulkooperations Hamburg weit bekannt.
                        </Bulletpoint>
                        <Bulletpoint>
                            Workshop Leiterin mehrmals an Pädagogischen Jahreskonferenzen der Staatliche
                            Jugendmusikschule z.B. &apos;Wie kommt man in der Puste?&apos; und &apos;Musikspiele -
                            Spiele mit Musik - Spiele für den Instrumentalen Gruppenunterricht&apos;.
                        </Bulletpoint>
                        <Bulletpoint>
                            Mehrmals im Rahmen des „JeKi Tages“ der Landesinstitut für Lehrerbildung und
                            Schulentwicklung Hamburg Fortbildungen gehalten
                        </Bulletpoint>
                        <Bulletpoint>
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
