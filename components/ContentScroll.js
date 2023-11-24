// export default function ContentScroll() {
//     useEffect(() => {
//         const handleHashChange = () => {
//             const hash = window.location.hash;
//             // Do something with the new hash, such as scrolling to an element with that ID
//         };
//
//         window.addEventListener('hashchange', handleHashChange);
//         handleHashChange();
//
//         return () => {
//             window.removeEventListener('hashchange', handleHashChange);
//         };
//     }, []);
//
//     useEffect(() => {
//         // Get the scroll position from localStorage, or default to 0
//         const scrollHREF = localStorage.getItem('lastHREF') || "";
//         if (window.location.href === scrollHREF) {
//             const scrollPosition = Number(localStorage.getItem('scrollPosition')) || 0;
//
//             // Scroll to the stored position
//             window.scrollTo(0, scrollPosition);
//         }
//
//         const handleUnload = () => {
//             localStorage.setItem('scrollPosition', window.scrollY.toString());
//             // localStorage.setItem("sidebarScrollPosition", element.scrollTop.toString());
//             localStorage.setItem('lastHREF', window.location.href);
//         };
//
//         window.addEventListener('beforeunload', handleUnload);
//         window.addEventListener("scroll", handleUnload)
//
//         // Get the ID of the section to scroll to from the URL fragment identifier
//         scrollPageToContent();
//
//         return () => {
//             window.removeEventListener('beforeunload', handleUnload);
//             window.removeEventListener("scroll", handleUnload);
//         };
//     }, []);
// }

import path from "path";
import React, {useEffect} from "react";

export function percentScrolled() {
    const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

export async function scrollPageToContent(hash) {
    if (!hash) {
        return;
    }

    const section = document.getElementById(hash.substring(0, hash.length) + "x");

    if (section) {
        if (section.getBoundingClientRect().top === 0) {
            return;
        }

        const nav = document.getElementById('navigation');
        const navHeight = nav.getBoundingClientRect().height;
        let sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;
        sectionTop -= 20;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
        });
    }
}

export function ScrollButton({ positioning }) {
    const [showScrollUpButton, setShowScrollUpButton] = React.useState(false);

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
    }, []);

    return (
        <button onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }} className={(showScrollUpButton ? "" : "opacity-0 hover:cursor-auto ") + `bg-cyan-accent hover:bg-cyan-accent-light px-3 z-20 transition-all ${positioning} ml-4 hover:shadow-button ease-in duration-200 hover:scale-105 h-12 rounded-full text-white flex-col items-center justify-center`}>
            {/* TODO IMPLEMENT THIS <span className={"ml-1 min-[424px]:text-lg text-base"}>{content[keys.indexOf(activeTopic) + 1]}</span>*/}
            <svg className={"w-6 h-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
        </button>
    )
}