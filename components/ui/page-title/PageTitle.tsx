type PageTitleProps = {
    firstLetter: string;
    firstLetterStyle?: string;
    rest: string;
    restStyle?: string;
};
export default function PageTitle({ firstLetter, firstLetterStyle, rest, restStyle }: PageTitleProps) {
    return (
        <div className="relative w-full mb-7">
            {/* ----- PageTitle Shadow ----- */}
            {/* <span
                className={`absolute z-0 -left-3
                            font-quaternary tracking-widest font-max 
                            opacity-[.027] ${restStyle}
                            2xs:opacity-[.035] 2xs:left-0 2xs:bottom-[-.3rem]
                            2xs:text-size-RestPageTitle-shadow-mobile
                            2sm:bottom-[-.5rem]
                            md:-top-7 
                            lg:-top-9 
                            xl:-top-10 
                            `}
            >
                <span
                    className={`text-size-firstLetterPagetitle-shadow-mobile
                                ${firstLetterStyle}`}
                >
                    {firstLetter}
                </span>
                {rest}
            </span> */}
            {/* ----------------------------- */}

            <h1 className="relative font-secondary leading-1.3">
                <span
                    className={`font-bold
                                2xs:text-size-firstLetterPagetitle
                                `}
                >
                    {firstLetter}
                </span>
                <span
                    className={`relative tracking-wider
                                2xs:text-size-restPageTitle-mobile`}
                >
                    {rest}
                </span>
                {/* -----  UNDERLINE  ----- */}
                <div
                    className={`absolute z-0 w-full border-b-1.5 border-slate-700/40
                                2xs:bottom-[2vw] 2xs:border-b-1 2xs:border-slate-700/40
                                2lg:bottom-[1.5rem]
                                
                        `}
                />
            </h1>
        </div>
    );
}
