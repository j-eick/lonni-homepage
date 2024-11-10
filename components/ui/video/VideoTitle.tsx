type VideoTitleProps = {
    className?: string;
    content: string;
};

export default function VideoTitle({ content, className }: VideoTitleProps) {
    return (
        <span
            className={`absolute z-10 top-0 left-0 
                        w-full pt-2 pr-4 pl-4 pb-2 
                       text-slate-300 text-lg ${className}`}
        >
            <span>{content}</span>
        </span>
    );
}
