import React, {useEffect, useState, useCallback} from 'react';
import {useRouter} from "next/router";
import topics from '/public/content.json';
import Link from "next/link";
import Collapsible from "@/components/Collapsible";
import path from "path";
import {scrollPageToContent} from "@/components/ContentScroll";

let key = 0;
const getNextKey = () => {
    key = key + 1;
    return key
};

function Sidebar ({ activeTopic }) {
    return (
        <div className="flex flex-col max-w-1/5">
            <div id="sidebar" style={{height: "calc(100vh - 72px)"}}
                 className={`sidebar-taper pb-8 fixed w-[20rem] overflow-y-auto z-10 px-4 mt-15 pr-4 text-neutral-900 dark:text-slate-50 hidden sm:flex flex-col`}>
                {/*<div className="w-full bg-white/50 supports-backdrop-blur:bg-cyan-accent/95 backdrop-blur dark:bg-neutral-900/50 sticky top-0 z-10 mb-6">*/}
                {/*    <button className="w-full lg:flex border-1 border-slate-200 hover:border-cyan-accent border-opacity-50 hover:border-opacity-75 items-center text-sm leading-6 text-neutral-700 dark:text-slate-300 hover:dark:text-slate-50 hover:text-neutral-900 rounded-md shadow-sm py-1.5 pl-2 pr-3 transition-all duration-100 bg-transparent">*/}
                {/*        <a>Search...</a>*/}
                {/*    </button>*/}
                {/*</div>*/}

                {topics.map((topic, index) => (
                    <Category category={topic} key={index} index={index} // add collapsed here
                              activeTopic={activeTopic}/>
                ))}
            </div>
        </div>
    );
}

export function Topic({ topic, activeTopic }) {
    return (
        <div className={`${
                 activeTopic === topic.href
                     ? 'text-cyan-accent border-cyan-accent'
                     : 'text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700'
             } flex items-center transition-all duration-200 border-l-1 py-1`}>
            <Link href={topic.href} className={`hover:cursor-pointer hover:text-cyan-accent hover:dark:text-cyan-accent min-[424px]:text-lg text-base ml-4`}>{topic.title}</Link>
        </div>
    );
}
export function SubCategory({ subcategory, activeTopic }) {
    const [collasped, toggleCollapse] = Collapsible(!activeTopic.includes(subcategory.url));

    return (
        <div key={getNextKey()} className={`flex flex-col`}>
            <div key={getNextKey()}
                 className={`text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700 flex items-center transition-all duration-200 hover:cursor-pointer py-1 text-xl hover:text-cyan-accent hover:dark:text-cyan-accent border-l-1 justify-between`}
                 onClick={() => toggleCollapse()}>
                <span className={`min-[424px]:text-lg text-base ml-4`}>{subcategory.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 transition-transform duration-100 ${
                    !collasped
                        ? "-scale-y-100"
                        : "scale-y-100"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                </svg>
            </div>
            <div className={"border-l-1 border-neutral-200 dark:border-neutral-700"}>
                <div className={(collasped ? "hidden " : "") + "ml-8"}>
                    {subcategory.subtopics.map((subtopic) => (
                        subtopic.subtopics ? (
                            <SubCategory key={getNextKey()} activeTopic={activeTopic} subcategory={subtopic}></SubCategory>
                        ) : <Topic topic={subtopic} activeTopic={activeTopic} key={getNextKey()}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Category({ category, index, activeTopic }) {
    return (
        <div className={`mb-2 ${index === 0 ? "mt-1" : ""}`} key={getNextKey()}>
            <div className="flex items-center mb-2 hover:cursor-pointer justify-between">
                <h2 className="font-bold text-1xl">{category.title}</h2>
            </div>
            <div>
                {category.subtopics.map((subtopic) => (
                    subtopic.subtopics ? <SubCategory subcategory={subtopic} activeTopic={activeTopic} key={getNextKey()}></SubCategory> : <Topic topic={subtopic} activeTopic={activeTopic} key={getNextKey()}/>
                ))}
            </div>
        </div>
    );
}


export function HeaderListSidebar({ headers }) {
    const router = useRouter();

    const [showScrollUpButton, setShowScrollUpButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollUpButton(true);
            } else {
                setShowScrollUpButton(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [router.asPath]);

    return (
        <div className={"hidden min-[1350px]:block"}>
            <div className='ml-8 h-full max-w-1/5 min-w-[18rem] w-full fixed top-20 overflow-y-auto'>
                <div className={(headers.length === 0 ? "hidden " : "") + "text-lg font-bold mb-6"}>On this page</div>
                <div className={headers.length === 0 ? "hidden " : ""}>
                    {headers && headers.map((h1, index) => {
                        return (
                            <div key={index + 150} className="sidebar-header text-lg pb-3 flex flex-row w-fit items-center">
                                {/*<div className={"w-2 h-2 mr-2 bg-neutral-500 rounded-full aspect-square"}></div>*/}
                                <svg className={"w-1.5 h-1.5 mr-2 transition-colors duration-75"} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill={"#cbd5e1"}>
                                    <circle cx="50" cy="50" r="50"/>
                                </svg>
                                <span className={`w-full dark:border-neutral-300 border-neutral-600 dark:text-slate-300 transition-colors duration-75 text-left`}
                                   onClick={() => {
                                       // if the hash is already in the URL, then we need to scroll to it
                                        if (window.location.hash === `#${h1[1]}`)
                                            scrollPageToContent(h1[1])
                                       else router.push(`#${h1[1]}`)
                                   }}>{h1[0]}</span>
                            </div>
                        );
                    })}
                </div>

                <button onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }} className={(showScrollUpButton ? "" : "opacity-0 hover:cursor-auto ") + "bg-cyan-accent hover:bg-cyan-accent-light px-3 z-20 transition-all absolute bottom-32 ml-4 left-0 hover:shadow-button ease-in duration-200 hover:scale-105 h-12 rounded-full text-white flex flex-col items-center justify-center"}>
                    {/* TODO IMPLEMENT THIS <span className={"ml-1 min-[424px]:text-lg text-base"}>{content[keys.indexOf(activeTopic) + 1]}</span>*/}
                    <svg className={"w-6 h-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
