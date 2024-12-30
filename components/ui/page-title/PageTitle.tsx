type PageTitleProps = {
    content: string;
};
export default function PageTitle({ content }: PageTitleProps) {
    const firstLetter = content[0];
    const rest = content.substring(1);

    return (
        <h1 className="relative mb-7 text-pageTitle leading-1.3">
            <span className="block w-11/12 border-b-1 border-slate-700/40">
                <span className="font-bold text-firstLetterTitle">{firstLetter}</span>
                {rest}
            </span>
        </h1>
    );
}
