import {Fragment, useEffect, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {useRouter} from "next/router";
import {lobster} from "@/components/Fonts";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";
import MobileSidebar from "@/components/MobileSidebar";

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation({dark, setDark}) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   // Select all text elements on the page
  //   const textElements = document.querySelectorAll('.font-roboto');
  //
  //   // Loop through each text element
  //   textElements.forEach((element) => {
  //     ScrambleElement(element, false, true);
  //   });
  // }, []);

  return (
    <div is="nav" id="navigation" className="sticky py-2 top-0 z-40 w-full text-neutral-900 dark:text-slate-50 border-b-1 border-neutral-700 backdrop-blur flex-none lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/50 supports-backdrop-blur:bg-cyan-accent/95 dark:bg-neutral-900/50">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 w-full relative flex max-h-6v items-center justify-between">
          {router.pathname !== "/" &&
            <div className="flex items-center md:hidden">
              <div onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400">
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
              <img className="h-10 w-10" src="/logo.png" alt="Wavelength"/>
            </div>
            <a className={"ml-4 mb-1 text-4xl font-bold text-center hidden md:block " + lobster.className}>wavelength</a>
          </div>
          <div className="flex items-center pr-2">
            <button type="button" className="rounded-full p-1 text-gray-400 hover:text-cyan-accent">
              <span className="sr-only">Toggle Theme</span>
              <svg onClick={setDark} className="w-8 h-8 fill-neutral-900 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path stroke="white" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
            </button>
          </div>
        </div>
      <MobileSidebar currentTopic={router.pathname}></MobileSidebar>
    </div>
  )
}