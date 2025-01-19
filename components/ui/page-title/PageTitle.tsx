type PageTitleProps = {
    firstLetter: string;
    firstLetterStyle?: string;
    rest: string;
    restStyle?: string;
};
export default function PageTitle({ firstLetter, firstLetterStyle, rest, restStyle }: PageTitleProps) {
    return (
        <div className=" relative ">
            <span
                className={`absolute top-[-75px] -left-4 
                                    font-quaternary tracking-widest font-black
                                    text-[80px] opacity-[.035] ${restStyle}`}
            >
                <span className={`text-[120px] ${firstLetterStyle}`}>{firstLetter}</span>
                {rest}
            </span>
            <h1 className="relative mb-7 text-pageTitle font-secondary leading-1.3">
                <span
                    className={`block font-pageTitle tracking-wider
                                w-11/12 border-b-1 border-slate-700/40`}
                >
                    <span className="font-bold text-firstLetterTitle">{firstLetter}</span>
                    {rest}
                </span>
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
