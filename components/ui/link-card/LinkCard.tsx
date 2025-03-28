import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
    photo: StaticImport;
    photoStyle?: string;
};

export default function LinkCard({
    width = 300,
    height = 200,
    description,
    descriptionStyle,
    subText,
    subTextStyle,
    url = "",
    actualLink = "",
    optional,
    photo,
    photoStyle,
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
            className={`
                        relative rounded-2xl overflow-hidden border-1 border-slate-700/50
                        hover:border-1 hover:border-slate-700 hover:shadow-flat`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* -------  BACKGROUND IMG  ------- */}
            <Image
                src={"/wgTiles.jpg"}
                alt={""}
                width={width}
                height={height}
                className="opacity-40"
            />
            {/* -------  PHOTO  ------- */}
            <Image
                src={photo}
                alt={""}
                width={width}
                height={height}
                className={`absolute inset-0 z-0 ${photoStyle}
                            ${isHovered ? "blur-sm brightness-80 animate-slowOpacityFadeout " : ""}`}
            />
            {isHovered ? <div className="absolute inset-0 z-10 bg-slate-600/40" /> : ""}

            {/* -------  TEXT LAYER  ------- */}
            <div
                className={`absolute z-20 inset-0 flex flex-col
                            font-secondary text-size-project-title
                            rounded-2xl overflow-hidden`}
            >
                {/* -------  DESCRIPTION  ------- */}
                <div
                    className={`grow px-3 grid place-items-center
                                tracking-wider text-center leading-8 
                                text-color-linkCard-text ${descriptionStyle}`}
                >
                    {isHovered ? <p className="animate-slideInRightToLeft">{description}</p> : ""}

                    {/* -------  ADDITIONAL TEXT  ------- */}
                    {isHovered
                        ? !!subText && (
                              <span
                                  className={`
                                    text-size-project-description leading-6 ${subTextStyle}
                                    animate-slideInRightToLeft`}
                              >
                                  {subText}
                              </span>
                          )
                        : ""}
                    {}

                    {/* -------  OPTIONAL TEXT  ------- */}
                    {!!optional && <span className="text-red-500">{optional}</span>}
                </div>

                {/* -------  LINK TEXT BANNER  ------- */}
                <div
                    className={` h-2.5/10 flex justify-center items-center 
                                text-color-linkCard-text font-secondary bg-slate-700/70 tracking-widest
                                text-size-projektUrl font-semibold
                                transition-colors duration-300 ease-in-out`}
                >
                    {!isHovered ? (
                        <div
                            className={`w-full h-full grid place-items-center transition-all duration-300
                                        ${!isHovered ? "" : ""}`}
                        >
                            {url}
                        </div>
                    ) : (
                        <div
                            className={`w-full h-full flex 
                                        `}
                        >
                            <div className={`w-8/12 h-full flex justify-center items-center`}>{url}</div>
                            <span
                                className={`w-4/12 h-full flex justify-center items-center animate-slideInRightToLeft`}
                            >
                                <Link
                                    className={`px-5
                                                border-1 rounded-lg 
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
