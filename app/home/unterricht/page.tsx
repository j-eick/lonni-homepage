"use client";

import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import SideVideos from "@/components/ui/SideVideos";

export default function Home() {
    return (
        <MainLayout>
            <Header className="relative flex w-full mb-14" />
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <section
                className={`grow 
                            w-9/10 mx-auto my-0 flex flex-col`}
            >
                <PageTitle
                    firstLetter="U"
                    rest="nterricht"
                />
                <div className="h-full flex">
                    <main className={`w-8/12`}>
                        <article className="flowText">
                            <div className="pr-10 flowText">
                                <Bulletpoint>
                                    Dozentin-Tätigkeit als Privat-Lehrerin und an der Staatlichen Jugendmusikschule
                                    Hamburg seit 1984 in den Standorten Gymnasium Bondenwald und
                                    Albert-Schweitzer-Gymnasium in Hamburg.
                                </Bulletpoint>
                                <Bulletpoint>
                                    Als Pionierin des Gruppenunterrichts und Schulkooperations Hamburg weit bekannt
                                </Bulletpoint>

                                <Bulletpoint>
                                    Workshop Leiterin mehrmals an Pädagogischen Jahreskonferenzen der Staatliche
                                    Jugendmusikschule z.B. 'Wie kommt man in der Puste?' und 'Musikspiele - Spiele mit
                                    Musik - Spiele für den Instrumentalen Gruppenunterricht'.
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
                    <SideVideos />
                </div>
            </section>
        </MainLayout>
    );
}
