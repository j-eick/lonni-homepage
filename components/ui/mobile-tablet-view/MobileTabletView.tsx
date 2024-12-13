import Header from "./header/Header";

export default function MobileTablet() {
    return (
        <div className="h-full w-screen pt-14">
            <div className="h-full w-9/10 mx-auto my-0 flex flex-col">
                <Header className="flex w-full bb" />
                <main
                    className={`bg-red-300
                                grow`}
                >
                    main
                </main>
            </div>
        </div>
    );
}
