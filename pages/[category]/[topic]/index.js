import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react';
import Navigation from '@/components/Navigation'
import Sidebar, {HeaderListSidebar} from "@/components/Sidebar";
import Footer from "@/components/Footer";
import {scroll} from "@/components/ContentScroll";

import fs from 'fs';
import path from 'path';
import topics from "@/public/content.json";
import InformationBlock, {WarningBlock} from "@/components/InformationBlocks";
import useDarkMode from "use-dark-mode";
import { EntireBodyMap } from '@/components/BodySVG';

export default function Page({headers, title, description, jsx}) {
    const router = useRouter();
    const [windowWidth, setWindowWidth] = useState(640);
    const [sidebar, setSidebar] = useState(null);
    const [processedJSX, setProcessedJSX] = useState(null);
    const [location, setLocation] = useState("");
    const [keys, setKeys] = useState([]);
    const {value: isDarkMode, toggle: toggleDarkMode} = useDarkMode();

    const activeTopic = router.asPath.substring(0, router.asPath.indexOf("#") === -1 ? router.asPath.length : router.asPath.indexOf("#"));

    const handleLinkClick = (link) => {
        router.push({
            pathname: link.split("#")[0],
            hash: link.split("#")[1]
        }).then(() => scroll());
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    useEffect(() => {
        setSidebar(<Sidebar></Sidebar>)
        setWindowWidth(window.innerWidth);

        setProcessedJSX(jsx.map((item, i) => {
            if (item.type === "info") {

            }
            if (item.type === "warning") {
                
            }
            switch(item.type) {
                case "info":
                    return <InformationBlock
                        title={item.title}
                        content={item.content}
                        key={i}></InformationBlock>
                case "warning":
                    return <WarningBlock
                        title={item.title}
                        content={item.content}
                        key={i}></WarningBlock>
                case "EntireBodySvg":
                    return <EntireBodyMap></EntireBodyMap>
                default:
                    return React.createElement(item.type,
                        {key: i, id: item.id ? item.id : "", className: item.class},
                        item.JSX ? item.JSX.map((innerItem, j) => React.createElement(innerItem.type, {
                            key: j,
                            onClick: innerItem.url ? () => handleLinkClick(innerItem.url) : () => {
                            },
                            className: innerItem.class
                        }, innerItem.content)) : item.content);
            }
        }));

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

        scroll();

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [jsx]);

    return (
        <div
            className={"flex flex-col min-h-screen bg-gray-50 dark:bg-neutral-900 text-slate-900 dark:text-slate-200 items-center "}> {/*  + openSans.className */}
            {/*<div className={"absolute top-0 right-0 w-full h-full z-10"}>*/}
            {/*    <img src={"/images/backgrounds/contentBG.png"} className={"w-full h-full object-cover opacity-20 dark:opacity-10"} alt={"background"}></img>*/}
            {/*</div>*/}
            <Navigation progressBar={true}></Navigation>

            {sidebar ?
                <div className="flex flex-row justify-around max-w-screen-4xl md:px-6 my-8 z-20 mx-auto xl:pr-[20rem]">
                    {windowWidth >= 1024 ? sidebar : <></>}
                    <div onScrollCapture={() => handleScroll()}
                         className={"px-6 sm:px-9 flex flex-col w-full h-full lg:ml-[24rem]"}>
                        {/* Page Header */}
                        <div className="w-full max-w-5xl flex-col">
                            <div className="flex flex-col mb-12">
                                <span className="text-cyan-accent mb-1 text-lg font-semibold">{location}</span>
                                <span className="mb-10 inline-block text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight dark:text-slate-50 text-left">{title}</span>
                                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md text-left sm:text-justify min-[424px]:text-lg text-md"}>
                                    <span>
                                      {description}
                                    </span>
                                </div>
                            </div>
                            <div className={"text-slate-700 dark:text-slate-300"}>
                                {
                                    processedJSX
                                }
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
                    {windowWidth >= 1024 ? <HeaderListSidebar headers={headers}></HeaderListSidebar> : <></>}
                </div> : <div className="main-grid lg:grid lg:gap-8 lg:grid-cols-3 max-w-screen-4xl h-screen md:px-6 my-8 z-20"></div>}
        </div>
    )
}

function analyzeMarkdown(modifiedLine, innerJSX) {
    let pieces = [];
    const loadLinkData = (link) => {
        let match = linkRegex.exec(link);
        const hyperlink = match[0]; // the entire hyperlink (e.g. [Google](/google/muscles))
        const text = match[1]; // the name of the link (e.g. Google)
        const url = match[2]; // the URL of the link (e.g. /google/muscles)
        const startIndex = match.index; // the starting index of the hyperlink in the original string
        const endIndex = startIndex + hyperlink.length; // the ending index of the hyperlink in the original string

        return {
            match,
            url,
            text,
            startIndex,
            endIndex
        }
    }

    while (modifiedLine.includes("**")) {
        const boldStart = modifiedLine.indexOf("**");
        const boldEnd = modifiedLine.indexOf("**", boldStart + 2);
        const bold = modifiedLine.substring(boldStart + 2, boldEnd);

        pieces.push({
            "type": "p",
            "class": "inline",
            "content": modifiedLine.substring(0, boldStart)
        });

        pieces.push({
            "type": "p",
            "class": "inline font-bold",
            "content": bold
        });

        modifiedLine = modifiedLine.substring(boldEnd + 2);
    }

    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    // first loop through existing pieces and search for links
    pieces.forEach((piece, i) => {
        if (piece.type !== "p") return;

        let linkIndex = i;

        while (piece.content.match(linkRegex)) {
            console.log("piece: " + piece.content)
            let linkData = loadLinkData(piece.content);

            pieces.splice(linkIndex, 1);

            pieces.splice(linkIndex, 0, {
                "type": "p",
                "class": "inline",
                "content": piece.content.substring(0, linkData.startIndex)
            });

            pieces.splice(linkIndex + 1, 0, {
                "type": "a",
                "class": "inline text-cyan-accent dark:text-link-text hover:cursor-pointer",
                "url": linkData.url,
                "content": linkData.text
            });

            piece.content = piece.content.substring(linkData.endIndex);

            // adjust index to account for the new link
            linkIndex += 2;
        }
    });

    while (modifiedLine.match(linkRegex)) {
        let linkData = loadLinkData(modifiedLine);

        pieces.push({
            "type": "p",
            "class": "inline",
            "content": modifiedLine.substring(0, linkData.startIndex)
        });

        pieces.push({
            "type": "a",
            "class": "inline text-cyan-accent dark:text-link-text hover:cursor-pointer",
            "url": linkData.url,
            "content": linkData.text
        });

        modifiedLine = modifiedLine.substring(linkData.endIndex);
    }

    return {
        pieces,
        modifiedLine
    };
}

export async function getServerSideProps(context) {
    const root = process.cwd();
    const directory = path.join(root, '/data/pages', context.query.category);

    try {
        // Use fs.promises.readFile to read the file asynchronously on the server
        const mdContents = await fs.promises.readFile(directory + '/' + context.query.topic + '.md', 'utf8');
        const lines = mdContents.split('\n');
        let jsx = []
        let headers = [];

        lines.forEach((line, i) => {
            let innerJSX = [];

            if (line.startsWith('# ')) {
                const level = line.match(/^#+/)[0].length;
                const text = line.replace(/^#+/, '').trim();

                if (level === 1) headers.push(text + ":" + text.replace(" ", "-").toLowerCase())

                jsx.push({
                    "type": "h" + level,
                    "id": text.replace(/ /g, '-').toLowerCase(),
                    "class": "min-[424px]:text-3xl text-2xl font-bold text-left flex items-center dark:text-slate-50 text-slate-900 mt-12",
                    "content": text
                });
                return;
            }

            if (line.startsWith('>EntireBodySvg')) {
                jsx.push({
                    "type": "EntireBodySvg",
                    "class": "",
                    "content": ""
                });
                return;
            }

            if (line.startsWith("> ")) {
                jsx.push({
                    "type": "info",
                    "class": "min-[424px]:text-lg text-md mb-6 text-left sm:text-justify",
                    "title": "Note",
                    "content": line.replace("> ", "")
                });
                return;
            }

            if (line.startsWith(">! ")) {
                jsx.push({
                    "type": "warning",
                    "class": "min-[424px]:text-lg text-md mb-6 text-left sm:text-justify",
                    "title": "Warning",
                    "content": line.replace(">! ", "")
                });
                return;
            }

            const {pieces, modifiedLine} = analyzeMarkdown(line, innerJSX);

            innerJSX = [...innerJSX, ...pieces];

            innerJSX.push({
                "type": "p",
                "class": "inline",
                "content": modifiedLine
            });

            jsx.push({
                "type": "div",
                "class": "min-[424px]:text-lg text-md mb-6 text-left sm:text-justify",
                "JSX": innerJSX
            });
        });

        const jsonContents = fs.readFileSync(directory + '/' + context.query.topic + '.json', 'utf-8');
        // Parse the JSON content into a JavaScript object
        const json = JSON.parse(jsonContents);

        return {
            props: {
                headers: headers,
                description: json.description,
                title: json.title,
                jsx: jsx,
            },
        };
    } catch (error) {
        console.error('Error reading file:', error);

        return {
            props: {
                headers: [],
                description: "",
                title: "An error occured, we are working on it :)",
                jsx: [],
            },
        };
    }
}