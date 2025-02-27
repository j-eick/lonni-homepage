"use client";

import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import Image from "next/image";
import "../../globals.css";
import unterrichtImage from "../../../public/unterricht.jpeg";
// import SideVideos from "@/components/ui/SideVideos";

export default function Home() {
    return (
        <MainLayout>
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <section
                className={`grow 
                            w-9/10 mx-auto my-0 flex flex-col`}
            >
                <PageTitle
                    firstLetter="U"
                    rest="nterricht"
                />
                <div className="h-full flex relative">
                    <main className={`w-full`}>
                        <article
                            className={`flowText
                                        lang
                                        xss-320:text-size-mobile-2xs xss-320:leading-7
                                        xs-375:text-size-mobile-xs
                                        sm-620:leading-regularText
                                        md-768:text-size-desktop-md md-768:pr-10 
                                        `}
                        >
                            <Bulletpoint>
                                Dozentin als Privatlehrerin und an der Staatlichen Jugendmusikschule Hamburg seit 1984
                                in den Standorten Gymnasium Bondenwald und Albert-Schweitzer-Gymnasium in Hamburg.
                            </Bulletpoint>
                            <Bulletpoint>
                                Als Pionierin des Gruppenunterrichts und Schulkooperations Hamburg weit bekannt
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
                                erfolgreiche Teilnahme von diverse Schüler an Wettbewerbe, u.a. Jugendmusiziert bis zum
                                Bundeswettbewerb
                            </Bulletpoint>
                        </article>
                    </main>
                    <div
                        className={`w-unterrichtImage h-max rounded-xl overflow-hidden
                                    shadow-softWhite border-1.5 border-slate-200
                                    2xs:hidden
                                    md-768:block
                                    `}
                    >
                        <Image
                            src={unterrichtImage}
                            alt={""}
                            className={`w-auto h-auto object-contain block`}
                        />
                    </div>
                    {/* <SideVideos /> */}
                </div>
            </section>
        </MainLayout>
    );
}
