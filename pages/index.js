import React, {useEffect} from 'react'
import {Lobster, Open_Sans} from 'next/font/google';
import Navigation from '@/components/Navigation'
import Footer from "@/components/Footer";
import useDarkMode from 'use-dark-mode';
import {getCookieValue} from "@/lib/util";
import {getCookie, hasCookie} from "cookies-next";

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
            <div className={"absolute top-0 right-0 w-full h-full"}>
                <img src={"/landingPageBG.png"} className={"w-full h-full object-cover opacity-50 dark:opacity-20"}></img>
            </div>

            <header className={"flex flex-col items-center w-full h-screen"}>
                <Navigation dark={isDarkMode} setDark={toggleDarkMode}></Navigation>
                <div className={"flex flex-col h-full w-full"}>
                    <div className={"flex flex-row items-center w-full h-full z-10"}>
                        <div className="relative md:w-2/5 lg:w-3/5 pl-32 flex justify-start flex-col h-full">
                            <h1 className={"xl:px-3 xl:pt-24 text-2xl min-[1200px]:text-4xl min-[1280px]:text-8xl max-[1506px]:text-8xl 2xl:text-9xl max-w-4xl pb-10 " +


                                "text-slate-900 font-extrabold tracking-tight text-left dark:text-white text-header-gradient " + lobster.className}>Transform
                                your physique with expert guidance.</h1>
                            <p className="text-lg lg:text-xl xl:text-3xl text-slate-600 text-left max-w-3xl dark:text-slate-400 ml-1">A
                                science based approach to <a className={"text-cyan-accent"}>building muscle</a>, <a
                                    className={"text-cyan-accent"}>losing fat</a>, and getting <a
                                    className={"text-cyan-accent"}>stronger</a>, arranged to be understood and accessible by
                                all.</p>

                            <div className="mt-10 flex flex-row space-x-6 text-md h-12 ml-1">
                                <a
                                    className="transition-all hover:shadow-button ease-in duration-200 hover:scale-105 rounded-full bg-slate-900 hover:bg-slate-700 dark:bg-cyan-accent hover:dark:bg-cyan-accent-light py-5 pl-5 pr-2 w-full sm:w-auto flex items-center justify-between text-white font-semibold focus:outline-none"
                                    href="/getting-started/introduction">Get started<div className={"ml-2 rounded-full flex items-center justify-center w-10 h-10 bg-cyan-accent dark:bg-cyan-accent-dark"}>
                                    <svg className="w-6 h-6 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </div></a>
                            </div>
                        </div>
                        <div className={"relative w-1/3 h-full flex flex-col items-center"}>
                            <img className={"xl:w-full h-min aspect-square object-cover landing-img-shadow"} src={"/manRunningLogoV2.png"}  alt={"Wavelength"}></img>
                            {/*<div className={"h-full max-w-3xl mt-8"}>*/}
                            {/*    <div className={"py-2 xl:py-8 px-4 mx-auto text-xl lg:text-2xl " +*/}


                            {/*        "flex flex-col rounded-lg shadow-button dark:shadow-quote w-full text-slate-600 dark:text-slate-50 bg-white dark:bg-neutral-900 bg-opacity-0 dark:bg-opacity-40 dark:backdrop-blur-xl slant"}>*/}
                            {/*        <div className={"text-base lg:text-lg 2xl:text-xl pb-4 border-b-1 border-cyan-accent"}>Many prioritize impressing others over self-improvement, building ever fancier facades...</div>*/}
                            {/*        <div className={"text-base lg:text-lg 2xl:text-xl pt-4"}>Until, inevitably, these facades <strong className={"text-cyan-accent"}>crumble</strong>. But <strong className={"text-cyan-accent"}>you</strong> have the power to break free from this cycle. Choose self-improvement over fleeting impressions and watch yourself rise above the rest.</div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

            </header>

            <section className="text-center max-w-7xl px-8 pt-10 sm:pt-15 md:pt-20 pb-14 border-t-2 dark:border-neutral-700"><h2
                className="text-slate-900 text-4xl font-extrabold sm:text-5xl dark:text-white">Understanding the
                mechanics behind working out significantly increases effectiveness.</h2>
                <figure>
                    <blockquote><p className="mt-6 max-w-3xl mx-auto text-lg lg:text-xl text-slate-900 dark:text-slate-500">During my
                        fitness journey, I realized the importance of understanding the human anatomy and the underlying
                        science of muscle <a className={"text-cyan-accent"}>hypertrophy</a>. As my understanding of these
                        concepts grew, so did my <a className={"text-cyan-accent"}>efficiency</a> and <a
                            className={"text-cyan-accent"}>effectiveness</a> in the gym. By comprehending the precise
                        mechanisms behind muscle development and how to optimize them, I found that my workouts became
                        more <a className={"text-cyan-accent"}>gratifying</a> and <a
                            className={"text-cyan-accent"}>productive</a>.</p></blockquote>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left"><img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" className="w-14 h-14 rounded-full"
                        loading="lazy" decoding="async"></img>
                        <div>
                            <div className="font-bold text-neutral-900 dark:text-white text-lg">Co-Founder</div>
                            <div className="mt-0.5 text-lg leading-6 text-slate-900 dark:text-slate-500">Co-Founder of Surge Strength</div>
                        </div>
                    </figcaption>
                </figure>
            </section>

            <Footer darkBG={"cyan-accent"}></Footer>
        </div>
    )
}