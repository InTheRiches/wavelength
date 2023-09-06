import {useEffect} from 'react'
import Navigation from '@/components/Navigation'
import Footer from "@/components/Footer";
import useDarkMode from 'use-dark-mode';
import {getCookieValue} from "@/lib/util";
import {getCookie, hasCookie} from "cookies-next";

export default function Layout() {
    const {value: isDarkMode, toggle: toggleDarkMode} = useDarkMode();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        if (!hasCookie("accessToken") || !hasCookie("id"))
            return;

        const loadUserData = async () => {
            const token = getCookie("accessToken");
            const id = getCookie("id");

            if (token && id) {
                const response = await fetch('/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify({id: id, accessToken: token}),
                }).then(res => {
                    if (res.ok || res.status !== 403) {
                        res.json().then(json => {
                            console.log(json);
                        });

                        return;
                    }

                    // error, do whatever to signal wrong information
                    console.log("error")
                });
            }
            console.log("token: " + token);
            console.log("id: " + id);
        };

        loadUserData();
    }, [isDarkMode]);

    // useEffect(() => {
    //     // Select all text elements on the page
    //     const textElements = document.querySelectorAll('h1, h2');
    //
    //     // Loop through each text element
    //     textElements.forEach((element) => {
    //         ScrambleElement(element, false, true, 750);
    //     });
    // }, []);

    return (
        <div
            className={`flex flex-col min-h-screen text-slate-900 dark:text-slate-50 justify-center items-center font-mono bg-cyan-accent`}>
            <header className={"flex flex-col items-center w-full h-screen bg-white dark:bg-neutral-900"}>
                <Navigation dark={isDarkMode} setDark={toggleDarkMode}></Navigation>
                {/*<svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1" className='w-full h-full absolute'>*/}
                {/*    <rect x="0" y="0" className={"w-screen h-full"} fill="#001220"></rect>*/}
                {/*    <path d="M0 434L21.5 425.2C43 416.3 86 398.7 128.8 397.3C171.7 396 214.3 411 257.2 407.8C300 404.7 343 383.3 385.8 379.3C428.7 375.3 471.3 388.7 514.2 388.8C557 389 600 376 642.8 377.5C685.7 379 728.3 395 771.2 394C814 393 857 375 878.5 366L900 357L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#00e8ff"></path>*/}
                {/*    <path d="M0 464L21.5 452.2C43 440.3 86 416.7 128.8 412.7C171.7 408.7 214.3 424.3 257.2 428.8C300 433.3 343 426.7 385.8 432.3C428.7 438 471.3 456 514.2 465.8C557 475.7 600 477.3 642.8 469C685.7 460.7 728.3 442.3 771.2 430.3C814 418.3 857 412.7 878.5 409.8L900 407L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#00c5ff"></path>*/}
                {/*    <path d="M0 441L21.5 443.3C43 445.7 86 450.3 128.8 452.3C171.7 454.3 214.3 453.7 257.2 460.5C300 467.3 343 481.7 385.8 490.8C428.7 500 471.3 504 514.2 497.7C557 491.3 600 474.7 642.8 471.5C685.7 468.3 728.3 478.7 771.2 475.3C814 472 857 455 878.5 446.5L900 438L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#7998fb"></path>*/}
                {/*    <path d="M0 491L21.5 496.5C43 502 86 513 128.8 511.7C171.7 510.3 214.3 496.7 257.2 498C300 499.3 343 515.7 385.8 519.5C428.7 523.3 471.3 514.7 514.2 512.5C557 510.3 600 514.7 642.8 514.3C685.7 514 728.3 509 771.2 506.8C814 504.7 857 505.3 878.5 505.7L900 506L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#b861c0"></path>*/}
                {/*    <path d="M0 540L21.5 542.7C43 545.3 86 550.7 128.8 556.3C171.7 562 214.3 568 257.2 569.3C300 570.7 343 567.3 385.8 566.7C428.7 566 471.3 568 514.2 563C557 558 600 546 642.8 540C685.7 534 728.3 534 771.2 540.2C814 546.3 857 558.7 878.5 564.8L900 571L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#c62368"></path>*/}
                {/*</svg>*/}

                {/* <div className={"absolute inset-0 gradient-mask bg-white dark:bg-black"}></div> */}
                <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-26 pl-3 pr-3">
                    <h1 className={"text-slate-900 font-extrabold text-2xl sm:text-5xl xl:text-6xl tracking-tight text-center dark:text-white"}>Transform
                        your physique with expert guidance without ever paying a dollar.</h1>
                    <p className="mt-6 text-lg lg:text-2xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">A
                        science based approach to <a className={"text-cyan-accent"}>building muscle</a>, <a
                            className={"text-cyan-accent"}>losing fat</a>, and getting <a
                            className={"text-cyan-accent"}>stronger</a>, arranged to be understood and accessible by
                        all.</p>

                    <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
                        <a
                            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-cyan-accent dark:highlight-white/20 dark:hover:bg-cyan-accent-light"
                            href="/getting-started/introduction">Get started</a>
                        <button type="button"
                                className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round"
                                 className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
                                <path d="m19 19-3.5-3.5"></path>
                                <circle cx="11" cy="11" r="6"></circle>
                            </svg>
                            <span className="flex-auto">Quick search...</span><kbd
                            className="font-sans font-semibold dark:text-slate-500"><abbr title="Control"
                                                                                          className="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K</kbd>
                        </button>
                    </div>
                </div>
            </header>

            <section className="text-center max-w-7xl px-8 pt-10 sm:pt-15 md:pt-20 pb-14 slant"><h2
                className="text-slate-900 text-4xl font-extrabold sm:text-5xl dark:text-white">Understanding the
                mechanics behind working out significantly increases effectiveness.</h2>
                <figure>
                    <blockquote><p className="mt-6 max-w-3xl mx-auto text-lg lg:text-xl text-slate-900">During my
                        fitness journey, I realized the importance of understanding the human anatomy and the underlying
                        science of muscle <a className={"text-slate-50"}>hypertrophy</a>. As my understanding of these
                        concepts grew, so did my <a className={"text-slate-50"}>efficiency</a> and <a
                            className={"text-slate-50"}>effectiveness</a> in the gym. By comprehending the precise
                        mechanisms behind muscle development and how to optimize them, I found that my workouts became
                        more <a className={"text-slate-50"}>gratifying</a> and <a
                            className={"text-cyan-accent"}>productive</a>.</p></blockquote>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left"><img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" className="w-14 h-14 rounded-full"
                        loading="lazy" decoding="async"></img>
                        <div>
                            <div className="font-bold text-white text-lg">Hayden Williams</div>
                            <div className="mt-0.5 text-lg leading-6 text-slate-900">Co-Founder of Surge Strength</div>
                        </div>
                    </figcaption>
                </figure>
            </section>

            <Footer darkBG={"cyan-accent"}></Footer>
        </div>
    )
}