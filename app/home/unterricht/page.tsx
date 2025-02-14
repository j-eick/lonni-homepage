"use client";

import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import Image from "next/image";
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
                    <main className={`w-8/12`}>
                        <article className="flowText">
                            <div className="pr-10 flowText">
                                <Bulletpoint classname="w-10/12">
                                    Dozentin-Tätigkeit als Privat-Lehrerin und an der Staatlichen Jugendmusikschule
                                    Hamburg seit 1984 in den Standorten Gymnasium Bondenwald und
                                    Albert-Schweitzer-Gymnasium in Hamburg.
                                </Bulletpoint>
                                <Bulletpoint>
                                    Als Pionierin des Gruppenunterrichts und Schulkooperations Hamburg weit bekannt
                                </Bulletpoint>

                                <Bulletpoint>
                                    Workshop Leiterin mehrmals an Pädagogischen Jahreskonferenzen der Staatliche
                                    Jugendmusikschule z.B. &apos;Wie kommt man in der Puste?&apos; und &apos;Musikspiele
                                    - Spiele mit Musik - Spiele für den Instrumentalen Gruppenunterricht&apos;.
                                </Bulletpoint>
                                <Bulletpoint>
                                    Mehrmals im Rahmen des „JeKi Tages“ der Landesinstitut für Lehrerbildung und
                                    Schulentwicklung Hamburg Fortbildungen gehalten
                                </Bulletpoint>
                                <Bulletpoint>
                                    erfolgreiche Teilnahme von diverse Schüler an Wettbewerbe, u.a. Jugendmusiziert bis
                                    zum Bundeswettbewerb
                                </Bulletpoint>
                            </div>
                        </article>
                    </main>
                    <div
                        className={`absolute z-0 right-0 -top-28 rounded-xl overflow-hidden w-responsive-photo
                                    shadow-softWhite border-1.5 border-slate-200`}
                    >
                        <Image
                            src={"/unterricht.jpeg"}
                            alt={""}
                            width={600}
                            height={100}
                            className={``}
                        />
                    </div>
                    {/* <SideVideos /> */}
                </div>
            </section>
        </MainLayout>
    );
}
