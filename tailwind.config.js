/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
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
            borderWidth: {
                1: "1px",
            },
            boxShadow: {
                mainShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                asideShadow: "rgba(0, 0, 0, 0.3) 2px 0px 8px, rgba(140, 140, 140, 0.22) 0px 0px 20px",
            },
            flexGrow: {
                2: "2",
                3: "3",
            },
            fontFamily: {
                landingTitle: ["Calinastiya"],
            },
            fontSize: {
                "3xl": "1.953rem",
                "4xl": "2.441rem",
                "16px": "16px",
                "80px": "80px",
                pageTitle: "33px",
                firstLetterTitle: "44px",
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
                "950px": "950px",
                "1050px": "1050px",
                "1150px": "1150px",
                "1200px": "1200px",
                "1250px": "1250px",
                "1350px": "1350px",
            },
            screens: {
                // "950x": "950px",
                // "1175x": "1175px",
                "1120x": "1120px",
                // "1250x": "1250px",
            },
            translate: {
                1.5: "6px",
            },
            animation: {
                ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
                float: "float 5s ease-in-out infinite alternate",
                spin: "spin 5s linear infinite",
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
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
