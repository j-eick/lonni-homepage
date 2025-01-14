import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

type LinkCardProps = {
    description: ReactNode;
    descriptionStyle?: string;
    subText?: ReactNode;
    subTextStyle?: string;
    url?: string;
    actualLink?: string;
    width?: number;
    height?: number;
    optional?: string;
};

export default function LinkCard({
    width = 350,
    height = 250,
    description,
    descriptionStyle,
    subText,
    subTextStyle,
    url = "",
    actualLink = "",
    optional,
}: LinkCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const link: string = actualLink === "" ? url : actualLink;

    useEffect(() => {
        // console.log(isHovered);
        console.log(link);
        console.log(typeof actualLink);
    }, [isHovered, link]);

    return (
        <div
            className={`bb 
                        relative w-max rounded-2xl overflow-hidden`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* -------  BACKGROUND IMG  ------- */}
            <img
                src="/wgTiles.jpg"
                alt=""
                width={width}
                height={height}
                className="opacity-40"
            />
            {/* -------  TEXT LAYER  ------- */}
            <div
                className={`absolute inset-0 flex flex-col
                            font-pagelinks 
                            rounded-2xl overflow-hidden`}
            >
                {/* -------  DESCRIPTION  ------- */}
                <div
                    className={`grow px-3 grid place-items-center
                                text-projektDescription tracking-wider text-center leading-8 ${descriptionStyle}`}
                >
                    {description}
                    {/* -------  ADDITIONAL TEXT  ------- */}
                    {!!subText && <span className={`text-projektSubtext leading-6 ${subTextStyle}`}>{subText}</span>}
                    {/* -------  OPTIONAL TEXT  ------- */}
                    {!!optional && <span className="text-red-500">{optional}</span>}
                </div>
                <div
                    className={`mb-5 h-2.5/10 flex justify-center items-center 
                                text-slate-200 font-projektLink tracking-wider
                                transition-colors duration-300 ease-in-out
                                text-projektUrl`}
                >
                    {/* -------  LINK TEXT BANNER  ------- */}
                    {!isHovered ? (
                        <div
                            className={`w-full h-full grid place-items-center transition-all duration-300
                                        ${!isHovered ? "bg-slate-700/40" : ""}`}
                        >
                            {url}
                        </div>
                    ) : (
                        <div className={`w-full h-full flex bg-slate-700/40`}>
                            <div
                                className={`w-8/12 h-full flex justify-center items-center
                                            text-projektUrl-small`}
                            >
                                {url}
                            </div>
                            <span
                                className={`w-4/12 h-full flex justify-center items-center animate-slideInRightToLeft`}
                            >
                                <Link
                                    className={`px-5
                                                border-1 border-slate-200 rounded-lg
                                                hover:font-bold hover:border-2 hover:cursor-pointer`}
                                    href={link}
                                >
                                    link
                                </Link>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
