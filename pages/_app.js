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
          </Head>
      <MDXProvider>
          <Component {...pageProps} />
      </MDXProvider>
        <Analytics />
      </>
  );
}
