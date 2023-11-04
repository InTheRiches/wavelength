import '@/styles/globals.css'
import "@/styles/ReactToastify.css"
import { Analytics } from '@vercel/analytics/react';
import {MDXProvider} from "@mdx-js/react";

import { EntireBodyMap } from '@/components/BodySVG';
import InformationBlock, {WarningBlock} from "@/components/InformationBlocks";

const components = { EntireBodyMap, InformationBlock, WarningBlock }

export default function App({ Component, pageProps }) {
  return (
      <>
      <MDXProvider components={components}>
          <Component {...pageProps} />
      </MDXProvider>
        <Analytics />
      </>
  );
}
