/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                thumbnailLink:
                    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                thumbnailLink2: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            },
            backdropBlur: {
                "2px": "2px",
                "3px": "3px",
                "4px": "4px",
                "5px": "5px",
                "6px": "6px",
                "8px": "8px",
                "10px": "10px",
            },
            backdropBrightness: {
                25: ".25",
                60: ".6",
                70: ".7",
                80: ".8",
                85: ".85",
                90: ".9",
            },
            backgroundColor: {
                selected: "rgb(194, 194, 194)",
            },
            backgroundImage: {
                fluteLonni: "url('/lonniFlute.png')",
                hompageBg: "url('/homepageBg.jpg')",
                hompageBgLessBorder: "url('/homepageBg2.webp')",
                bg1: "url('/bg1.jpg')",
                tiles: "linear-gradient((rgba(255,255,255,.5)), url('/wgTiles.jpg')",
                fluteBg: "url('/flute2.jpg')",
            },
            backgroundPosition: {
                middleLeft: "-translate-x-1/2",
            },
            backgroundSize: {
                "50%": "50%",
                "105%": "105%",
                "110%": "110%",
            },
            borderColor: {
                "color-primary": "var(--primary)",
            },
            borderRadius: {
                "3xl": "24px",
            },
            borderWidth: {
                1: "1px",
                1.5: "1.5px",
            },
            boxShadow: {
                mainShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                asideShadow: "rgba(0, 0, 0, 0.3) 2px 0px 8px, rgba(140, 140, 140, 0.22) 0px 0px 20px",
                regular: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                "flat-central":
                    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                line: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                line2: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                flat: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                step: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                soft: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
            },
            colors: {
                "color-primary": "var(--primary2)",
                "color-secondary": "var(--secondary)",
            },
            flexGrow: {
                2: "2",
                3: "3",
            },
            fontFamily: {
                primary: "var(--font-primary)",
                secondary: "var(--font-secondary)",
                tertiary: "var(--font-tertiary)",
                quaternary: "var(--font-quaternary)",
                geosans: "var(--font-geosans)",

                landingTitle: ["Calinastiya"],
                headerTitle: "Argentina Script",
                pageTitle: "Walkway SemiBold",
                navLink: "Roboto-Light",
            },
            fontSize: {
                // -----  regular  -----
                "size-default": "var(--step-1)",
                "size-small": "var(--step--1)",

                // -----  Titles -----
                "size-pageTitle": "var(--step-2)",
                "size-firstLetterPagetitle": "var(--step-3)",
                "size-regularTitle": "var(--step-2)",
                "size-headerTitle": "85px",

                // ----------  PageTitle-Shadow ----------
                "size-firstLetterPagetitle-shadow": "var(--step-45)",
                "size-pageTitle-shadow": "var(--step-35)",

                pageTitle: "33px",
                firstLetterTitle: "44px",
                navLinks: "17px",

                //-----  Projekt-Links  -----
                "size-projektDescription": "var(--step-0)",
                projektSubtext: "var(--step--1)",
                "projektSubtext-small": ".7em",
                // projektUrl: "1.3em",
                projektUrl: "var(--step-0)",
                "projektUrl-small": ".85em",
            },
            fontWeight: {
                max: "1000",
            },
            gridTemplateRows: {
                13: "repeat(16, minmax(0, 1fr))",
                14: "repeat(16, minmax(0, 1fr))",
                15: "repeat(16, minmax(0, 1fr))",
                16: "repeat(16, minmax(0, 1fr))",
                17: "repeat(16, minmax(0, 1fr))",
                18: "repeat(16, minmax(0, 1fr))",
                mainLayout: "18% 1fr",
            },
            gridTemplateColumns: {
                13: "repeat(16, minmax(0, 1fr))",
                14: "repeat(16, minmax(0, 1fr))",
                15: "repeat(16, minmax(0, 1fr))",
                16: "repeat(16, minmax(0, 1fr))",
                17: "repeat(16, minmax(0, 1fr))",
                18: "repeat(16, minmax(0, 1fr))",
            },
            gridColumnStart: {
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
            },
            gridColumnEnd: {
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
            },
            gridRowStart: {
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
            },
            gridRowEnd: {
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
            },
            height: {
                "1.5/10": "15%",
                "2/10": "20%",
                "2.25/10": "22.5%",
                "2.5/10": "25%",
                "3/10": "30%",
                "7/10": "70%",
                "7/10": "70%",
                "7.5/10": "75%",
                "8/10": "80%",
                "8.5/10": "85%",
                "9/10": "90%",
                "9.5/10": "95%",
            },
            lineHeight: {
                1: 1,
                1.2: 1.2,
                1.3: 1.3,
                1.4: 1.4,
                1.5: 1.5,
                2: 2,
                standardText: 1.8,
            },
            padding: {
                1.5: "6px",
                2.5: "10px",
            },
            scale: {
                "navLinks-selected": "1.15",
            },
            width: {
                "1.5/10": "15%",
                "2/10": "20%",
                "2.5/10": "25%",
                "3/10": "30%",
                "6/10": "60%",
                "6.5/10": "65%",
                "7/10": "70%",
                "7.5/10": "75%",
                "8/10": "80%",
                "8.5/10": "85%",
                "9/10": "90%",
                "9.5/10": "95%",
                "nav-minWidth": "min(30%, 270px)",
                "canvas-width": "min(85%, 1200px)",
            },
            maxWidth: {
                "navContainer-left": "440px",
                "navContainer-right": "405px",
                "950px": "950px",
                "1050px": "1050px",
                "1150px": "1150px",
                "1200px": "1200px",
                "1250px": "1250px",
                "1350px": "1350px",
                "canvas--1270px": "1270px",
            },
            screens: {
                "1120x": "1120px",
                "1230px": "1230px",
            },
            translate: {
                1.5: "6px",
            },
            animation: {
                ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
                float: "float 5s ease-in-out infinite alternate",
                spin: "spin 5s linear infinite",
                slideIn: "slideIn 0.3s ease-in-out forwards",
                slideInRightToLeft: "slideInRightToLeft 0.3s ease-in-out forwards",
            },
            keyframes: {
                ripple: {
                    "0%, 100%": {
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                    "50%": {
                        transform: "translate(-50%, -50%) scale(0.9)",
                    },
                },
                float: {
                    "0%": { transform: "translate(0, 0)" },
                    "100%": { transform: "translate(10px, 10px)" },
                },
                spin: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                slideIn: {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" },
                },
                slideInRightToLeft: {
                    "0%": { opacity: 0, transform: "translate(25%, 0)" },
                    "100%": { opacity: 1, transform: "translate(0, 0)" },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
