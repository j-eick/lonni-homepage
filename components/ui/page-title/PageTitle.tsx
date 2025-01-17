import { ReactNode } from "react";

type PageTitleProps = {
    content?: ReactNode;
};
export default function PageTitle({ content }: PageTitleProps) {
    return (
        <h1 className="relative mb-7 text-pageTitle leading-1.3">
            {content}
            <span
                className={`block font-pageTitle tracking-wider
                                            w-11/12 border-b-1 border-slate-700/40`}
            >
                <span className="font-bold text-firstLetterTitle">H</span>erzlich Willkommen!
            </span>
        </h1>
    );
}
