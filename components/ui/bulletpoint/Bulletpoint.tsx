import { MySVG } from "@/lib/MySVG";
import { ReactNode } from "react";

// const Pronounced = ({ children }: { children: ReactNode }) => {
//   return <strong className="font-semibold">{children}</strong>;
// };

type BulletpointProps = {
    children: ReactNode;
    bulletpointSize?: number;
    fill?: "none" | "currentColor";
    classname?: string;
};

export default function Bulletpoint({
    children,
    bulletpointSize = 12,
    fill = "currentColor",
    classname,
}: BulletpointProps) {
    const bulletpointClasses = "flex place-items-start gap-4";
    // const bulletpointSize = 14;
    const bulletpointPositionClasses = "pt-3";

    return (
        <li className={`${bulletpointClasses} ${classname}`}>
            <span className={bulletpointPositionClasses}>
                <MySVG.BulletItemArrow
                    size={bulletpointSize}
                    fill={fill}
                />
            </span>
            <div>{children}</div>
        </li>
    );
}
