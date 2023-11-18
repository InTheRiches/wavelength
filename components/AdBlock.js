import React, {useEffect} from "react";
import Script from "next/script";

export default function AdBlock({ id }) {
    document.getElementById()
    return [
        <div id={"ms-ad-250487314"}></div>,
        <Script strategy={"lazyOnload"}>{`window.msAdsQueue.push(() => {
            window.pubCenterSdk.render({
                adUnitId: "250487314",
                elementId: "ms-ad-250487314"
            });
        });`}</Script>
    ]
}