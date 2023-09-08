import React from "react";
import {useRouter} from "next/router";
import {scroll} from "@/components/ContentScroll";

export default function Content({id, title, content, bulletPoints}) {
    const spans = content ? content.split("-.-") : [];
    const regex = /\[([^\],]*),([\p{L}\d\s.,-]*)\]/ug; // regex to match the hyperlink pattern /\[([^\],]*),([a-zA-Z\d\s.,À-ÖØ-öø-ÿ]*)\]/g
    const router = useRouter();

    const handleClick = (link) => {
        // console.log(link.replace(/#.*$/, ''));
        // console.log(link.replace(/#.*$/, '') === (new URL(window.location.href).pathname.replace(/#.*$/, '')));
        // if (link.replace(/#.*$/, '') === (new URL(window.location.href).pathname.replace(/#.*$/, ''))) {
        //     router.push(link).then(() => scroll());
        //     return;
        // }
        router.push(link).then(() => scroll());
    };

    if (!bulletPoints) {
        bulletPoints = {};
    }

    const text = spans.map((block) => {
        return block
            .split("**")
            .map((block, index) => {
                const bold = index % 2 === 1;

                if (block.match(regex)) {
                    let match;
                    let lastMatch = 0;
                    const matches = []

                    while ((match = regex.exec(block)) !== null) {
                        const hyperlink = match[0]; // the entire match (e.g. [/google/muscles,Google])
                        const linkUrl = match[1]; // the URL of the link (e.g. /google/muscles)
                        const linkText = match[2]; // the name of the link (e.g. Google)
                        const startIndex = match.index; // the starting index of the hyperlink in the original string
                        const endIndex = startIndex + hyperlink.length; // the ending index of the hyperlink in the original string

                        // do something with the hyperlink, like replace it with an HTML anchor tag
                        matches.push(<span key={startIndex}>{block.substring(lastMatch, startIndex)}<a key={index} onClick={() => handleClick(linkUrl)} className={"text-cyan-accent dark:text-link-text hover:cursor-pointer"}>{linkText}</a></span>);
                        lastMatch = endIndex;
                    }
                    matches.push(block.substring(lastMatch, block.length));
                    return <span key={index}>{matches}</span>;
                }
                if (block.includes("`")) {
                    return block.split("`").map((block1, index) => {
                        if (index % 2 !== 1) return;

                        return <code
                            className={"border-1 border-neutral-700 flex flex-col p-2 bg-neutral-500 bg-opacity-5 rounded-md indent-1"}
                            key={index}>{block1}</code>;
                    });
                }
                if (bold)
                    return <b className="uline" key={index}>{block}</b>;

                return <span key={index}>{block}</span>; /* <div className={"tooltip"}>ToolTip</div> */
            });
    });

    const bullets = Object.values(bulletPoints).map((bullet) => {
        return bullet
            .split("**")
            .map((bullet, index) => {
                if (index % 2 === 1) {
                    return <b key={index}>{bullet}</b>;
                }

                return <span key={index}>{bullet}</span>;
            });
    });

    const analyzeBulletTitle = (title) => {
        const newRegex = /\[([^\],]*)\]/g;

        console.log(title);

        if (title.match(newRegex)) {
            let match;
            let lastMatch = 0;
            const matches = []

            while ((match = newRegex.exec(title)) !== null) {
                const hyperlink = match[0]; // the entire match (e.g. [/google/muscles,Google])
                const linkUrl = match[1]; // the URL of the link (e.g. /google/muscles)
                const startIndex = match.index; // the starting index of the hyperlink in the original string
                const endIndex = startIndex + hyperlink.length; // the ending index of the hyperlink in the original string

                // do something with the hyperlink, like replace it with an HTML anchor tag
                matches.push(<span className={"inline"} key={startIndex}>{title.substring(lastMatch, startIndex)}
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"
                         className={"ml-2 hover:cursor-pointer inline mb-1"} onClick={() => handleClick(linkUrl)}><path
                        className={"fill-cyan-accent"}
                        d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"/></svg></span>);
                lastMatch = endIndex;
            }
            matches.push(title.substring(lastMatch, title.length));
            return <p className={"mb-1"}><strong className={"text-xl dark:text-slate-50"}>{matches}</strong></p>;
        }

        return <p className={"mb-1"}><strong className={"text-xl dark:text-slate-50"}>{title}</strong></p>;
    }

    return (
        <div id={id + "x"} className="mt-12">
            <div className={"flex items-center"}>
                <a onClick={() => {
                    // copy the URL to the clipboard
                    if (window.location.href.includes("#")) {
                        router.push(window.location.href.split("#")[0] + "#" + id).then(r => scroll());
                    } else {
                        router.push(window.location.href + "#" + id).then(r => scroll());
                    }

                }}
                   className={"absolute -ml-8 flex items-center opacity-0 border-0 hover:opacity-100 hover:cursor-pointer transition-opacity duration-100 bg-neutral-700 rounded-md"}>
                    <div className={"w-6 h-6 flex items-center justify-center stroke-white"}>
                        <svg width="12" height="12" fill="none" aria-hidden="true">
                            <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" strokeWidth="1.5"
                                  strokeLinecap="round"></path>
                        </svg>
                    </div>
                </a>
                <a onClick={() => {
                    navigator.clipboard.writeText(window.location.href.split('#')[0] + "#" + id);
                }}
                   className={"absolute -ml-14 flex items-center opacity-0 border-0 hover:opacity-100 hover:cursor-pointer transition-opacity duration-100 bg-neutral-700 rounded-md"}>
                    <div className={"w-6 h-6 p-1.25 flex items-center justify-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M448 384H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V320c0 35.3-28.7 64-64 64zM64 128h96v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H256c8.8 0 16-7.2 16-16V416h48v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z"
                                fill={"white"}></path>
                        </svg>
                    </div>
                </a>
                <h1 id={id + "x"} className="text-3xl font-bold flex items-center dark:text-slate-50">
                    {title}
                </h1>
            </div>
            {text.length > 0 && <div className="flex flex-col mt-6 text-lg">
                {text.map((substring, index) => (
                    <div className={`mb-6 indent-4`} key={index}>{substring}</div>
                ))}
            </div>}
            {bullets.length > 0 &&
                <ul className={`text-lg list-inside ${text.length > 0 ? "" : "mt-6"} list-disc lg:grid w-full`}>
                    {bullets.map((key, index) => (
                        <li className={"mb-8 pl-4"} key={index}>
                            {analyzeBulletTitle(Object.keys(bulletPoints)[index])}
                            <span>{key}</span>
                        </li>
                    ))}
                </ul>}
        </div>
    )
}