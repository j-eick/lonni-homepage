import useWindowSize from "@/app/hooks/useWindowSize";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
    const windowSize = useWindowSize();

    return (
        <div className="h-full w-screen pt-14">
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
            <div className="min-h-full w-8.5/10 max-w-[1273px] mx-auto my-0 flex flex-col">{children}</div>
        </div>
    );
}
