import {useRouter} from "next/router";
import {useEffect} from "react";

export default function ContentScroll() {
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

    useEffect(() => {
        // Get the scroll position from localStorage, or default to 0
        const scrollHREF = localStorage.getItem('lastHREF') || "";
        if (window.location.href === scrollHREF) {
            const scrollPosition = Number(localStorage.getItem('scrollPosition')) || 0;

            // Scroll to the stored position
            window.scrollTo(0, scrollPosition);
        }

        // const element = document.getElementById("sidebar");
        // if (element) {
        //     const scrollPosition = parseInt(localStorage.getItem('sidebarScrollPosition')) || 0;
        //     console.log(scrollPosition)
        //
        //     // Scroll to the stored position
        //     element.scrollTo({
        //         top: scrollPosition,
        //         behavior: "smooth"
        //     });
        // }

        // Save the current scroll position to localStorage on unload
        const handleUnload = () => {
            localStorage.setItem('scrollPosition', window.scrollY.toString());
            // localStorage.setItem("sidebarScrollPosition", element.scrollTop.toString());
            localStorage.setItem('lastHREF', window.location.href);
        };

        window.addEventListener('beforeunload', handleUnload);
        window.addEventListener("scroll", handleUnload)

        // Get the ID of the section to scroll to from the URL fragment identifier
        scrollPageToContent();

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
            window.removeEventListener("scroll", handleUnload);
        };
    }, []);
}

export function percentScrolled() {
    const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector) && document.querySelector(selector).getBoundingClientRect().top !== 0) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

export async function scrollPageToContent() {
    let hash = window.location.hash.substring(1);

    if (!hash) {
        return;
    }

    waitForElm("#" + hash.substring(0, hash.length) + "x").then((section) => {
        // TODO FIX THIS, AS WHEN IT SEARCHES FOR THE ELEMENT, THIS VALUE IS ABOVE 0, BUT THEN IT DOES IT AGAIN AND IT ISNT, WHICH MAKES IT NOT SCROLL
        if (section.getBoundingClientRect().top === 0) {
            console.log("not scrolling")
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
    });
}