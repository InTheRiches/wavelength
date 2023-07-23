import React, {useEffect, useState, useCallback} from 'react';
import {useRouter} from "next/router";
import topics from '/public/content.json';
import {scroll} from "@/components/ContentScroll";

function Sidebar({ currentTopic, disable=true }) {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();

    const [collapsed, setCollapsed] = useState(() => {
        const initialState = {};
        topics.forEach((topic) => {
            topic.subtopics.forEach((subtopic) => {
                if (
                    currentTopic ===
                    topic.title + "-" + subtopic.title
                )
                    initialState[
                    topic.title + "-" + subtopic.id
                        ] = true;
                else if (subtopic.subtopics) {
                    subtopic.subtopics.forEach((subsubtopic) => {
                        if (
                            currentTopic ===
                            topic.title +
                            "-" +
                            subtopic.title +
                            "-" +
                            subsubtopic.title
                        ) {
                            initialState[
                            subtopic.title + "-" + subtopic.id
                                ] = true;
                            initialState[
                            topic.title + "-" + topic.id
                                ] = true;
                        }
                    });
                }
            });
        });
        return initialState;
    });

    const [remainingHeight, setRemainingHeight] = useState(0);
    let key = 0;

    const getNextKey = () => {
        key = key + 1;
        return key
    };

    useEffect(() => {
        // retrieve the state of the menus from LocalStorage
        const storedState = window.localStorage.getItem(
            "sidebar-collapsed-state"
        );

        if (storedState) {
            setCollapsed(JSON.parse(storedState));
        }
        setLoaded(true);

        const calculateRemainingHeight = () => {
            const navbarHeight = document.getElementById('navigation').offsetHeight;
            const windowHeight = window.innerHeight;
            const remainingHeight = windowHeight - navbarHeight;
            setRemainingHeight(remainingHeight-32);
          };
      
          calculateRemainingHeight();
      
          window.addEventListener('resize', calculateRemainingHeight);
          return () => {
            window.removeEventListener('resize', calculateRemainingHeight);
          };
    }, []);
    //
    // useEffect(() => {
    //     const textElements = document.querySelectorAll('.font-bold.text-xl');
    //
    //     // Loop through each text element
    //     textElements.forEach((element) => {
    //         ScrambleElement(element, true, false);
    //     });
    // }, [loaded]);

    const toggleCollapse = (topic) => {
        const newValue = !collapsed[topic.title + "-" + topic.id];

        setCollapsed({ ...collapsed, [topic.title + "-" + topic.id]: newValue });

        // save the new state to LocalStorage
        window.localStorage.setItem(
            "sidebar-collapsed-state",
            JSON.stringify({ ...collapsed, [topic.title + "-" + topic.id]: newValue })
        );
    };

    const setCollapse = (topic, value) => {
        console.log("collapse");
        setCollapsed({ ...collapsed, [topic.title + "-" + topic.id]: value });

        // save the new state to LocalStorage
        window.localStorage.setItem(
            "sidebar-collapsed-state",
            JSON.stringify({ ...collapsed, [topic.title + "-" + topic.id]: value })
        );
    }

    return (
        <div className="flex flex-col h-full w-full max-w-1/5">
            <div id="sidebar" style={{ maxHeight: remainingHeight + "px" }} className={`sidebar-taper sticky top-20 overflow-y-auto z-10 bg-white dark:bg-neutral-900 px-4 mt-15 pr-4 text-neutral-900 dark:text-slate-50 hidden sm:flex flex-col`}>
                <div className="w-full bg-white/50 supports-backdrop-blur:bg-cyan-accent/95 backdrop-blur dark:bg-neutral-900/50 sticky top-0 z-10 ">
                    <button className="w-full lg:flex border-1 border-slate-200 hover:border-cyan-accent border-opacity-50 hover:border-opacity-75 items-center text-sm leading-6 text-neutral-700 dark:text-slate-300 hover:dark:text-slate-50 hover:text-neutral-900 rounded-md shadow-sm py-1.5 pl-2 pr-3 mb-6 transition-all duration-100 bg-transparent">
                        <a>Search...</a>
                    </button>
                </div>

                {loaded &&
                    topics.map((topic) => (
                        <div className="mb-2 mr-2" key={getNextKey()}>
                            <div
                                className="flex items-center mb-2 hover:cursor-pointer justify-between"
                                onClick={() => toggleCollapse(topic)}
                            >
                                <h2 className="font-bold text-xl">{topic.title}</h2>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`w-5 h-5 transition-all duration-100 ${
                                        collapsed[topic.title + "-" + topic.id]
                                            ? "-scale-y-100"
                                            : "scale-y-100"
                                    }`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            </div>
                            {collapsed[topic.title + "-" + topic.id] && (
                                <div className="">
                                    {topic.subtopics.map((subtopic) => (
                                        <div
                                            key={getNextKey()}
                                            className={`flex flex-col ${
                                                subtopic.subtopics ? 'border-l-1 border-neutral-200 dark:border-neutral-700' : ''
                                            }`}
                                        >
                                            <div
                                                className={`${
                                                    currentTopic === topic.title + "-" + subtopic.title
                                                        ? 'text-cyan-accent border-cyan-accent'
                                                        : 'text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700'
                                                } ${subtopic.subtopics ? "" : "border-l-1"} flex items-center text-2xl transition-all duration-200 hover:cursor-pointer hover:text-cyan-accent dark:hover:text-cyan-accent flex-row py-1 justify-between`}
                                                onClick={() => {
                                                    console.log(currentTopic);
                                                    if (subtopic.subtopics) {
                                                        // if (currentTopic.includes( topic.title + "-" + subtopic.title)) return;
                                                        toggleCollapse(subtopic);
                                                    } else {
                                                        router.push(subtopic.href);
                                                    }
                                                }}
                                            >
                                                <a className={`text-xl ml-6`}>{subtopic.title}</a>
                                                {subtopic.subtopics && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className={`w-5 h-5 transition-transform duration-100 ${
                                                            collapsed[subtopic.title + "-" + subtopic.id]
                                                                ? "-scale-y-100"
                                                                : "scale-y-100"
                                                        }`}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                )}
                                            </div>
                                            <div>
                                                {subtopic.subtopics && collapsed[subtopic.title + "-" + subtopic.id] && (
                                                    <div className="ml-6.5">
                                                        {subtopic.subtopics.map((subsubtopic) => (
                                                            <div
                                                                key={getNextKey()}
                                                                className={`flex flex-col ${
                                                                    subtopic.subtopics ? '' : ''
                                                                }`}
                                                            >
                                                                <div
                                                                    key={getNextKey()}
                                                                    className={`${
                                                                        currentTopic === topic.title + "-" + subtopic.title + "-" + subsubtopic.title
                                                                            ? 'text-cyan-accent border-cyan-accent'
                                                                            : 'text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700'
                                                                    } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-cyan-accent hover:dark:text-cyan-accent border-l-1 py-1 text-xl justify-between`}
                                                                    onClick={() => {
                                                                        if (subsubtopic.subtopics) {
                                                                            toggleCollapse(subsubtopic);
                                                                        } else {
                                                                            router.push(subsubtopic.href);
                                                                        }
                                                                    }}
                                                                >
                                                                    <a className={`text-xl ml-6`}>{subsubtopic.title}</a>
                                                                    {subsubtopic.subtopics && (
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            strokeWidth={1.5}
                                                                            stroke="currentColor"
                                                                            className={`w-5 h-5 transition-transform duration-100 ${
                                                                                collapsed[subsubtopic.title + "-" + subsubtopic.id]
                                                                                    ? "-scale-y-100"
                                                                                    : "scale-y-100"
                                                                            }`}
                                                                        >
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                                        </svg>
                                                                    )}
                                                                </div>
                                                                <div className={"border-l-1 border-neutral-200 dark:border-neutral-700"}>
                                                                    {subsubtopic.subtopics && collapsed[subsubtopic.title + "-" + subsubtopic.id] && (
                                                                        <div className="ml-6.5">
                                                                            {subsubtopic.subtopics.map((subsubsubtopic) => (
                                                                                    <div
                                                                                        key={getNextKey()}
                                                                                        className={`${
                                                                                            currentTopic.split("-")[0] === topic.title &&
                                                                                            currentTopic.split("-")[1] === subtopic.title &&
                                                                                            currentTopic.split("-")[2] === subsubtopic.title &&
                                                                                            currentTopic.split("-")[3] === subsubsubtopic.title
                                                                                                ? 'text-cyan-accent border-cyan-accent'
                                                                                                : 'text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700'
                                                                                        } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-cyan-accent hover:dark:text-cyan-accent border-l-1 py-1 text-xl`}
                                                                                        onClick={() => {
                                                                                            router.push(subsubsubtopic.href);
                                                                                        }}
                                                                                    >
                                                                                        <a className={`text-xl ml-6`}>{subsubsubtopic.title}</a>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export function HeaderListSidebar() {
    const router = useRouter();

    const [loaded, setLoaded] = useState(false);

    const [h1List, setH1List] = useState([]);

    useEffect(() => {
        const h1Elements = document.querySelectorAll('.text-3xl.font-bold.flex.items-center');
        const h1List = [];
      
        h1Elements.forEach((element) => {
          const text = element.textContent;
          const id = element.id;
          h1List.push(text + ":" + id.substring(0, id.length - 1));
        });

        setH1List(h1List);

        setLoaded(true);
    }, []);

    return loaded ? (
        <div className={"h-full w-full"}>
            <div className='ml-4 sticky top-20 overflow-y-auto'>
                <div className="text-lg font-bold mb-6">On this page</div>
                <div>
                    {h1List.map((h1, index) => {
                        return (
                            <div key={index+150} className="text-lg mb-3">
                                <a className="hover:text-cyan-accent dark:hover:text-cyan-accent dark:text-slate-300 transition-colors duration-75 hover:cursor-pointer" onClick={() => router.push(`#${h1.split(":")[1]}`).then(() => scroll())}>{h1.split(":")[0]}</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    ) : (<></>);
}

export default Sidebar;
