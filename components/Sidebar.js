import React, {useEffect, useState, useCallback} from 'react';
import {useRouter} from "next/router";
import topics from '/public/content.json';
import {scroll} from "@/components/ContentScroll";

let key = 0;
const getNextKey = () => {
    key = key + 1;
    return key
};

function Sidebar({disable = true}) {
    const [loaded, setLoaded] = useState(false);

    const activeTopic = window.location.pathname;

    const [collapsed, setCollapsed] = useState(() => {
        const initialState = {};
        topics.forEach((topic) => {
            initialState[topic.title + "-" + topic.id] = true;
        });
        return initialState;
    });

    const [remainingHeight, setRemainingHeight] = useState(0);

    const toggleCollapse = (topic) => {
        const newValue = !collapsed[topic.title + "-" + topic.id];

        setCollapsed({...collapsed, [topic.title + "-" + topic.id]: newValue});

        // save the new state to LocalStorage
        window.localStorage.setItem(
            "sidebar-collapsed-state",
            JSON.stringify({...collapsed, [topic.title + "-" + topic.id]: newValue})
        );
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
            setRemainingHeight(remainingHeight - 32);
        };

        calculateRemainingHeight();

        const handleScroll = () => {
            localStorage.setItem('sidebar-scroll', sidebar.scrollTop.toString());
            console.log("setting scrol to " + sidebar.scrollTop.toString());

            console.log(localStorage.getItem('sidebar-scroll'));
        };

        window.addEventListener('wheel', handleScroll);
        window.addEventListener('resize', calculateRemainingHeight);

        return () => {
            window.removeEventListener('resize', calculateRemainingHeight);
            window.removeEventListener('wheel', handleScroll);
        };
    }, [window]);

    useEffect(() => {
        const storedScroll = localStorage.getItem(
            "sidebar-scroll"
        );

        const sidebar = document.getElementById("sidebar");

        sidebar.scrollTop = parseInt(storedScroll);
        console.log("setting scroll to " + storedScroll);
    }, [loaded]);

    return (
        <div className="flex flex-col max-w-1/5">
            <div id="sidebar" style={{maxHeight: remainingHeight + "px"}}
                 className={`sidebar-taper pb-8 h-[90vh] fixed w-[20rem] overflow-y-auto z-10 px-4 mt-15 pr-4 text-neutral-900 dark:text-slate-50 hidden sm:flex flex-col`}>
                {/*<div className="w-full bg-white/50 supports-backdrop-blur:bg-cyan-accent/95 backdrop-blur dark:bg-neutral-900/50 sticky top-0 z-10 mb-6">*/}
                {/*    <button className="w-full lg:flex border-1 border-slate-200 hover:border-cyan-accent border-opacity-50 hover:border-opacity-75 items-center text-sm leading-6 text-neutral-700 dark:text-slate-300 hover:dark:text-slate-50 hover:text-neutral-900 rounded-md shadow-sm py-1.5 pl-2 pr-3 transition-all duration-100 bg-transparent">*/}
                {/*        <a>Search...</a>*/}
                {/*    </button>*/}
                {/*</div>*/}

                {loaded &&
                    topics.map((topic, index) => (
                        <Category category={topic} key={index} index={index} collapsed={collapsed} activeTopic={activeTopic} toggleCollapse={toggleCollapse}/>
                    ))
                }
            </div>
        </div>
    );
}

export function Topic({ topic, activeTopic }) {
    const router = useRouter();

    return (
        <div className={`${
                 activeTopic === topic.href
                     ? 'text-cyan-accent border-cyan-accent'
                     : 'text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700'
             } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-cyan-accent hover:dark:text-cyan-accent border-l-1 py-1`}
             onClick={() => {
                 router.push(topic.href);
             }}>
            <a className={`text-lg ml-4`}>{topic.title}</a>
        </div>
    );
}

