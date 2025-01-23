type PageTitleProps = {
    firstLetter: string;
    firstLetterStyle?: string;
    rest: string;
    restStyle?: string;
};
export default function PageTitle({ firstLetter, firstLetterStyle, rest, restStyle }: PageTitleProps) {
    const shadowTopPosition = "top-[-45px]";
    const shadowLeftPosition = "-left-3";

    return (
        <div className=" relative w-full">
            <span
                className={`absolute ${shadowTopPosition} ${shadowLeftPosition} 
                            font-quaternary tracking-widest font-max
                            text-size-pageTitle-shadow opacity-[.027] ${restStyle}`}
            >
                <span className={`text-size-firstLetterPagetitle-shadow ${firstLetterStyle}`}>{firstLetter}</span>
                {rest}
            </span>
            {/* // TODO - PageTitle is not using fluid typing */}
            <h1 className="relative mb-7 text-size-pageTitle font-secondary leading-1.3">
                <div className={`relative tracking-wider`}>
                    <span className="font-bold text-size-firstLetterPagetitle">{firstLetter}</span>
                    {rest}
                    {/* -----  UNDERLINE  ----- */}
                    <div className="absolute w-full bottom-2 -left-2 border-b-1.5 border-slate-700/40" />
                </div>
            </h1>
        </div>
        // ###-----  old version -----###
        // <h1 className="relative mb-7 text-pageTitle leading-1.3">
        //     {content}
        //     <span
        //         className={`block font-pageTitle tracking-wider
        //                                     w-11/12 border-b-1 border-slate-700/40`}
        //     >
        //         <span className="font-bold text-firstLetterTitle">H</span>erzlich Willkommen!
        //     </span>
        // </h1>
    );
}
