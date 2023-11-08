import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react';
import Navigation from '@/components/Navigation'
import Sidebar, {HeaderListSidebar} from "@/components/Sidebar";
import Footer from "@/components/Footer";
import {useDescriptionComponents, useMDXComponents} from "@/mdx-components";

import fs from 'fs';
import path from 'path';
import topics from "@/public/content.json";
import useDarkMode from "use-dark-mode";
import Markdown from "react-markdown";
import {MDXRemote} from "next-mdx-remote";
import {serialize} from "next-mdx-remote/serialize";
import {scrollPageToContent} from "@/components/ContentScroll";

export default function Page({ headers, title, description="", markdown="" }) {
    const router = useRouter();
    const [windowWidth, setWindowWidth] = useState(640);
    const [sidebar, setSidebar] = useState(null);
    const [processedJSX, setProcessedJSX] = useState(null);
    const [location, setLocation] = useState("");
    const [keys, setKeys] = useState([]);
    const {value: isDarkMode, toggle: toggleDarkMode} = useDarkMode();

    const activeTopic = router.asPath.substring(0, router.asPath.indexOf("#") === -1 ? router.asPath.length : router.asPath.indexOf("#"));

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    scrollPageToContent(router.asPath.substring(router.asPath.indexOf("#") === -1 ? router.asPath.length : router.asPath.indexOf("#") + 1));

    useEffect(() => {
        setSidebar(<Sidebar></Sidebar>)
        setWindowWidth(window.innerWidth);

        topics.forEach((topic) => {
            topic.subtopics.forEach((subtopic) => {
                if (subtopic.href === activeTopic)
                    setLocation(topic.title);

                if (subtopic.subtopics) {
                    subtopic.subtopics.forEach((subsubtopic) => {
                        if (subsubtopic.href === activeTopic)
                            setLocation(topic.title + " • "
                                + (subtopic.showInLocation === undefined ? subtopic.title : subtopic.showInLocation ? subtopic.title : ""));

                        if (subsubtopic.subtopics) {
                            subsubtopic.subtopics.forEach((subsubsubtopic) => {
                                if (subsubsubtopic.href === activeTopic)
                                    setLocation(
                                        topic.title + " • "
                                        + (subtopic.showInLocation === undefined ? subtopic.title : subtopic.showInLocation ? " • " + subtopic.title : "")
                                        + (subsubtopic.showInLocation === undefined ? subsubtopic.title : subsubtopic.showInLocation ? " • " + subsubtopic.title : "")
                                    );

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

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // document.body.innerHTML += '<script type="text/javascript">amzn_assoc_tracking_id = "wavelengthfit-20";amzn_assoc_ad_mode = "manual";amzn_assoc_ad_type = "smart";amzn_assoc_marketplace = "amazon";amzn_assoc_region = "US";amzn_assoc_design = "enhanced_links";amzn_assoc_asins = "B099KRBL53";amzn_assoc_placement = "adunit";amzn_assoc_linkid = "e0116679c401973183af6b6a6aa3bf06";</script><script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>';

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [router.asPath]);
    //
    // ContentScroll();

    return (
        <div
            className={"flex flex-col min-h-screen bg-gray-50 dark:bg-neutral-900 text-slate-900 dark:text-slate-200 items-center "}> {/*  + openSans.className */}
            {/*<div className={"absolute top-0 right-0 w-full h-full z-10"}>*/}
            {/*    <img src={"/images/backgrounds/contentBG.png"} className={"w-full h-full object-cover opacity-20 dark:opacity-10"} alt={"background"}></img>*/}
            {/*</div>*/}
            <Navigation progressBar={true}></Navigation>


            <div className="flex flex-row justify-around max-w-screen-4xl md:px-6 my-8 z-20 mx-auto min-[1350px]:pr-[20rem]">
                {windowWidth >= 1024 ? sidebar : <></>}
                <div className={"px-6 sm:px-9 flex flex-col w-full h-full lg:ml-[21rem] xl:ml-[24rem]"}>
                    {/* Page Header */}
                    <div className="w-full max-w-5xl flex-col">
                        <div className="flex flex-col mb-8">
                            <span className="text-cyan-accent mb-1 text-lg lg:text-xl font-semibold">{location}</span>
                            <span className="mb-10 inline-block text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight dark:text-slate-50 text-left">{title}</span>
                            <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md text-left sm:text-justify min-[424px]:text-lg text-md"}>
                                <span>
                                    <Markdown components={useDescriptionComponents()}>{description}</Markdown>
                                </span>
                            </div>
                        </div>
                        <div className={"text-slate-700 dark:text-slate-300"}>
                            <MDXRemote components={useMDXComponents()} {...markdown} />
                        </div>
                    </div>
                    <div className={"w-full flex justify-around mt-4"}>
                        <button onClick={() => {
                            const url = new URL(window.location.href);

                            const index = keys.indexOf(url.pathname);
                            if (index > 0)
                                router.push(keys[index - 1]);
                        }}
                                className="transition-all hover:shadow-button ease-in duration-200 hover:scale-105 w-12 h-12 rounded-full bg-cyan-accent text-white flex items-center justify-center hover:bg-cyan-accent-light focus:outline-none focus:bg-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <button onClick={() => {
                            const url = new URL(window.location.href);

                            const index = keys.indexOf(url.pathname);
                            if (index < keys.length - 1)
                                router.push(keys[index + 1]);
                        }}
                                className="transition-all hover:shadow-button ease-in duration-200 hover:scale-105 w-12 h-12 rounded-full bg-cyan-accent text-white flex items-center justify-center hover:bg-cyan-accent-light focus:outline-none focus:bg-gray-700">
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
export async function getServerSideProps(context) {
    const root = process.cwd();

    const category = context.query.slug[0];
    const topic = context.query.slug[1];
    const subtopic = context.query.slug[2] ? context.query.slug[2] : "";
    const subsubtopic = context.query.slug[3] ? context.query.slug[3] : "";

    const directory = path.join(root, '/data/pages', category);

    try {
        // Use fs.promises.readFile to read the file asynchronously on the server
        const mdContents = await fs.promises.readFile(directory + '/' + topic + (subtopic === "" ? "" : "/" + subtopic) + (subsubtopic === "" ? "" : "/" + subsubtopic) + '.mdx', 'utf8');

        const mdxSource = await serialize(mdContents)

        const jsonContents = fs.readFileSync(directory + '/' + topic + (subtopic === "" ? "" : "/" + subtopic) + (subsubtopic === "" ? "" : "/" + subsubtopic) + '.json', 'utf-8');
        // Parse the JSON content into a JavaScript object
        const json = JSON.parse(jsonContents);

        return {
            props: {
                description: json.description,
                title: json.title,
                markdown: mdxSource,
            },
        };
    } catch (error) {
        console.error('Error reading file:', error);

        return {
            props: {
                description: "",
                title: "An error occured, we are working on it :)",
                markdown:""
            },
        };
    }
}