// This file is required to use @next/mdx in the `app` directory.
import {EntireBodyMap} from "@/components/primary/BodySVG";
import InformationBlock, {WarningBlock} from "@/components/InformationBlocks";
import React from "react";
import BulletPoints from "@/components/primary/BulletPoints";
import handleClick from "@/components/HandleClick";
import {useRouter} from "next/router";
import Link from "next/link";
import WorkoutTable from "@/components/primary/WorkoutTable";
import ProductCarousel from "@/components/ProductCarousel";

export function useMDXComponents(components) {
  return {
    Link: (props) => <Link {...props}></Link>,
    ProductCarousel: (props) => <ProductCarousel {...props}></ProductCarousel>,
    EntireBodyMap: (props) => <EntireBodyMap {...props}></EntireBodyMap>,
    InformationBlock: (props) => <InformationBlock {...props}></InformationBlock>,
    WarningBlock: (props) => <WarningBlock {...props}></WarningBlock>,
    WorkoutTable: (props) => <WorkoutTable {...props}></WorkoutTable>,
    h1: ({ children }) => <span id={children.replace(/\s/g, "-").toLowerCase() + "x"} className={"customh1s font-bold text-slate-900 dark:text-slate-50 min-[424px]:text-[1.875rem] text-2xl mt-12 mb-4 leading-10 block"}>{children}</span>,
    h2: ({ children }) => <span className={"font-bold text-slate-900 dark:text-slate-50 text-[1.4rem]"}>{children}</span>,
    p: ({ children }) => <p className={"text-slate-700 dark:text-slate-300 font-normal min-[424px]:text-md min-[1350px]:text-lg text-base text-left sm:text-justify mb-6"}>{children}</p>,
    span: ({ children }) => <span className={"text-slate-800 dark:text-slate-50 min-[424px]:text-md min-[1350px]:text-lg text-base text-left sm:text-justify"}>{children}</span>,
    strong: ({ children }) => <strong className={"text-slate-700 dark:text-slate-50"}>{children}</strong>,
    a: ({ children, ...props }) => <Link className={"text-cyan-accent min-[424px]:text-md min-[1350px]:text-lg text-base hover:cursor-pointer"} href={props.href}>{children}</Link>,
    code: ({ children }) => <code className="border-1 border-cyan-accent flex flex-col p-2 bg-neutral-500 bg-opacity-5 rounded-md indent-1 mb-4">{children}</code>,
    BulletPoints: (props) => <BulletPoints {...props}></BulletPoints>,
    ul: ({ children }) => <ul className={"mb-8"}>{children}</ul>,
    li: ({ children }) => <li className={"text-slate-700 dark:text-slate-300 font-normal min-[424px]:text-md min-[1350px]:text-lg text-base text-left mb-4"}>{children}</li>,
    ...components
  }
  // Allows customizing built-in components, e.g. to add styling.
  // return {
  //   h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
  //   ...components,
  // }
}

export function useDescriptionComponents(components) {
  return {
    p: ({ children }) => <p className={"text-slate-700 dark:text-slate-300 font-normal min-[424px]:text-md min-[1350px]:text-lg text-base text-left sm:text-justify"}>{children}</p>,
    strong: ({ children }) => <strong className={"text-slate-700 dark:text-slate-50"}>{children}</strong>,
    a: ({ children, ...props }) => <Link className={"text-cyan-accent min-[424px]:text-md min-[1350px]:text-lg text-base hover:cursor-pointer"} href={props.href}>{children}</Link>,
    ...components
  }
}

export function useBulletPointComponents(hangingIndent, components) {
  return {
    p: ({ children }) => <p className={(hangingIndent ? "indent-[-2rem] ml-6 " : "") + "text-slate-700 dark:text-slate-300 font-normal min-[424px]:text-md min-[1350px]:text-lg text-base text-left"}>{children}</p>,
    strong: ({ children }) => <strong className={"text-slate-700 dark:text-slate-50"}>{children}</strong>,
    a: ({ children, ...props }) => <Link className={"text-cyan-accent min-[424px]:text-md min-[1350px]:text-lg text-base hover:cursor-pointer"} style={{ overflowWrap: "anywhere" }} href={props.href}>{children}</Link>,
    ...components
  }
}