import React, {useEffect} from 'react'
import {Lobster, Open_Sans} from 'next/font/google';
import Navigation from '@/components/Navigation'
import Footer from "@/components/Footer";
import useDarkMode from 'use-dark-mode';
import {getCookie, hasCookie} from "cookies-next";
import {BackFullBodySVG, FrontFullBodySVG} from "@/components/BodySVG";

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

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

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
            {/*<div className={"absolute top-0 right-0 w-full h-full"}>*/}
            {/*    <img src={"/landingPageBG.png"} className={"w-full h-full object-cover opacity-50 dark:opacity-20"}></img>*/}
            {/*</div>*/}

            <header className={"flex flex-col items-center w-full h-screen"}>
                <Navigation dark={isDarkMode} setDark={toggleDarkMode}></Navigation>
                <div className={"flex flex-col h-full w-full p-8"}>
                    <div className={"w-full h-full flex flex-row"}>
                        <div className={"h-full w-1/4"}>
                            <span className="mb-4 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Pectoralis Major</span>
                            <div className={"mb-4 border-cyan-accent border-1 flex flex-col p-3 bg-neutral-500 bg-opacity-5 rounded-md"}>
                                <span>The pectoral muscles are large, fan shaped muscles that reside on either side of the upper chest. Both muscles have two heads, the clavicular, and the sternocostal.</span>
                            </div>
                        </div>
                        <div className={"h-full w-1/2 flex flex-row items-center justify-center p-4"}>
                                <FrontFullBodySVG big={true}/>
                                <BackFullBodySVG big={true}/>
                        </div>
                        <div className={"h-full w-1/4 p-4"}>
                            <span className="mb-4 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Information</span>
                            <div className={"border-cyan-accent border-1 rounded-md p-4 flex flex-col mb-12"}>
                                <span className="mb-4 inline-block text-2xl sm:text-2xl font-bold text-slate-900 tracking-tight dark:text-slate-50 partial-bottom-border text-center">Location</span>
                                <span className={"indent-4"}>
                                    The pectoralis major is a large muscle located in the chest region of the body. It spans from the sternum (breastbone), clavicle (collarbone), and the upper ribs to the humerus (upper arm bone). It covers a significant portion of the anterior chest and is easily visible in well-developed individuals.
                                </span>
                            </div>
                            <div className={"border-cyan-accent border-1 rounded-md p-4 flex flex-col"}>
                                <span className="mb-4 inline-block text-2xl sm:text-2xl font-bold text-slate-900 tracking-tight dark:text-slate-50 partial-bottom-border text-center">Function</span>
                                <span className={"indent-4"}>
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