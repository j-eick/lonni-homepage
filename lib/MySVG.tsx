import { ReactNode } from "react";

type ItemProp = (props: { size?: number }) => ReactNode;

type SVGProps = {
    BulletItemArrow: ItemProp;
    ArrowRight: ItemProp;
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
    ArrowRight: ({ size = 20 }) => (
        <svg
            width={size}
            height={size}
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
    ),
};
