import path from "path";
import fs from "fs";
import {EntireBodyMap} from "@/components/BodySVG";
import InformationBlock, {WarningBlock} from "@/components/InformationBlocks";
import {scroll} from "@/components/ContentScroll";
import {useRouter} from "next/router";

export default async function OldMarkdownRenderer({slug}) {
    const router = useRouter();
    const root = process.cwd();
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const category = slug[0];
    const topic = slug[1];
    const subtopic = slug[2] ? slug[2] : "";
    const subsubtopic = slug[3] ? slug[3] : "";

    const directory = path.join(root, '/data/pages', category);

    const loadLinkData = (link) => {
        let matches = [...link.matchAll(linkRegex)];
        let linkData = [];

        for (const match of matches) {
            const hyperlink = match[0]; // the entire hyperlink (e.g. [Google](/google/muscles))
            const text = match[1]; // the name of the link (e.g. Google)
            const url = match[2]; // the URL of the link (e.g. /google/muscles)
            const startIndex = match.index; // the starting index of the hyperlink in the original string
            const endIndex = startIndex + hyperlink.length; // the ending index of the hyperlink in the original string

            linkData.push({
                match,
                url,
                text,
                startIndex,
                endIndex
            });
        }

        return linkData;
    }
    function analyzeMarkdown(modifiedLine) {
        let pieces = [];

        function processBold() {
            const boldStart = modifiedLine.indexOf("**");
            const boldEnd = modifiedLine.indexOf("**", boldStart + 2);
            const bold = modifiedLine.substring(boldStart + 2, boldEnd);

            pieces.push({
                "type": "p",
                "class": "inline",
                "content": modifiedLine.substring(0, boldStart)
            });

            pieces.push({
                "type": "p",
                "class": "inline font-bold text-slate-900 dark:text-slate-50",
                "content": bold
            });

            modifiedLine = modifiedLine.substring(boldEnd + 2);
        }

        function processLinks() {
            pieces.forEach((piece, i) => {
                if (piece.type !== "p") return;

                let linkIndex = i;

                if (piece.content.match(linkRegex))
                    pieces.splice(linkIndex, 1);

                while (piece.content.match(linkRegex)) {
                    let linkDataArray = loadLinkData(piece.content);

                    for (const linkData of linkDataArray) {
                        pieces.splice(linkIndex, 0, {
                            "type": "p",
                            "class": "inline",
                            "content": piece.content.substring(0, linkData.startIndex)
                        });

                        pieces.splice(linkIndex + 1, 0, {
                            "type": "a",
                            "class": "inline text-cyan-accent dark:text-link-text hover:cursor-pointer",
                            "url": linkData.url,
                            "content": linkData.text
                        });

                        linkIndex += 2; // Increment linkIndex for the next link
                    }

                    piece.content = piece.content.substring(linkDataArray[linkDataArray.length - 1].endIndex); // Update content to the remaining part
                }

                if (linkIndex !== i) pieces.splice(linkIndex, 0, piece);
            });
        }

        function processCode() {
            while (modifiedLine.includes("`")) {
                const codeStart = modifiedLine.indexOf("`");
                const codeEnd = modifiedLine.indexOf("`", codeStart + 1);
                const code = modifiedLine.substring(codeStart + 1, codeEnd);

                pieces.push({
                    "type": "p",
                    "class": "inline",
                    "content": modifiedLine.substring(0, codeStart)
                });

                pieces.push({
                    "type": "code",
                    "class": "border-1 border-cyan-accent flex flex-col p-2 bg-neutral-500 bg-opacity-5 rounded-md indent-1",
                    "content": code
                });

                modifiedLine = modifiedLine.substring(codeEnd + 1);
            }
        }

        while (modifiedLine.includes("**")) {
            processBold();
        }

        processLinks();
        processCode();

        return {
            pieces,
            modifiedLine
        };
    }

    const handleClick = (link) => {
        router.push({
            pathname: link.split("#")[0],
            hash: link.split("#")[1]
        }).then(() => scroll());
    };

    try {
        // Use fs.promises.readFile to read the file asynchronously on the server
        const mdContents = await fs.promises.readFile(directory + '/' + topic + (subtopic === "" ? "" : "/" + subtopic) + (subsubtopic === "" ? "" : "/" + subsubtopic) + '.md', 'utf8');
        const lines = mdContents.split('\n');
        let jsx = []
        let headers = [];
        let currentBulletPoints = [];

        lines.forEach((line, i) => {

            if (!line.startsWith("- ") && currentBulletPoints.length > 0) {
                jsx.push(<ul className={"block markerColor text-lg list-inside list-disc lg:gap-x-16 gap-y-8 lg:grid lg:grid-cols-2 h-min w-full ml-4 text-left"}>{currentBulletPoints}</ul>)

                currentBulletPoints = [];
            }

            if (line.match(/^#+\s/)) {
                const level = line.match(/^#+/)[0].length;
                const text = line.replace(/^#+/, '').trim();

                if (level === 1) headers.push(text + ":" + text.replace(" ", "-").toLowerCase())

                let c = "font-bold text-left flex items-center dark:text-slate-50 text-slate-900 ";

                switch (level) {
                    case 1:
                        c += "min-[424px]:text-3xl text-2xl mt-12 pb-3"
                        break;
                    case 2:
                        c += "text-xl"
                        break;
                    case 3:
                        c += "text-lg"
                        break;
                }

                jsx.push(<h id={text.replace(/ /g, '-').toLowerCase() + 'x'} className={c}>{text}</h>)
                return;
            }

            if (line.startsWith('>EntireBodySvg')) {
                jsx.push(<EntireBodyMap/>);
                return;
            }

            if (line.startsWith("> ")) {
                let title = "Note"
                if (line.match(/<([^<>]+)>/gm)) {
                    title = /<([^<>]+)>/gm.exec(line)[1];
                }

                jsx.push(<InformationBlock title={title} content={line.replace("> ", "")}/>);
                return;
            }

            if (line.startsWith(">! ")) {
                let title = "Note"
                if (line.match(/<([^<>]+)>/gm)) {
                    title = /<([^<>]+)>/gm.exec(line)[1];
                }

                jsx.push(<WarningBlock title={title} content={line.replace("> ", "")}/>);
                return;
            }

            if (line.startsWith(">code ")) {
                jsx.push(<div dangerouslySetInnerHTML={{ __html: line.replace(">code ", "")}}></div>)
                return;
            }

            // add support for bullet points
            if (line.startsWith("- ")) {
                // look for bolded words, if so, that means it is the title, so add it to the list of bullet points
                let title = {};
                if (line.includes("**")) {
                    const boldStart = line.indexOf("**");
                    const boldEnd = line.indexOf("**", boldStart + 2);
                    const bold = line.substring(boldStart + 2, boldEnd);

                    let inner = [];

                    if (bold.match(linkRegex)) {
                        const linkData = loadLinkData(bold)

                        inner.push(<span>{bold.substring(0, linkData[0].startIndex)}</span>)

                        inner.push(<a onClick={() => handleClick(linkData[0].url)}>{linkData[0].text}</a>)

                        inner.push(<span>{bold.substring(linkData[0].endIndex, bold.length)}</span>)
                    }

                    title = <span className={"block font-bold text-xl dark:text-slate-50 mb-1 w-full"}>{inner.length > 0 ? inner : bold}</span>

                    line = line.substring(boldEnd + 2);
                }

                if (JSON.stringify(title) !== '{}') {
                    currentBulletPoints.push(
                        <li className={"pl-2 h-min"}>
                            {title}
                            <p className={"inline"}>{line.replace("- ", "")}</p>
                        </li>
                    )
                    return;
                }

                // if the current line is a bullet point, add it to the list of bullet points
                currentBulletPoints.push(
                    <li>{line.replace("- ", "")}</li>
                )
                return;
            }

            const {pieces, modifiedLine} = analyzeMarkdown(line);

            jsx = [...jsx, ...pieces];
            jsx.push(<p className={"inline"}>{modifiedLine}</p>)
        });

        const jsonContents = fs.readFileSync(directory + '/' + topic + (subtopic === "" ? "" : "/" + subtopic) + (subsubtopic === "" ? "" : "/" + subsubtopic) + '.json', 'utf-8');
        // Parse the JSON content into a JavaScript object
        const json = JSON.parse(jsonContents);

        return <div className={"min-[424px]:text-lg text-md mb-6 text-left sm:text-justify"}></div>
    } catch(err) {
        console.log(err);
        return <div className={"min-[424px]:text-lg text-md mb-6 text-left sm:text-justify"}>This page does not exist.</div>
    }
}