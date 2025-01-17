import { ReactNode } from "react";

type ItemProp = (props: { size?: number; fill?: string; className?: string }) => ReactNode;

type SVGProps = {
    BulletItemArrow: ItemProp;
    ArrowRight: ItemProp;
    Shoppingbag: ItemProp;
    Cart: ItemProp;
};

/**
 * @param {number} Standard: 20
 */
export const MySVG: SVGProps = {
    BulletItemArrow: ({ size = 20, fill = "currentColor" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
        >
            <path
                fill={fill}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7H7l4 5l-4 5h6l4-5z"
            ></path>
        </svg>
    ),
    ArrowRight: ({ size = 20, fill = "currentColor" }) => (
        <svg
            width={size}
            height={size}
            fill={fill}
            viewBox="0 0 16 16"
        >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
    ),
    Shoppingbag: ({ size = 20, fill = "currentColor", className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 48 48"
            className={className}
        >
            <g
                fill={fill}
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth={4}
            >
                <rect
                    width={28}
                    height={30}
                    x={10}
                    y={12}
                    fill="#2f88ff"
                    rx={3}
                ></rect>
                <path
                    strokeLinecap="round"
                    d="M30 18V10C30 6.68629 27.3137 4 24 4V4C20.6863 4 18 6.68629 18 10V18"
                ></path>
            </g>
        </svg>
    ),
    Cart: ({ size = 20, className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 128 128"
            className={className}
        >
            <circle
                cx={117.33}
                cy={9.69}
                r={5.69}
                fill="#f44336"
            ></circle>
            <path
                fill="none"
                stroke="#84b0c1"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4.913}
                d="M80.09 78.38s9.51 12.8 9.51 17.85s-4.1 9.15-9.15 9.15c-4.31 0-58.2-.11-64.15-.11s-9.32 3.49-9.32 3.49"
            ></path>
            <path
                fill="none"
                stroke="#84b0c1"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4.913}
                d="M58.83 77.13s10.6 14.05 10.6 19.11s-4.64 9.12-9.69 9.12"
            ></path>
            <path
                fill="#2f7889"
                d="M82.77 86.73c-2.01-3.44-3.64-5.44-6.26-9.02c0 0 .69.15 2.55.15s3.2-.59 3.2-.59c2.64 3.73 3.43 4.68 4.84 7.18c0 0-.05 1.63-1.35 2.49s-2.98-.21-2.98-.21m-20.21.17c-2.79-4.26-5.02-7.51-5.02-7.51l6 .14s2.69 3.61 4.23 6.47c0 0 .23 1.3-1.49 1.98c-1.72.66-3.72-1.08-3.72-1.08"
            ></path>
            <path
                fill="none"
                stroke="#84b0c1"
                strokeMiterlimit={10}
                strokeWidth={4.913}
                d="m80.11 78.64l-69.94-4.66c-.23-.02-.4-.2-.4-.43V34.5c0-.37.29-.68.66-.7l88.63-5.64c.86-.06 1.48.8 1.17 1.6L81.41 77.82c-.21.53-.73.86-1.3.82z"
            ></path>
            <path
                fill="none"
                stroke="#84b0c1"
                strokeMiterlimit={10}
                strokeWidth={2.948}
                d="M23.67 33.06L21.83 74.5m17.71-42.52l-5.75 43.41M55.42 30.9l-9.67 45.38M71.3 29.82L57.71 77.17m29.46-48.43l-17.5 49.32M8.29 48.48l85.56-2.94M9.08 62.11h79.4"
            ></path>
            <circle
                cx={80.41}
                cy={116.46}
                r={7.54}
                fill="#424242"
            ></circle>
            <path
                fill="#84b0c1"
                d="M75.55 106.08h9.73l-2.32 10.09c-.22 1.57-1.29 2.71-2.54 2.71s-2.33-1.14-2.54-2.71z"
            ></path>
            <path
                fill="#a8e3f0"
                d="M81.97 116.53c-.18.66-.51 1.41-1.18 1.58c-2.42.62-2.76-5.33-1.54-6.35c.74-.62 2.28-.73 2.93.04c.83.98.1 3.64-.21 4.73"
            ></path>
            <path
                fill="#2f7889"
                d="M80.53 109.65c-1.61 0-2.75-.95-3.31-1.54a.283.283 0 0 1 .19-.48c1.04-.05 2.08-.04 3.11-.07c1.04.03 2.08.02 3.11.07c.24.01.36.31.19.48c-.53.59-1.68 1.54-3.29 1.54"
            ></path>
            <path
                fill="#757575"
                d="M78.04 119.02c.65.75 1.69 1.1 2.68.98c.98-.12 1.88-.7 2.47-1.5c.34-.47.58-1.01.97-1.44s1.01-.73 1.55-.51c.76.3.86 1.36.6 2.13a6.08 6.08 0 0 1-3.09 3.56c-.99.49-2.37.69-3.47.58c-2.11-.22-4.38-2.13-5.12-4.09c-.4-1.05-.75-3.16 1.34-2.68c.97.23 1.29 2.07 2.07 2.97"
            ></path>
            <path
                fill="none"
                stroke="#84b0c1"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4.913}
                d="m99.82 30.71l4.61-11.27c1.88-4.6 3.27-5.63 6.06-6.88l6.53-2.65"
            ></path>
            <circle
                cx={19.6}
                cy={116.46}
                r={7.54}
                fill="#424242"
            ></circle>
            <path
                fill="#84b0c1"
                d="M14.73 106.08h9.73l-2.32 10.09c-.22 1.57-1.29 2.71-2.54 2.71s-2.33-1.14-2.54-2.71z"
            ></path>
            <path
                fill="#a8e3f0"
                d="M21.16 116.53c-.18.66-.51 1.41-1.18 1.58c-2.42.62-2.76-5.33-1.54-6.35c.74-.62 2.28-.73 2.93.04c.83.98.09 3.64-.21 4.73"
            ></path>
            <path
                fill="#2f7889"
                d="M19.72 109.65c-1.61 0-2.75-.95-3.31-1.54a.283.283 0 0 1 .19-.48c1.04-.05 2.08-.04 3.11-.07c1.04.03 2.08.02 3.11.07c.24.01.36.31.19.48c-.54.59-1.69 1.54-3.29 1.54"
            ></path>
            <path
                fill="#757575"
                d="M17.22 119.02c.65.75 1.69 1.1 2.68.98c.98-.12 1.88-.7 2.47-1.5c.34-.47.58-1.01.97-1.44s1.01-.73 1.55-.51c.76.3.86 1.36.6 2.13a6.08 6.08 0 0 1-3.09 3.56c-.99.49-2.37.69-3.47.58c-2.11-.22-4.38-2.13-5.12-4.09c-.4-1.05-.75-3.16 1.34-2.68c.97.23 1.29 2.07 2.07 2.97"
            ></path>
        </svg>
    ),
};
