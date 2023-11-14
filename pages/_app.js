import '@/styles/globals.css'
import "@/styles/ReactToastify.css"
import { Analytics } from '@vercel/analytics/react';
import {MDXProvider} from "@mdx-js/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>Wavelength</title>
              <script>window.msAdsQueue = window.msAdsQueue || [];</script>
              <script async src="https://adsdk.microsoft.com/pubcenter/sdk.js?siteId=10321781&publisherId=253109271" crossOrigin="anonymous"></script>
          </Head>
      <MDXProvider>
          <Component {...pageProps} />
      </MDXProvider>
        <Analytics />
      </>
  );
}
