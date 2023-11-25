import React, {useEffect} from 'react'
import {Lobster, Open_Sans} from 'next/font/google';
import Navigation from '@/components/primary/Navigation'
import useDarkMode from 'use-dark-mode';
import {getCookie, hasCookie} from "cookies-next";
import {BackFullBodySVG, FrontFullBodySVG} from "@/components/primary/BodySVG";
import {loginUser} from "@/components/backend/Authentication";
import Head from 'next/head';

const lobster = Lobster({
    variable: '--font-lobster',
    weight: '400',
    subsets: ['latin'],
    display: 'auto',
})

const openSans = Open_Sans({
    variable: '--font-open-sans',
    weight: '400',
    subsets: ['latin'],
    display: 'auto',
})

export default function Layout() {
    const {value: isDarkMode, toggle: toggleDarkMode} = useDarkMode();
    const user = loginUser();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // useEffect(() => {
    //     // Select all text elements on the page
    //     const textElements = document.querySelectorAll('h1, h2');
    //
    //     // Loop through each text element
    //     textElements.forEach((element) => {
    //         ScrambleElement(element, false, true, 750);
    //     });
    // }, []);

    return (
        <div className={`flex flex-col min-h-screen text-slate-900 dark:text-slate-50 justify-center items-center bg-white dark:bg-neutral-900 ` + openSans.className}>
            <Head>
                <link rel="canonical" href={"https://www.wavelength.fit/demo-muscles"} />
            </Head>

            <div className={"absolute top-0 right-0 w-full h-full z-10"}>
                <img src={"/images/backgrounds/landingPageBG.png"} className={"w-full h-full object-cover opacity-50 dark:opacity-20"}></img>
            </div>

            <header className={"flex flex-col items-center w-full h-screen z-20"}>
                <Navigation user={user}></Navigation>
                <div className={"flex flex-col h-full w-full p-8"}>
                    <div className={"w-full h-full flex flex-row"}>
                        <div className={"h-full w-1/4"}>
                            <span className="mb-6 inline-block text-2xl sm:text-6xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Pectoralis Major</span>
                            <div className={"mb-6 text-lg flex flex-col p-3 bg-neutral-500 bg-opacity-5 rounded-md border-1 border-cyan-accent"}>
                                <span>The pectoral muscles are large, fan shaped muscles that reside on either side of the upper chest. Both muscles have two heads, the clavicular, and the sternocostal.</span>
                            </div>
                            <span className="mb-4 inline-block text-2xl sm:text-5xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Exercises</span>
                            <div className={"grid grid-cols-2 gap-4"}>
                                <div className={"rounded-md p-4 flex flex-col bg-neutral-500 bg-opacity-5 w-full transition-all duration-200 hover:cursor-pointer hover:shadow-button"}>
                                    <span className="mb-4 inline-block text-2xl sm:text-2xl font-bold text-slate-900 tracking-tight dark:text-slate-50 partial-bottom-border text-center">Bench Press</span>
                                    <img src={"/images/temporary/exampleBenchPress.png"} className={"w-full h-full aspect-square rounded-md"}></img>
                                </div>

                                <div className={"rounded-md p-4 flex flex-col bg-neutral-500 bg-opacity-5 w-full transition-all duration-200 hover:cursor-pointer hover:shadow-button"}>
                                    <span className="mb-4 inline-block text-2xl sm:text-2xl font-bold text-slate-900 tracking-tight dark:text-slate-50 partial-bottom-border text-center">Chest Fly</span>
                                    <img src={"/images/temporary/exampleChestFly.png"} className={"w-full h-full aspect-square rounded-md"}></img>
                                </div>

                                <div className={"rounded-md p-4 flex flex-col bg-neutral-500 bg-opacity-5 w-full transition-all duration-200 hover:cursor-pointer hover:shadow-button"}>
                                    <span className="mb-4 inline-block text-2xl sm:text-2xl font-bold text-slate-900 tracking-tight dark:text-slate-50 partial-bottom-border text-center">Cable Crossover</span>
                                    <img src={"/images/temporary/exampleCableFly.png"} className={"w-full h-full aspect-square rounded-md"}></img>
                                </div>
                            </div>
                        </div>
                        <div className={"h-full w-1/2 flex flex-row items-center justify-center p-4"}>
                                <FrontFullBodySVG highlighted={"pecs"} big={true}/>
                                <BackFullBodySVG big={true}/>
                        </div>
                        <div className={"h-full w-1/4 p-4"}>
                            <span className="mb-4 inline-block text-2xl sm:text-5xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Information</span>
                            <div className={"rounded-md p-4 flex flex-col bg-neutral-500 bg-opacity-5 mb-12"}>
                                <span className="mb-4 inline-block text-2xl sm:text-2xl font-bold text-slate-900 tracking-tight dark:text-slate-50 partial-bottom-border text-center">Location</span>
                                <span className={"indent-4 text-lg"}>
                                    The pectoralis major is a large muscle located in the chest region of the body. It spans from the sternum (breastbone), clavicle (collarbone), and the upper ribs to the humerus (upper arm bone). It covers a significant portion of the anterior chest and is easily visible in well-developed individuals.
                                </span>
                            </div>
                            <div className={"rounded-md p-4 flex flex-col bg-neutral-500 bg-opacity-5"}>
                                <span className="mb-4 inline-block text-2xl sm:text-2xl font-bold text-slate-900 tracking-tight dark:text-slate-50 partial-bottom-border text-center">Function</span>
                                <span className={"indent-4 text-lg"}>
                                    The pectoralis major is a muscle in the chest that has several important functions. Its main function is to pull the elbow towards the center of your body. This is the primary movement of things like pushups and bench presses. The pectoralis major plays a crucial role in various upper body movements, and strengthening it can improve strength and overall performance.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}