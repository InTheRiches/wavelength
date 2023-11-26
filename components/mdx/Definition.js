import { Tooltip } from 'react-tooltip'

export default function Definition({ text, definition }) {
    return [
        <span id={text.replaceAll(" ", "-").toLowerCase()} className="decoration-dashed underline">
            {text}
        </span>,
        <Tooltip className={"dark:bg-neutral-950 bg-white dark:text-slate-50 text-neutral-900"} disableStyleInjection={"core"} anchorSelect={"#" + text.replaceAll(" ", "-").toLowerCase()} place="top">
            {definition}
        </Tooltip>
    ];
}