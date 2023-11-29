aimport {Html, Head, Main, NextScript} from 'next/document'
import Script from "next/script";
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script src={"/noflash.js"}></script>
                <meta property="og:title" content="Wavelength"/>
                <meta property="og:description" content="A science based approach to building muscle, losing fat, and getting stronger, arranged to be understood and accessible by all."/>
                <meta property="og:image" content="https://wavelength.fit/images/logo.png"/>
                <meta property="og:url" content="https://www.wavelength.fit"/>
                <meta property="og:type" content="website"/>
                <meta name="monetag" content="96f7e6b3959d06fa47617cc95ff3ccf3"></meta>
            </Head>
            <body>
                <Script strategy={"beforeInteractive"} async src="https://www.googletagmanager.com/gtag/js?id=G-5376MG73KY"></Script>
                <Script strategy={"beforeInteractive"}>
                    {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', 'G-5376MG73KY');`}
                </Script>
                <Script src="//servedby.eleavers.com/ads/ads.php?t=MjkxNTM7MTk0OTY7aG9yaXpvbnRhbC5sZWFkZXJib2FyZA==&index=1"/>
                <Script strategy={"beforeInteractive"}>{"window.msAdsQueue = window.msAdsQueue || [];"}</Script>
                <Script strategy={"beforeInteractive"} async src="https://adsdk.microsoft.com/pubcenter/sdk.js?siteId=10321808&publisherId=253109271" crossOrigin="anonymous"></Script>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
