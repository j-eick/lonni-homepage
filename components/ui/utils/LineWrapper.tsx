import { ReactNode, useMemo } from "react";

type LineWrapperProps = {
    content: ReactNode;
};

export default function LineWrapper({ content }: LineWrapperProps) {
    // const position = useMemo(() => {
    //   switch (position) {
    //     case top: return ""

    //       break;

    //     default:
    //       break;
    //   }
    // }, [])

    return (
        <div
            className={`relative
                        before:absolute before:content-[''] before:w-full
                        before:border-b-1 before:bottom-0 border-slate-700`}
        >
            {content}
        </div>
    );
}
