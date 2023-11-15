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
import {loginUser} from "@/components/Authentication";
import Head from 'next/head';

export default function Page({ title, description="", markdown="", activeTopic }) {
    const router = useRouter();
    const [windowWidth, setWindowWidth] = useState(1024);
    const [location, setLocation] = useState("Location");

    const [keys, setKeys] = useState([]);
    const [content, setContent] = useState([]);

    const {value: isDarkMode, toggle: toggleDarkMode} = useDarkMode();
    const user = loginUser();

    scrollPageToContent(router.asPath.substring(router.asPath.indexOf("#") === -1 ? router.asPath.length : router.asPath.indexOf("#") + 1));

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    useEffect(() => {
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
                                if (!keys.includes(subsubsubtopic.href)) keys.push(subsubsubtopic.href);
                                content.push(subsubsubtopic.title);
                            });
                            return;
                        }
                        if (!keys.includes(subsubtopic.href)) keys.push(subsubtopic.href);
                        content.push(subsubtopic.title);
                    });
                    return
                }
                if (!keys.includes(subtopic.href)) keys.push(subtopic.href);
                content.push(subtopic.title);
            });
        });

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [router.asPath]);

    const index = 0;

    return (
        <div className={"flex flex-col min-h-screen bg-gray-50 dark:bg-neutral-900 text-slate-900 dark:text-slate-200 items-center "}> {/*  + openSans.className */}
            {/*<div className={"absolute top-0 right-0 w-full h-full z-10"}>*/}
            {/*    <img src={"/images/backgrounds/contentBG.png"} className={"w-full h-full object-cover opacity-20 dark:opacity-10"} alt={"background"}></img>*/}
            {/*</div>*/}
            <Navigation user={user} progressBar={true}></Navigation>

            <div className="flex flex-row justify-around max-w-screen-4xl md:px-6 my-8 z-20 mx-auto min-[1350px]:pr-[20rem]">
                {windowWidth >= 1024 ? <Sidebar activeTopic={activeTopic}></Sidebar> : <></>}
                <div className={"px-6 sm:px-9 flex flex-col w-full h-full lg:ml-[21rem] xl:ml-[24rem]"}>
                    {/* Page Header */}
                    <div className="w-full max-w-5xl flex-col">
                        <div className="flex flex-col mb-8">
                            <span className="text-cyan-accent mb-1 text-lg lg:text-xl font-semibold">{location}</span>
                            <h1 className="mb-10 inline-block text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight dark:text-slate-50 text-left">{title}</h1>
                            <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md text-left sm:text-justify"}>
                                <span>
                                    <Markdown components={useDescriptionComponents()}>{description}</Markdown>
                                </span>
                            </div>
                        </div>
                        <div className={"text-slate-700 dark:text-slate-300"}>
                            {markdown !== "" && <MDXRemote components={useMDXComponents()} {...markdown} />}
                        </div>
                    </div>
                    <div className={"w-full flex justify-around mt-4"}>
                        <button onClick={() => {
                            if (index > 0)
                                router.push(keys[index - 1]);
                        }}
                                className={(keys.indexOf(activeTopic) > 0 ? "bg-cyan-accent hover:bg-cyan-accent-light " : "bg-gray-700 hover:bg-gray-600 ") + "transition-all hover:shadow-button ease-in duration-200 hover:scale-105 w-12 h-12 rounded-full text-white flex items-center justify-center"}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <button onClick={() => {
                            if (keys.indexOf(activeTopic) < keys.length - 1)
                                router.push(keys[keys.indexOf(activeTopic) + 1]);
                        }} className={(keys.indexOf(activeTopic) < keys.length-1 ? "bg-cyan-accent hover:bg-cyan-accent-light " : "bg-gray-700 hover:bg-gray-600 ") + "px-3 transition-all hover:shadow-button ease-in duration-200 hover:scale-105 h-12 rounded-full text-white flex items-center justify-center"}>
                            {/* TODO IMPLEMENT THIS <span className={"ml-1 min-[424px]:text-lg text-base"}>{content[keys.indexOf(activeTopic) + 1]}</span>*/}
                            <svg className="w-6 h-6 -scale-x-100 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

export async function generateMetadata({ title, description="", markdown="", activeTopic }, parent) {
    return {
        metadataBase: new URL("https://www.wavelength.fit" + activeTopic),
        title: "Wavelength | " + title,
        description: description,
        keywords: "weightlifting, muscles, muscle functions, muscle locations",
    }
}

export async function getServerSideProps(context) {
    const root = process.cwd();

    const route = "/" + context.query.slug.join("/");

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
                activeTopic: route,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
}