import {scrollPageToContent} from "@/components/ContentScroll";

export default function handleClick(link, router) {
    router.push({
        pathname: link.split("#")[0],
        hash: link.split("#")[1]
    });
};

export function openInNewTab(url) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}