import { Dispatch, useEffect, useState } from "react";

export default function useClickOutside(
    targetElement: string,
    setIsModalOpen: Dispatch<React.SetStateAction<boolean>>
) {
    const [isModalOpen, setLocalIsModalOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const modal = document.getElementById(`${targetElement}`);
            if (modal && !modal.contains(event.target as Node) && isModalOpen) {
                setIsModalOpen(false);
                setLocalIsModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    return isModalOpen;
}
