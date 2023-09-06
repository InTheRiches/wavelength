import useDarkMode from "use-dark-mode";
import {useEffect} from "react";
import Navigation from "@/components/Navigation";

export default function CourseTesting() {

    const {value: isDarkMode, toggle: toggleDarkMode} = useDarkMode();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className={"bg-white dark:bg-neutral-900 font-mono"}>
            <header className={"flex flex-col items-center w-full max-h-screen bg-white dark:bg-neutral-900"}>
                <Navigation dark={isDarkMode} setDark={toggleDarkMode}></Navigation>

                <div className="relative pt-20 sm:mb-24 lg:mb-26 xl:mb-32 mx-24 mt-16 xl:mt-32 pl-3 pr-3 grid grid-rows-[1fr,2fr] lg:grid-cols-2 gap-24 lg:gap-48">
                    <div className={"flex flex-col mb-32 lg:mb-0"}>
                        <h1 className={"text-slate-900 font-extrabold leading-16 text-5xl sm:leading-20 sm:text-6xl lg:text-8xl lg:leading-24 xl:leading-24 tracking-tight text-left dark:text-white"}>Begin your personalized fitness journey!</h1>
                        <p className="mt-6 text-lg lg:text-2xl text-slate-600 text-left mx-auto dark:text-slate-400">Your training can vary depending on your <a className={"text-cyan-accent"}>goals</a>. This course can take you start to finish on your <a className={"text-cyan-accent"}>fitness journey</a>, <a className={"text-cyan-accent"}>personalized</a> for your specific goals.</p>

                        <div className="mt-6 sm:mt-10 flex space-x-6 text-sm">
                            <a
                                className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-cyan-accent dark:highlight-white/20 dark:hover:bg-cyan-accent-light"
                                href="/getting-started/introduction">Get started</a>
                            <button type="button"
                                    className="hidden sm:flex items-center w-72 text-left space-x-3 ml-12 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
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
                    <div className={"flex justify-center flex-none aspect-w-16 aspect-h-16"}>
                        <img className={"h-4/6 w-4/6"} src={"/manRunningLogo.png"}  alt={"Wavelength"}></img>
                    </div>
                </div>
            </header>
        </div>
    )
}