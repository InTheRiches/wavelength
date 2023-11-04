import React from 'react';
import {scroll} from "@/components/ContentScroll";
import {router} from "next/client";

const MarkdownRenderer = ({ markdownText }) => {
    // Define regular expressions to match Markdown syntax
    const boldRegex = /\*\*(.*?)\*\*/g;
    const italicRegex = /\*(.*?)\*/g;
    const codeRegex = /`(.*?)`/g;
    const linkRegex = /\[([^\]]*)\]\(([^)]*)\)/g;
    const headerRegex = /^(#{1,6})\s(.+)/gm;
    const lineBreakRegex = /\n/g;
    const bulletPointGroupRegex = /---(.*?)---/gms;

    const handleLinkClick = (link) => {
        router.push({
            pathname: link.split("#")[0],
            hash: link.split("#")[1]
        }).then(() => scroll());
    };

    const renderMarkdown = (text) => {

        text = text.replace(headerRegex, (match, level, headerText) => {
            const headerLevel = level.length;

            let c = "font-bold inline dark:text-slate-50 text-slate-900 ";

            switch(headerLevel) {
                case 1:
                    c += "leading-[4rem] min-[424px]:text-[1.875rem] text-2xl"
                    break;
                case 2:
                    c += "text-xl"
                    break;
                case 3:
                    c += "text-lg"
                    break;
            }

            return `<h${headerLevel} class='${c}'>${headerText}</h${headerLevel}>`;
        });

        if (text.match(bulletPointGroupRegex)) {

        }

        // Replace Markdown syntax with corresponding HTML tags
        let htmlText = text
            .replace(lineBreakRegex, '<br />')
            .replace(boldRegex, '<p class="inline font-bold text-slate-900 dark:text-slate-50">$1</p>')
            .replace(italicRegex, '<em>$1</em>')
            .replace(codeRegex, '<code class="border-1 border-cyan-accent flex flex-col p-2 bg-neutral-500 bg-opacity-5 rounded-md indent-1">$1</code>');

        if (htmlText.match(linkRegex)) {
            htmlText = htmlText.replace(linkRegex, React.createElement("a", {
                className: "inline text-cyan-accent dark:text-link-text hover:cursor-pointer",
                onClick: () => handleLinkClick($2)
            }, $1));
        }

        // Render the HTML
        return <div className={"text-left sm:text-justify min-[424px]:text-lg text-md"} dangerouslySetInnerHTML={{ __html: htmlText }} />;
    };

    return <div>{renderMarkdown(markdownText)}</div>;
};

export default MarkdownRenderer;