import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation'
import Sidebar, { HeaderListSidebar } from "@/components/Sidebar";
import Footer from "@/components/Footer";

import fs from 'fs';
import path from 'path';
 
export default function Page({ jsx }) {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(640);
  const [sidebar, setSidebar] = useState(null);

  useEffect(() => {
    setSidebar(<Sidebar></Sidebar>)

    setWindowWidth(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className={"flex flex-col min-h-screen bg-gray-50 dark:bg-neutral-900 text-slate-900 dark:text-slate-200 items-center "}> {/*  + openSans.className */}
      {/*<div className={"absolute top-0 right-0 w-full h-full z-10"}>*/}
      {/*    <img src={"/images/backgrounds/contentBG.png"} className={"w-full h-full object-cover opacity-20 dark:opacity-10"} alt={"background"}></img>*/}
      {/*</div>*/}
      <Navigation progressBar={true}></Navigation>

      {sidebar ? <div className="flex flex-row justify-around max-w-screen-4xl md:px-6 my-8 z-20 mx-auto xl:pr-[20rem]">
          {windowWidth >= 1024 ? sidebar : <></>}
          <div onScrollCapture={() => handleScroll()} className={"px-6 sm:px-9 flex flex-col w-full h-full lg:ml-[24rem]"}>
              {/* Page Header */}
              <div className="w-full max-w-5xl flex-col">
                  <div className="flex flex-col mb-12">
                      <span className="text-cyan-accent mb-1 text-lg font-semibold">location</span>
                      <span className="mb-10 inline-block text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight dark:text-slate-50 text-left">title</span>
                      <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md text-left sm:text-justify min-[424px]:text-lg text-md"}>
                          description
                      </div>
                  </div>
                  {
                    jsx.map((item, i) => {
                      return React.createElement(item.type, { key: i }, item.content)
                    })
                  }
              </div>
              <div className={"w-full flex justify-around mt-4"}>
                  <button onClick={() => {
                          const url = new URL(window.location.href);

                          const index = keys.indexOf(url.pathname);
                          if (index > 0)
                              router.push(keys[index - 1]);
                      }} className="transition-all hover:shadow-button ease-in duration-200 hover:scale-105 w-12 h-12 rounded-full bg-cyan-accent text-white flex items-center justify-center hover:bg-cyan-accent-light focus:outline-none focus:bg-gray-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                      </svg>
                  </button>
                  <button onClick={() => {
                          const url = new URL(window.location.href);

                          const index = keys.indexOf(url.pathname);
                          if (index < keys.length - 1)
                              router.push(keys[index + 1]);
                      }} className="transition-all hover:shadow-button ease-in duration-200 hover:scale-105 w-12 h-12 rounded-full bg-cyan-accent text-white flex items-center justify-center hover:bg-cyan-accent-light focus:outline-none focus:bg-gray-700">
                      <svg className="w-6 h-6 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                      </svg>
                  </button>
              </div>
              <Footer></Footer>
          </div>
          {windowWidth >= 1024 ? <HeaderListSidebar></HeaderListSidebar> : <></>}
      </div> : <div className="main-grid lg:grid lg:gap-8 lg:grid-cols-3 max-w-screen-4xl h-screen md:px-6 my-8 z-20"></div>}
    </div>
  )
}

export async function getServerSideProps(context) {
  const root = process.cwd();

  const directory = path.join(root, 'data/pages', context.query.category);

  try {
    // Use fs.promises.readFile to read the file asynchronously on the server
    const fileContents = await fs.promises.readFile(directory + '/' + context.query.topic + '.md', 'utf8');

    const lines = fileContents.split('\n');

    let jsx = []

    lines.map((line, i) => {
      if (line.startsWith('# ')) {
        const level = line.match(/^#+/)[0].length;
        const text = line.replace(/^#+/, '').trim();
        console.log("text: " + text);
    
        jsx.push({
          "type": "h" + level,
          "content": text
        });
      } else {
        let modifiedLine = line;
        // Check for bold text enclosed in double asterisks or double underscores
        modifiedLine = modifiedLine.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong className={"dark:text-slate-50 font-bold"}>$1</strong>');
    
        jsx.push({
          "type": "p",
          "content": modifiedLine
        });
      }
    });

    console.log(jsx);

    return {
      props: {
        jsx,
      },
    };
  } catch (error) {
    console.error('Error reading file:', error);

    return {
      props: {
        jsx: '',
      },
    };
  }
}