"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import "../../globals.css";
import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import Image from "next/image";
import catImage from "../../../public/decoration/catSilhuette.svg";
import MyImage from "@/components/image/MyImage";

export default function Home() {
    return (
        <MainLayout>
            {/* ---  DESKTOP  --- */}
            <main
                className={`grow 
                            w-full mx-auto 
                            grid place-content-center
                            2xs:hidden
                            2sm:block `}
            >
                <div
                    className={`relative mx-auto mb-20 
                                pt-24 pb-16 px-12 
                                rounded-lg shadow-soft kontakPage-heavyRain
                                max-w-[520px]
                                2sm-455:w-8/10 
                                2sm:mt-kontakt_card
                                md-768:mt-kontakt_card_768
                                `}
                >
                    <MyImage
                        src={catImage}
                        alt={"cat-silhuette-image"}
                        className={`absolute right-0 -scale-x-100 top-catSilhouette
                                    2sm-455:w-catSilhuette-desktop`}
                    />

                    <div
                        className={`mx-auto my-0 flex flex-col
                                    font-secondary`}
                    >
                        <h1 className="mb-8 text-size-regularTitle border-b-1 border-color-primary">
                            Für Anfragen & Buchungen
                        </h1>
                        <div className="flex gap-5 pl-5">
                            <ul className="flex flex-col gap-2">
                                <Bulletpoint>
                                    <strong>Telefon</strong>
                                </Bulletpoint>
                                <Bulletpoint>
                                    <strong>Mobile</strong>
                                </Bulletpoint>
                                <Bulletpoint>
                                    <strong>E-Mail</strong>
                                </Bulletpoint>
                                <Bulletpoint>
                                    <strong>Adresse</strong>
                                </Bulletpoint>
                            </ul>
                            <div className="flex flex-col gap-2">
                                <span>040/56 32 01</span>
                                <span>(+49)162 332 3355</span>
                                <span>lonni.inman@gmx.de</span>
                                <span>
                                    Beethovenallee 14 <br /> 22529 Hamburg
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* ---  MOBILE @455px  --- */}
            <main
                className={`relative grow
                            w-full mx-auto mt-36
                            flex justify-center gap-5 
                            2xs:block
                            2sm:hidden `}
            >
                <div className="w-11/12 mx-auto">
                    <MyImage
                        src={catImage}
                        alt={"decorative-element"}
                        className={`absolute right-0 -scale-x-100 -top-5
                                2xs:w-catSilhuette-mobile `}
                    />
                    <div className={`w-max mx-auto pt-24 pb-16 px-[10vw]`}>
                        <div
                            className={`mx-auto my-0 flex flex-col
                                    font-secondary`}
                        >
                            <h1 className="mb-5 text-size-regularTitle border-b-1 border-color-primary w-max">
                                Für Anfragen & Buchung
                            </h1>
                            <div className="flex gap-5">
                                <ul className="flex flex-col gap-2">
                                    <Bulletpoint>
                                        <strong>Telefon</strong>
                                    </Bulletpoint>
                                    <Bulletpoint>
                                        <strong>Mobile</strong>
                                    </Bulletpoint>
                                    <Bulletpoint>
                                        <strong>E-Mail</strong>
                                    </Bulletpoint>
                                    <Bulletpoint>
                                        <strong>Adresse</strong>
                                    </Bulletpoint>
                                </ul>
                                <div className="flex flex-col gap-2">
                                    <span>040/56 32 01</span>
                                    <span>(+49)162 332 3355</span>
                                    <span>lonni.inman@gmx.de</span>
                                    <span>
                                        Beethovenallee 14 <br /> 22529 Hamburg
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
