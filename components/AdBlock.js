import React, {useEffect} from "react";
import Script from "next/script";

export default function AdBlock({ id }) {
    return [
        <div id={id}></div>,
        <Script strategy={"beforeInteractive"}>{`window.msAdsQueue.push(() => {
            window.pubCenterSdk.render({
                adUnitId: "971707729",
                elementId: "ms-ad-971707729"
            });
        });`}</Script>
    ]
}