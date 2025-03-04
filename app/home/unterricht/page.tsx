"use client";

import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import PageTitle from "@/components/ui/page-title/PageTitle";
import "../../globals.css";
import unterrichtImage from "../../../public/unterricht.jpeg";
import MyImage from "@/components/image/MyImage";
// import SideVideos from "@/components/ui/SideVideos";

export default function Home() {
    return (
        <MainLayout>
            <main
                className={`grow
                            w-12/12 mx-auto my-0 flex gap-5
                            2xs:px-7 2xs:mt-10
                            2xs:text-size-mobile-2xs
                            xs:text-size-mobile-xs
                            md-768:w-8.5/10`}
            >
                <article className={`relative flowText`}>
                    <PageTitle
                        firstLetter="U"
                        rest="nterricht"
                    />

                    <MyImage
                        src={unterrichtImage}
                        alt={""}
                        className={`
                                w-unterrichtImage-responsive h-max float-right ml-3 mb-1
                                            rounded-xl overflow-hidden
                                            shadow-softWhite border-1.5 border-slate-200
                                            2xs:hidden
                                            md-768:block lg-1024:w-unterrichtImage-big`}
                    />
                    <div
                        className={`flowText
                                    2xs:leading-7
                                    sm-620:leading-regularText
                                    md:text-size-desktop-md`}
                    >
                        <Bulletpoint>
                            Dozentin als Privatlehrerin und an der Staatlichen Jugendmusikschule Hamburg seit 1984 in
                            den Standorten Gymnasium Bondenwald und Albert-Schweitzer-Gymnasium in Hamburg.
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
                    </div>
                </article>
            </main>
            {/* <SideVideos /> */}
        </MainLayout>
    );
}
