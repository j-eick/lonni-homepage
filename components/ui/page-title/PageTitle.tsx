type PageTitleProps = {
    firstLetter: string;
    firstLetterStyle?: string;
    rest: string;
    restStyle?: string;
};
export default function PageTitle({ firstLetter, firstLetterStyle, rest, restStyle }: PageTitleProps) {
    return (
        <div className="relative">
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
            </span> 
            {/* ----------------------------- */}

            <h1 className="relative h-max font-secondary">
                <span className={`xss-320:text-size-firstLetterPagetitle `}>{firstLetter}</span>
                <span
                    className={`tracking-wider
                                xss-320:text-size-restPageTitle-mobile`}
                >
                    {rest}
                </span>
                <div
                    className={`absolute w-full bottom-pageTitle-underline border-b-1.5 border-slate-700/40
                                xss-320:border-b-1
                                `}
                />
            </h1>
        </div>
    );
}
