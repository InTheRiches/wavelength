import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar, { HeaderListSidebar } from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import ContentScroll, {percentScrolled, scroll} from "@/components/ContentScroll";
import useDarkMode from 'use-dark-mode';
import topics from '/public/content.json';
import MobileSidebar, {MobileHeaderListSidebar} from "@/components/MobileSidebar";

export default function ContentPage({ title, description, content }) {
    const [windowWidth, setWindowWidth] = useState(640);
    const [sidebar, setSidebar] = useState(null);

    const router = useRouter();
    const activeTopic = router.pathname;

    const [location, setLocation] = useState("");
    const [keys, setKeys] = useState([]);

    const { value: isDarkMode, toggle: toggleDarkMode } = useDarkMode();

    useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
          document.body.classList.add('d');
        } else {
          document.documentElement.classList.remove('dark');
          document.body.classList.remove('d');
        }

        // find the title of the current topic's parents and index all topics
        topics.forEach((topic) => {
            topic.subtopics.forEach((subtopic) => {
                if (subtopic.href === activeTopic) {
                    setLocation(topic.title + " • " + subtopic.title);
                }

                if (subtopic.subtopics) {
                    subtopic.subtopics.forEach((subsubtopic) => {
                        if (subsubtopic.href === activeTopic) {
                            setLocation(topic.title + " • " + subtopic.title + " • " + subsubtopic.title);
                        }

                        if (subsubtopic.subtopics) {
                            subsubtopic.subtopics.forEach((subsubsubtopic) => {
                                if (subsubsubtopic.href === activeTopic) {
                                    setLocation(topic.title + " • " + (subtopic.showInLocation === undefined ? subtopic.title + " • " : subtopic.showInLocation ? subtopic.title + " • " : "") + (subsubtopic.showInLocation === undefined ? subsubtopic.title + " • " : subsubtopic.showInLocation ? subsubtopic.title + " • " : "") + subsubsubtopic.title);
                                }

                                keys.push(subsubsubtopic.href)
                            });
                            return;
                        }
                        keys.push(subsubtopic.href)
                    });
                    return
                }
                keys.push(subtopic.href);
            });
        });

        setWindowWidth(window.innerWidth);

        setSidebar(<Sidebar></Sidebar>)

        console.log("setting Sidebar")

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isDarkMode]);

    const handleScroll = () => {
        let scrolled = window.scrollY;

        const nav = document.getElementById('navigation');
        const navElements = document.getElementsByClassName('text-3xl font-bold flex items-center dark:text-slate-50');

        let currentScrolledSection = 0;

        for (let i = 0; i < navElements.length; i++) {
            let section = navElements[i];

            const navHeight = nav.getBoundingClientRect().height;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;

            if (window.scrollY > sectionTop) {
                currentScrolledSection = i;
            }
            else {
                break;
            }
        }
    };
    //
    // ContentScroll(sidebar);

    return (
        <div className={"flex flex-col min-h-screen bg-gray-50 dark:bg-neutral-900 text-slate-900 dark:text-slate-200 items-center "}> {/*  + openSans.className */}
            {/*<div className={"absolute top-0 right-0 w-full h-full z-10"}>*/}
            {/*    <img src={"/images/backgrounds/contentBG.png"} className={"w-full h-full object-cover opacity-20 dark:opacity-10"} alt={"background"}></img>*/}
            {/*</div>*/}
            <Navigation progressBar={true}></Navigation>

            <div className="flex flex-row justify-around max-w-screen-4xl md:px-6 my-8 z-20 mx-auto xl:pr-[20rem]">
                {windowWidth >= 1024 && sidebar ? sidebar : <></>}
                <div onScrollCapture={() => handleScroll()} className={"px-6 sm:px-9 flex flex-col w-full h-full lg:ml-[24rem]"}>
                    {/* Page Header */}
                    <div className="w-full max-w-5xl flex-col">
                        <div className="flex flex-col mb-12">
                            <span className="text-cyan-accent mb-1 text-lg font-semibold">{location}</span>
                            <span className="mb-10 inline-block text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight dark:text-slate-50 text-left">{title}</span>
                            {description && <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md text-left sm:text-justify min-[424px]:text-lg text-md"}>
                                {description}
                            </div>}
                        </div>
                        {content}
                    </div>
                    <div className={"w-full flex justify-around mt-4"}>
                        <button onClick={() => {
                                const url = new URL(window.location.href);

                                const index = keys.indexOf(url.pathname);
                                if (index > 0)
                                    router.push(keys[index - 1]);
                            }} className="transition-all hover:shadow-button ease-in duration-200 hover:scale-105 w-12 h-12 rounded-full bg-cyan-accent text-white flex items-center justify-center hover:bg-cyan-accent-light focus:outline-none focus:bg-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <button onClick={() => {
                                const url = new URL(window.location.href);

                                const index = keys.indexOf(url.pathname);
                                if (index < keys.length - 1)
                                    router.push(keys[index + 1]);
                            }} className="transition-all hover:shadow-button ease-in duration-200 hover:scale-105 w-12 h-12 rounded-full bg-cyan-accent text-white flex items-center justify-center hover:bg-cyan-accent-light focus:outline-none focus:bg-gray-700">
                            <svg className="w-6 h-6 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                    </div>
                    <Footer></Footer>
                </div>
                {windowWidth >= 1024 ? <HeaderListSidebar></HeaderListSidebar> : <></>}
            </div>
        </div>
    )
}
