import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import topics from '/public/content.json';
import {scroll} from "@/components/ContentScroll";
import {Category} from "@/components/Sidebar";

function MobileSidebar({ currentTopic }) {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();
    const activeTopic = router.pathname;

    const [collapsed, setCollapsed] = useState(() => {
        const initialState = {};
        topics.forEach((topic) => {
            initialState[topic.title + "-" + topic.id] = true;
        });
        return initialState;
    });

    useEffect(() => {
        // retrieve the state of the menus from LocalStorage
        const storedState = window.localStorage.getItem(
            "mobile-sidebar-collapsed-state"
        );
        if (storedState) {
            setCollapsed(JSON.parse(storedState));
        }
        setLoaded(true);
    }, []);

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
            "mobile-sidebar-collapsed-state",
            JSON.stringify({ ...collapsed, [topic.title + "-" + topic.id]: newValue })
        );
    };

    return (
        <div className={`mt-15 text-neutral-900 dark:text-slate-50`}>
            {/*<button className="hidden w-full lg:flex border-1 border-slate-200 hover:border-cyan-accent border-opacity-50 hover:border-opacity-75 items-center text-sm leading-6 text-neutral-700 dark:text-slate-300 hover:dark:text-slate-50 hover:text-neutral-900 rounded-md shadow-sm py-1.5 pl-2 pr-3 mb-6 transition-all duration-100 bg-transparent">*/}
            {/*    <a>Search...</a>*/}
            {/*</button>*/}
            {loaded &&
                topics.map((topic, index) => (
                    <Category category={topic} key={index} index={index} collapsed={collapsed} activeTopic={activeTopic} toggleCollapse={toggleCollapse}/>
                ))
            }
        </div>
    );
}

export function MobileHeaderListSidebar() {
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
            <div className='sticky top-20 overflow-y-auto'>
                <div className="text-2xl font-bold mb-6">On this page</div>
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

export default MobileSidebar;
