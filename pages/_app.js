import '@/styles/globals.css'
import "@/styles/ReactToastify.css"
import { Analytics } from '@vercel/analytics/react';
import {MDXProvider} from "@mdx-js/react";

export default function App({ Component, pageProps }) {
  return (
      <>
      <MDXProvider>
          <Component {...pageProps} />
      </MDXProvider>
        <Analytics />
      </>
  );
}
