// This file is required to use @next/mdx in the `app` directory.
import {EntireBodyMap} from "@/components/BodySVG";
import InformationBlock, {WarningBlock} from "@/components/InformationBlocks";
import React from "react";
import BulletPoints from "@/components/BulletPoints";
import handleClick from "@/components/HandleClick";
import {useRouter} from "next/router";

export function useMDXComponents(components) {
  const router = useRouter();

  return {
    EntireBodyMap: (props) => <EntireBodyMap {...props}></EntireBodyMap>,
    InformationBlock: (props) => <InformationBlock {...props}></InformationBlock>,
    WarningBlock: (props) => <WarningBlock {...props}></WarningBlock>,
    h1: ({ children }) => <h1 id={children.replace(/\s/g, "-").toLowerCase() + "x"} className={"font-bold text-slate-900 dark:text-slate-50 min-[424px]:text-[1.875rem] text-2xl mt-12 mb-4"}>{children}</h1>,
    h2: ({ children }) => <h2 className={"font-bold text-slate-900 dark:text-slate-50 text-[1.4rem]"}>{children}</h2>,
    p: ({ children }) => <p className={"text-slate-700 dark:text-slate-300 font-normal min-[424px]:text-lg text-md text-left sm:text-justify mb-6"}>{children}</p>,
    span: ({ children }) => <span className={"text-slate-800 dark:text-slate-50 min-[424px]:text-lg text-md text-left sm:text-justify"}>{children}</span>,
    strong: ({ children }) => <strong className={"text-slate-700 dark:text-slate-50"}>{children}</strong>,
    a: ({ children, ...props }) => <a className={"text-cyan-accent min-[424px]:text-lg text-md hover:cursor-pointer"} onClick={() => handleClick(props.href, router)}>{children}</a>,
    code: ({ children }) => <code className="border-1 border-cyan-accent flex flex-col p-2 bg-neutral-500 bg-opacity-5 rounded-md indent-1 mb-4">{children}</code>,
    BulletPoints: (props) => <BulletPoints {...props}></BulletPoints>,
    ...components
  }
  // Allows customizing built-in components, e.g. to add styling.
  // return {
  //   h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
  //   ...components,
  // }
}

export function useDescriptionComponents(components) {
  const router = useRouter();

  return {
    p: ({ children }) => <p className={"text-slate-700 dark:text-slate-300 font-normal min-[424px]:text-lg text-md text-left sm:text-justify"}>{children}</p>,
    strong: ({ children }) => <strong className={"text-slate-700 dark:text-slate-50"}>{children}</strong>,
    a: ({ children, ...props }) => <a className={"text-cyan-accent min-[424px]:text-lg text-md hover:cursor-pointer"} onClick={() => handleClick(props.href, router)}>{children}</a>,
    ...components
  }
  // Allows customizing built-in components, e.g. to add styling.
  // return {
  //   h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
  //   ...components,
  // }
}