import {useRouter} from "next/router";
import {useEffect} from "react";

export default function ContentScroll(sidebar = "sidebar") {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            // Do something with the new hash, such as scrolling to an element with that ID
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // useEffect(() => {
    //     // Get the scroll position from localStorage, or default to 0
    //     const scrollHREF = localStorage.getItem('lastHREF') || "";
    //     if (window.location.href === scrollHREF) {
    //         const scrollPosition = Number(localStorage.getItem('scrollPosition')) || 0;
    //
    //         // Scroll to the stored position
    //         window.scrollTo(0, scrollPosition);
    //     }
    //
    //     // const element = document.getElementById("sidebar");
    //     // if (element) {
    //     //     const scrollPosition = parseInt(localStorage.getItem('sidebarScrollPosition')) || 0;
    //     //     console.log(scrollPosition)
    //     //
    //     //     // Scroll to the stored position
    //     //     element.scrollTo({
    //     //         top: scrollPosition,
    //     //         behavior: "smooth"
    //     //     });
    //     // }
    //
    //     // Save the current scroll position to localStorage on unload
    //     const handleUnload = () => {
    //         localStorage.setItem('scrollPosition', window.scrollY.toString());
    //         // localStorage.setItem("sidebarScrollPosition", element.scrollTop.toString());
    //         localStorage.setItem('lastHREF', window.location.href);
    //     };
    //
    //     window.addEventListener('beforeunload', handleUnload);
    //     window.addEventListener("scroll", handleUnload)
    //
    //     // Get the ID of the section to scroll to from the URL fragment identifier
    //     scroll();
    //
    //     return () => {
    //         window.removeEventListener('beforeunload', handleUnload);
    //         window.removeEventListener("scroll", handleUnload);
    //     };
    // }, [sidebar]);
}

export function percentScrolled() {
    const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

const getElementByIdAsync = id => new Promise(resolve => {
    const getElement = () => {
        const element = document.getElementById(id);
        if(element) {
            resolve(element);
        } else {
            requestAnimationFrame(getElement);
        }
    };
    getElement();
});

export async function scroll() {
    let hash = window.location.hash.substring(1);
    if (!hash) {
        // window.scrollTo({
        //     top: 0
        // });
        return;
    }

    // Find the section element and scroll to it
    const section = await getElementByIdAsync(hash.substring(0, hash.length - 1));
    if (section) {
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