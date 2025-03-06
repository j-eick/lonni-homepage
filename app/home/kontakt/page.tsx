"use client";

import Header from "@/components/ui/mainLayout/header/Header";
import MainLayout from "@/components/ui/mainLayout/MainLayout";
import "../../globals.css";
import Bulletpoint from "@/components/ui/bulletpoint/Bulletpoint";
import Image from "next/image";
import catImage from "../../../public/decoration/catSilhuette.svg";
import MyImage from "@/components/image/MyImage";
// import UsedTools from "@/components/used-tools/UsedTools";

export default function Home() {
    return (
        <MainLayout>
            {/* vvv---vvv PER PAGE CONTENT GOES HERE vvv---vvv */}
            <main
                className={`grow
                            w-9/10 h-full mx-auto my-0 py-20
                            flex justify-center gap-5 `}
            >
                <div
                    className={`relative flowText 
                                rounded-lg shadow-soft kontakPage-heavyRain
                                2xs:hidden
                                2sm:block`}
                >
                    <MyImage
                        src={catImage}
                        alt={"decorative-element"}
                        className={`absolute right-0 -scale-x-100
                                    2xs:w-cat-responsive 
                                    lg-1024:w-[230px] lg-1024:-top-[3vw]`}
                    />
                    <div className="pt-24 pb-16 px-12">
                        <div
                            className={`mx-auto my-0 flex flex-col
                                        font-secondary`}
                        >
                            <h1 className="mb-8 text-size-regularTitle border-b-1 border-color-primary">
                                Für Anfragen & Buchung
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
                </div>
            </main>
        </MainLayout>
    );
}