export function SubCategory({ subcategory, collapsed, activeTopic, toggleCollapse }) {
    return (
        <div key={getNextKey()} className={`flex flex-col`}>
            <div key={getNextKey()}
                 className={`text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700 flex items-center transition-all duration-200 hover:cursor-pointer py-1 text-xl hover:text-cyan-accent hover:dark:text-cyan-accent border-l-1 justify-between`}
                 onClick={() => {
                     toggleCollapse(subcategory);
                 }}>
                <a className={`text-lg ml-4`}>{subcategory.title}</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 transition-transform duration-100 ${
                    collapsed[subcategory.title + "-" + subcategory.id]
                        ? "-scale-y-100"
                        : "scale-y-100"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                </svg>
            </div>
            <div className={"border-l-1 border-neutral-200 dark:border-neutral-700"}>
                {collapsed[subcategory.title + "-" + subcategory.id] && (
                    <div className="ml-8">
                        {subcategory.subtopics.map((subtopic) => (
                            subtopic.subtopics ? (
                                <SubCategory key={getNextKey()} subcategory={subtopic} collapsed={collapsed} activeTopic={activeTopic} toggleCollapse={toggleCollapse}></SubCategory>
                            ) : <Topic topic={subtopic} activeTopic={activeTopic} key={getNextKey()}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export function Category({ category, index, collapsed, activeTopic, toggleCollapse }) {
    return (
        <div className={`mb-2 ${index === 0 ? "mt-1" : ""}`} key={getNextKey()}>
            <div className="flex items-center mb-2 hover:cursor-pointer justify-between"
                 onClick={() => toggleCollapse(category)}>
                <h2 className="font-bold text-lg lg:text-xl xl:text-1xl">{category.title}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 transition-all duration-100 ${collapsed[category.title + "-" + category.id] ? "-scale-y-100" : "scale-y-100"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                </svg>
            </div>
            {collapsed[category.title + "-" + category.id] && (
                <div>
                    {category.subtopics.map((subtopic) => (
                        subtopic.subtopics ? <SubCategory subcategory={subtopic} collapsed={collapsed} activeTopic={activeTopic} toggleCollapse={toggleCollapse} key={getNextKey()}></SubCategory> : <Topic topic={subtopic} activeTopic={activeTopic} key={getNextKey()}/>
                    ))}
                </div>
            )}
        </div>
    );
}


export function HeaderListSidebar() {
    const router = useRouter();

    const [loaded, setLoaded] = useState(false);

    const [h1List, setH1List] = useState([]);

    useEffect(() => {
        const h1Elements = document.querySelectorAll('.font-bold.text-left.flex.items-center');
        const h1List = [];

        h1Elements.forEach((element) => {
            const text = element.textContent;
            const id = element.id;
            h1List.push(text + ":" + id.substring(0, id.length - 1));
        });

        setH1List(h1List);

        setLoaded(true);
    }, []);
    // ${h1List.length === index + 1 ? "" : "border-b-1.5"}

    return loaded ? (
        <div className={"hidden xl:block"}>
            <div className='ml-4 h-full max-w-1/5 min-w-[18rem] w-full fixed top-20 overflow-y-auto'>
                <div className="text-lg font-bold mb-6">On this page</div>
                <div>
                    {h1List.map((h1, index) => {
                        return (
                            <div key={index + 150} className="sidebar-header text-lg pb-3 flex flex-row w-fit items-center">
                                {/*<div className={"w-2 h-2 mr-2 bg-neutral-500 rounded-full aspect-square"}></div>*/}
                                <svg className={"w-1.5 h-1.5 mr-2 transition-colors duration-75"} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill={"#cbd5e1"}>
                                    <circle cx="50" cy="50" r="50"/>
                                </svg>
                                <a className={`w-full dark:border-neutral-300 border-neutral-600 dark:text-slate-300 transition-colors duration-75 text-left`}
                                   onClick={() => router.push(`#${h1.split(":")[1]}`).then(() => scroll())}>{h1.split(":")[0]}</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    ) : (<></>);
}

export default Sidebar;
