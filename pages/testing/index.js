import Navigation from "@/components/Navigation";
import React, {useEffect} from "react";
import useDarkMode from "use-dark-mode";
import {getCookie, hasCookie} from "cookies-next";
import {useLoaded} from "@/components/LoadedHook";

export default function Testing() {
    const {value: isDarkMode, toggle: toggleDarkMode} = useDarkMode();
    const pageLoaded = useLoaded();

    const [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        setLoaded(true);

        if (!hasCookie("accessToken") || !hasCookie("id"))
            return;

        const loadUserData = async () => {
            const token = getCookie("accessToken");
            const id = getCookie("id");

            if (token && id) {
                const response = await fetch('/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify({id: id, accessToken: token}),
                }).then(res => {
                    if (res.ok || res.status !== 403) {
                        res.json().then(json => {
                            console.log(json);
                        });

                        return;
                    }

                    // error, do whatever to signal wrong information
                    console.log("error")
                });
            }
            console.log("token: " + token);
            console.log("id: " + id);
        };

        loadUserData();

    }, [isDarkMode]);

    return (
        <div className={`flex flex-col min-h-screen text-slate-900 dark:text-slate-50 justify-center items-center bg-white dark:bg-neutral-900 `}> {/*  + openSans.className */}
            {/*<div className={"absolute top-0 right-0 w-full h-full"}>*/}
            {/*    {loaded && (*/}
            {/*        <img src={isDarkMode ? "/images/backgrounds/landingPageGym.jpg" : "/images/backgrounds/lplmbg.jpg"} className={"w-full h-full object-cover dark:opacity-60"} alt={""}></img>*/}
            {/*    )}*/}
            {/*</div>*/}

            <header className={"flex flex-col items-center w-full h-screen bg-gray-50 dark:bg-neutral-900"}>
                <Navigation dark={isDarkMode} setDark={toggleDarkMode}></Navigation>

                <section className="pt-12">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="px-6 text-lg text-gray-600 dark:text-gray-400 font-inter">A science based approach to building muscle, losing fat, and getting stronger, arranged to be understood and accessible by all.</h1>
                            <p className="mt-5 text-4xl min-[412px]:text-5xl font-bold leading-tight text-gray-900 dark:text-slate-50 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                                Transform your physique with
                                <span className="ml-3 relative inline-flex">
                                    <span className="bg-cyan-accent blur-lg filter opacity-30 dark:hidden w-full h-full absolute inset-0"></span> {/* bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] */}
                                    <span className={"relative " + (isDarkMode ? "uline" : "")}> expert guidance </span>
                                </span>
                            </p>

                            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                                <a href="/getting-started/introduction"
                                    title=""
                                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 dark:bg-cyan-accent dark:hover:bg-cyan-accent-light border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button">
                                    Build your physique
                                </a>

                                {/*<a href="#"*/}
                                {/*    title=""*/}
                                {/*    className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"*/}
                                {/*    role="button">*/}
                                {/*    <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">*/}
                                {/*        <path*/}
                                {/*            d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"*/}
                                {/*            stroke-width="2"*/}
                                {/*            stroke-miterlimit="10"*/}
                                {/*            stroke-linecap="round"*/}
                                {/*            stroke-linejoin="round"*/}
                                {/*        />*/}
                                {/*    </svg>*/}
                                {/*    Watch free demo*/}
                                {/*</a>*/}
                            </div>

                            <p className="mt-8 text-base text-gray-500 dark:text-gray-400 font-inter">Completely Free · No sign-up required</p>
                        </div>
                    </div>

                    <div className="pb-12 bg-gray-50 dark:bg-neutral-900">
                        <div className="relative">
                            <div className="absolute inset-0 h-2/3 bg-gray-50 dark:bg-neutral-900"></div>
                            <div className="relative mx-auto">
                                <div className="lg:max-w-6xl lg:mx-auto">
                                    <img className="transform scale-110" src={isDarkMode && pageLoaded ? "/images/landingPageIllustrationDark.png" :"/images/landingPageIllustration.png"} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}