import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2701716227191721"
                        crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="/noflash.css"/>
                <meta property="og:title" content="Wavelength"/>
                <meta property="og:description" content="A science based approach to building muscle, losing fat, and getting stronger, arranged to be understood and accessible by all."/>
                <meta property="og:image" content="https://wavelength.fit/logo.png"/>
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
