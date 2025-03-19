import { MySVG } from "@/lib/MySVG";
import { ReactNode } from "react";

// const Pronounced = ({ children }: { children: ReactNode }) => {
//   return <strong className="font-semibold">{children}</strong>;
// };

type BulletpointProps = {
    children: ReactNode;
    active?: true | false;
    size?: number;
    fill?: "none" | "currentColor";
    classname?: string;
};

export default function Bulletpoint({
    children,
    size = 14,
    fill = "currentColor",
    active = false,
    classname,
}: BulletpointProps) {
    const bulletpointClasses = "flex place-items-start gap-3";
    const bulletpointPositionClasses = active ? "pt-bulletpointPosition" : "hidden";

    return (
        <li className={`${bulletpointClasses} ${classname}`}>
            <span className={bulletpointPositionClasses}>
                <MySVG.BulletItemArrow
                    size={size}
                    fill={fill}
                />
            </span>
            <p>{children}</p>
        </li>
    );
}
