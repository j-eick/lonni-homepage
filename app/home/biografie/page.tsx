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
    const profilePhoto = "clamp(6.25rem, 20vw, 7.2rem)";

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
                                xss-320:text-size-pageTitle-mobile
                                sm-620:text-size-pageTitle-desktop`}
                    >
                        Über mich
                    </span>
                    <span
                        className={`
                                    absolute block w-full bottom-pageTitle-underline border-b-1.5 border-slate-700/40
                                    xss-320:border-b-1
                                `}
                    />
                </h1>
                {/* ----- MOBILE ----- */}
                <div
                    className={`flex gap-5
                                2xs:block
                                md-768:hidden`}
                >
                    <article
                        className={`w-full flowText hyphens-auto
                                    2xs:leading-7
                                    sm-620:leading-regularText
                                    md:text-size-desktop-md `}
                    >
                        <div className={`float-end w-biografieImg flex justify-center ml-4 mb-3`}>
                            <MyImage
                                src={profilePic}
                                alt={"Profile photo"}
                                className={`h-max rounded-lg overflow-hidden 
                                        shadow-softWhite border-1.5 border-slate-200 `}
                            />
                        </div>
                        Dozentin-Tätigkeit als Privat-Lehrerin und an der Staatlichen Jugendmusikschule Hamburg seit
                        1984 in den Standorten Gymnasium Bondenwald und Albert-Schweitzer-Gymnasium in Hamburg.
                        <br className="" />
                        Als Pionierin des Gruppenunterrichts und Schulkooperations Hamburg weit bekannt.
                        <br className="" />
                        Workshop Leiterin mehrmals an Pädagogischen Jahreskonferenzen der Staatliche Jugendmusikschule
                        z.B. &apos;Wie kommt man in der Puste?&apos; und &apos;Musikspiele - Spiele mit Musik - Spiele
                        für den Instrumentalen Gruppenunterricht&apos;.
                        <br className="" />
                        Mehrmals im Rahmen des „JeKi Tages“ der Landesinstitut für Lehrerbildung und Schulentwicklung
                        Hamburg Fortbildungen gehalten
                        <br className="" />
                        Erfolgreiche Teilnahme von diverse Schüler an Wettbewerbe, u.a. Jugendmusiziert bis zum
                        Bundeswettbewerb
                        {/* <Bulletpoint>
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
                        </Bulletpoint> */}
                    </article>
                </div>

                {/* ----- DESKTOP ----- */}
                <div
                    className={`flex gap-5
                                2xs:hidden
                                md-768:block`}
                >
                    <article
                        className={`w-full flowText hyphens-auto
                                    2xs:leading-7
                                    sm-620:leading-regularText
                                    md:text-size-desktop-md`}
                    >
                        <div className="float-end flex justify-center ml-4">
                            <MyImage
                                src={profilePic}
                                alt={"Profile photo"}
                                className={`h-max rounded-lg overflow-hidden 
                                        shadow-softWhite border-1.5 border-slate-200 `}
                            />
                        </div>
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
                </div>
            </main>
        </MainLayout>
    );
}
