import useWindowSize from "@/app/hooks/useWindowSize";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: ReactNode }) {
    const windowSize = useWindowSize();

    const path = usePathname();
    console.log(windowSize.width);

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div className="h-full w-screen pt-14">
            <p className={`absolute top-2 right-2`}>{windowSize.width}px</p>
            <div className="min-h-full w-8.5/10 mx-auto my-0 flex flex-col">{children}</div>
        </div>
    );
}
