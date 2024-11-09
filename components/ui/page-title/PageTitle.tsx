type PageTitleProps = {
    content: string;
};
export default function PageTitle({ content }: PageTitleProps) {
    return <h4 className="pb-10 text-2xl font-semibold">{content}</h4>;
}
