import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script src="//servedby.eleavers.com/ads/ads.php?t=MjkxNTM7MTk0OTY7aG9yaXpvbnRhbC5sZWFkZXJib2FyZA==&index=1"></script>
                <script src={"/noflash.js"}></script>
                <meta property="og:title" content="Wavelength"/>
                <meta property="og:description" content="A science based approach to building muscle, losing fat, and getting stronger, arranged to be understood and accessible by all."/>
                <meta property="og:image" content="https://wavelength.fit/images/logo.png"/>
                <meta property="og:url" content="https://wavelength.fit"/>
                <meta property="og:type" content="website"/>
            </Head>
            <body>
                <script src={"/noflash.js"}></script>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
