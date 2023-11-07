import {scrollPageToContent} from "@/components/ContentScroll";

export default function handleClick(link, router) {
    router.push({
        pathname: link.split("#")[0],
        hash: link.split("#")[1]
    }).then(() => {
        scrollPageToContent();
        console.log("scrolling to item");
    });
};