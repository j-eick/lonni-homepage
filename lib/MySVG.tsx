import { ReactNode } from "react";

type ItemProp = (props: { size?: number }) => ReactNode;

type SVGProps = {
    BulletItemArrow: ItemProp;
};

export const MySVG: SVGProps = {
    BulletItemArrow: ({ size = 20 }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7H7l4 5l-4 5h6l4-5z"
            ></path>
        </svg>
    ),
};
