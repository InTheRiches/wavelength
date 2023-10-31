import {Fragment, useEffect, useState} from 'react'
import {useRouter} from "next/router";
import {lobster} from "@/components/Fonts";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";
import MobileSidebar from "@/components/MobileSidebar";
import useDarkMode from "use-dark-mode";
import {useLoaded} from "@/components/LoadedHook";
import {percentScrolled} from "@/components/ContentScroll";

export default function Navigation({ progressBar = false }) {
  const { value: isDarkMode, toggle: toggleDarkMode } = useDarkMode();
  const [ pScrolled, setPercentScrolled ] = useState(0.0);
  const router = useRouter();
  const loaded = useLoaded();

  const [windowWidth, setWindowWidth] = useState(640);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      let percent = percentScrolled();
      percent = Math.ceil(percent);
      if (percent > 100) percent = 100;
      setPercentScrolled(percent);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="navigation" className={`sticky pt-2 top-0 z-40 w-full ${router.pathname !== "/" ? "text-neutral-700" : "text-slate-50"} dark:text-slate-50 border-b-1 border-neutral-700 backdrop-blur flex-none lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-transparent supports-backdrop-blur:bg-cyan-accent/95 dark:bg-neutral-900/50`}>
      <div className="mx-auto px-2 sm:px-6 lg:px-8 w-full relative flex max-h-6v items-center justify-between">
        {router.pathname !== "/" && windowWidth < 1024 &&
          <div className="flex items-center">
            <div onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-500 hover:cursor-pointer">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </div>
          </div>
        }
        <div className="lg:left-0 flex items-center justify-center hover:cursor-pointer" onClick={() => router.push("/")}>
          <div className="flex flex-shrink-0 items-center">
            <img className="h-10 w-10 rounded-full" src="/images/logo.png" alt="Wavelength"/>
          </div>
          <a className={"ml-4 mb-1 text-4xl font-bold text-center hidden min-[1024px]:block  " + lobster.className}>wavelength</a>
        </div>
        <div className="flex items-center pr-2">
          <button type="button" className="rounded-full p-1 text-gray-400 hover:text-cyan-accent">
            <span className="sr-only">Toggle Theme</span>

            {isDarkMode && loaded && <svg onClick={toggleDarkMode} xmlns="http://www.w3.org/2000/svg" fill={"none"} viewBox="0 0 24 24" strokeWidth="1.5" className="stroke-cyan-accent w-8 h-8 aspect-square">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>}
            {!isDarkMode && loaded && <svg onClick={toggleDarkMode} xmlns="http://www.w3.org/2000/svg" fill={"none"} viewBox="0 0 24 24" strokeWidth="1.5" className="stroke-cyan-accent w-9 h-9 aspect-square">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>}

            {/*<svg onClick={setDark} className="w-8 h-8 fill-slate-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path stroke="white" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>*/}
          </button>
        </div>
      </div>
      {isOpen && windowWidth < 1024 ?
      <div className={"fixed inset-0 z-50 block"}>
          <div className={"overflow-y-scroll relative flex flex-col bg-white dark:bg-neutral-900 w-80 max-w-[calc(100%-3rem)] pl-6 pr-3 pb-6 pt-3 h-screen border-r-1 border-cyan-accent"}>
              <div className={"w-full flex flex-row justify-end"}>
                <XMarkIcon onClick={() => setIsOpen(!isOpen)} className="hover:cursor-pointer block mb-2 h-6 w-6" aria-hidden="true" />
              </div>
              <MobileSidebar></MobileSidebar>
          </div>
      </div> 
      : <></>}
      {progressBar && <div className={"h-1 pt-2"}>
        <div className={"h-0.5 bg-cyan-accent max-w-screen " + (pScrolled === 100 ? "" : "rounded-sm")} style={{width: pScrolled + "%"}}></div>
      </div>}
    </div>
  )
}