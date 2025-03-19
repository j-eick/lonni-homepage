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
                "header-mobile": "#c0d1e0",
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
            blur: {
                1: "1px",
                2: "2px",
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
                thumbnailLink:
                    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                thumbnailLink2: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                mainShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                asideShadow: "rgba(0, 0, 0, 0.3) 2px 0px 8px, rgba(140, 140, 140, 0.22) 0px 0px 20px",
                regular: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                "flat-central":
                    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                line: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                line2: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                flat: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                step: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                stepp: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                soft: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                softWhite:
                    "0 0px 50px rgba(255, 255, 255, 0.753), 0 0 50px rgba(255, 255, 255, 0.353), 0 0 50px rgba(255, 255, 255, 0.353), rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            },
            colors: {
                "color-primary": "var(--primary2)",
                "color-secondary": "var(--secondary)",
                "color-linkCard-text": "var(--bright)",
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
                creatoDisplay: "var(--font-creatoDisplay)",
                TA: "var(--font-TA-Fabricans-Thin)",
                TA_ExtraLight: "var(--font-TA-Fabricans-ExtraLight)",

                landingTitle: ["Calinastiya"],
                headerTitle: "var(--font-headerTitle)",
                navLink: "var(--font-secondary)",
                pageTitle: "Walkway SemiBold",
            },
            fontSize: {
                //--- FONT-SIZE ---//
                //-----Mobile
                //--------2xs:320px
                "size-mobile-2xs": "var(--step-15)",
                //-------- xs:375px
                "size-mobile-xs": "var(--step-15)",
                //-----Desktop
                "size-small": "var(--step--1)",
                "size-smaller": "var(--step--05)",
                "size-default": "var(--step-0)",
                //--------md:768px
                "size-desktop-md": "var(--step-1)",

                //--- HEADER-TITLE ---//
                //-----Mobile
                //--------2xs:320px
                "size-headerTitle-mobile-2xs": "clamp(30px, 9vw, 50px)",
                //-----Desktop
                "size-headerTitle": "85px",

                //--- HEADER-NAVIGATION-LINKS ---//
                //-----Mobile
                "size-mobile-navLinks": "var(--step-3)",
                "size-headerTitle-mobile": "clamp(1rem, 10vw, 2rem)",
                //-----Desktop
                //--------md:768px
                "size-navLink-small": "var(--step--05)",
                //--------lg:1024px
                "size-navLink-regular": "var(--step-0)",
                //--------2lg:1200px
                "size-navLink-bigger": "var(--step-05)",

                //--- PAGE-TITLE ---//
                //-----Mobile
                "size-firstLetterPagetitle-mobile": "var(--step-4)",
                "size-restPageTitle-mobile": "var(--step-2)",
                //-----Desktop
                "size-pageTitle": "var(--step-2)",
                "size-firstLetterPagetitle": "var(--step-3)",
                "size-regularTitle": "var(--step-2)",

                //--- PAGE-TITLE-SHADOW ---//
                //-----Mobile
                "size-firstLetterPagetitle-shadow-mobile": "var(--step-5)",
                "size-RestPageTitle-shadow-mobile": "var(--step-4)",
                //-----Desktop
                "size-firstLetterPagetitle-shadow": "var(--step-45)",
                "size-pageTitle-shadow": "var(--step-35)",

                //--- PROJECT-LINKS ---//
                //-----Desktop
                "size-project-title": "var(--step-025)",
                "size-project-description": "var(--step--075)",
                "projektSubtext-small": ".7em",
                "size-projektUrl": "var(--step-0)",
            },
            fontWeight: {
                max: "1000",
            },
            gap: {
                burgerMenu: "1.25vw",

                //---PROJECT-LINKS
                projectLinks: "clamp(20px, 3.5vw, 40px)",
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

                "mobile-header": "clamp(70px, 18vw, 90px)",
                "mobile-header-parent": "clamp(70px + 5px, 18vw + 2vw, 105px)",
                "marquee-banner": "clamp( 1.85rem, 2.75vw, 2.25rem)",

                //--- BURGER-MENU
                //-----Mobile
                "burger-canvas": "8vw",
                "burger-lineHeight": ".5vw",

                //--- PROFILE-IMAGE
                profileImage: "clamp(5rem, 35vw, 9rem)",

                //--- INFO-BOX
                //-----Mobile (padding top)
                "infobox-text": "clamp(40px, 7vw, 50px)",

                //--- UNTERRICHT-IMAGE
                // unterrichtImage: "clamp(3rem, 10vw, 9rem)",
            },
            lineHeight: {
                1: 1,
                1.2: 1.2,
                1.3: 1.3,
                1.4: 1.4,
                1.5: 1.5,
                2: 2,
                standardText: 1.8,
                regularText: "34px",
            },
            width: {
                // DESKTOP
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
                "responsive-photo": "clamp(300px, 35vw, 450px)",

                //--- TITLE
                //-----Mobile
                title: "clamp()",

                //--- KONTAKT-CARD
                "kontaktCard-desktop": "clamp(80%, 80%, 500px)",

                //--- BURGER-MENU
                //-----Mobile
                "burger-middleLine": "5vw",
                "burger-outerLine": "4vw",
                "burger-canvas": "8vw",

                //--- PROFILE-IMAGE
                profileImage: "clamp(5rem, 35vw, 9rem)",

                //--- UNTERRICHT-IMAGE
                //-----Mobile
                "unterrichtImage-min320": "clamp(10rem, 70vw, 400px)",
                //-----Desktop
                "unterrichtImage-min768": "clamp(5rem, 47.5vw, 350px)",
                "unterrichtImage-min1024": "clamp(5rem, 47.5vw, 400px)",

                //--- CAT-SILHOUETTE
                "catSilhuette-mobile": "clamp(120px, 45vw, 170px)",
                "catSilhuette-desktop": "clamp(120px, .75 * 45vw, 200px)",
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
                "canvas--1270px": "1150px",
            },
            padding: {
                1.5: "6px",
                2.5: "10px",

                //--- KONTAKT-CARD
                //-----Mobile
                mobile: "calc(1.2 * 8vw)",
            },
            scale: {
                "navLinks-selected": "1.15",
            },
            screens: {
                "mobile-topMargin": { max: "767px" },
                "2xs": "320px",
                "xss-320": "320px",
                xs: "375px",
                "xs-375": "375px",
                "2sm": "455px",
                "2sm-455": "455px",
                "sm-620": "620px",
                md: "768px",
                "md-768": "768px",
                "md2-855": "855px",
                "lg-1024": "1024px",
                "xl-1200": "1200px",
            },
            spacing: {
                "pageTitle-underline": "clamp(.5rem, 1.25vw, 1rem)",
                profilePhoto: "clamp(6rem, 20vw, 20rem)",
                catSilhouette: "clamp(-5vw, 3vw, -50px)",

                //--- CONTENT - MARGIN-TOP to header
                //-----Mobile
                marginToHeader: "clamp(70px, 18vw, 90px)",

                //--- CONTENT (Margin-Top)
                //-----Mobile
                "content_top-mobile": "clamp(100px, 30vw, 160px)",
                //-----Desktop
                "content_top-desktop": "clamp(50px, 5vw, 70px)",

                //--- CONTENT (Margin-Bottom)
                //-----Mobile
                "content_bottom-mobile": "clamp(60px, 20vw, 160px)",
                //-----Desktop
                "content_bottom-desktop": "clamp(60px, 10vw, 120px)",

                //--- PAGE-TITLE || marginBottom
                pageTitle: "clamp(12.5px, 1.75vw, 25px)",

                //--- MOBILE-TITLE
                //-----Lonni (top)
                "title-lonni-top": "clamp(10px, 1.5vw, 20px)",
                //-----Lonni (left)
                "title-lonni-left": "clamp(10px, 0px, 20px)",

                //-----Inman
                "title-inman-mobile": "clamp(10px, 1.5vw, 20px)",

                //--- INFO-BOX (padding top)
                infoBox: "clamp(10px, 4vw, 40px)",
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
                slowOpacityFadeout: "slowOpacityFadeout 0.5s ease-in-out forwards",
                // marquee: "marquee 10s linear infinite",
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
                slowOpacityFadeout: {
                    "0%": { opacity: 1 },
                    "100%": { opacity: 0.6 },
                },
                marquee: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
