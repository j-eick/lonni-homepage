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
                            mx-auto flex gap-5 
                            mt-content_top-mobile 
                            mb-content_bottom-mobile
                            2xs:w-10/12
                            md-768:w-9/12 
                            md-768:mt-content_top-desktop 
                            md-768:mb-content_bottom-desktop
                            `}
            >
                <article className={`relative flowText`}>
                    <h1 className="relative mb-pageTitle font-secondary">
                        <span
                            className={`
                                xss-320:text-size-pageTitle-mobile
                                sm-620:text-size-pageTitle-desktop
                                `}
                        >
                            Unterricht
                        </span>
                        <span
                            className={`
                                    absolute block w-full bottom-pageTitle-underline border-b-1.5 border-slate-700/40
                                    xss-320:border-b-1
                                `}
                        />
                    </h1>
                    <div
                        className={`text-justify hyphens-auto
                                    sm-620:leading-mobile
                                    2md-875:leading-desktop
                                    `}
                    >
                        Here&apos;s some info about my classes and the way I teach. Als Pionierin des Gruppenunterrichts
                        und Schulkooperations Hamburg weit bekannt.
                        <MyImage
                            src={unterrichtImage}
                            alt={"Foto: Unterricht"}
                            className={`w-full mx-auto text-center rounded-xl overflow-hidden 
                                        shadow-softWhite border-1.5 border-slate-200
                                        2xs:w-unterrichtImage-min320 2xs:my-[3vw]
                                        md-768:block 
                                        md-768:w-unterrichtImage-min768 md-768:my-[2vw]
                                        lg-1024:float-right lg-1024:ml-7 lg-1024:mb-3
                                        lg-1024:w-unterrichtImage-min1024
`}
                        />
                        Workshop Leiterin mehrmals an Pädagogischen Jahreskonferenzen der Staatliche Jugendmusikschule
                        z.B. &apos;Wie kommt man in der Puste?&apos; und &apos;Musikspiele - Spiele mit Musik - Spiele
                        für den Instrumentalen Gruppenunterricht&apos;. Mehrmals im Rahmen des „JeKi Tages“ der
                        Landesinstitut für Lehrerbildung und Schulentwicklung Hamburg Fortbildungen gehalten.
                        erfolgreiche Teilnahme von diverse Schüler an Wettbewerbe, u.a. Jugendmusiziert bis zum
                        Bundeswettbewerb.
                    </div>
                </article>
            </main>
            {/* <SideVideos /> */}
        </MainLayout>
    );
}

{
    /* <Bulletpoint>Here&apos;s some info about my classes and the way I teach.</Bulletpoint>
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
</Bulletpoint> */
}
