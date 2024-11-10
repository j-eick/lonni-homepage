import { useMemo } from "react";

type VideoTitleProps = {
    className?: string;
    content: string;
    bgColor?: "dark" | "light";
};

export default function VideoTitle({ content, bgColor, className }: VideoTitleProps) {
    const backgroundColor = useMemo(() => {
        switch (bgColor) {
            case "light":
                return "bg-slate-200/30";
            case "dark":
                return "bg-slate-600/20";

            default:
                return "bg-slate-600/20";
        }
    }, []);

    return (
        <span
            className={`absolute z-10 top-0 left-0 
                        w-full pt-2 pr-4 pl-4 pb-2 
                       text-slate-300 text-lg ${backgroundColor} ${className}`}
        >
            <span>{content}</span>
        </span>
    );
}
