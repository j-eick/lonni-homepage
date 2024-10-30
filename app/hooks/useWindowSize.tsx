import { useEffect, useState } from "react";

type WindowProps = {
    width: number;
    height: number;
};

export default function useWindowSize() {
    const [windowSize, setwindowSize] = useState<WindowProps>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleWindowListener = () => {
            setwindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleWindowListener);

        return () => {
            window.removeEventListener("resize", handleWindowListener);
        };
    }, []);

    return [windowSize];
}
