import '@/styles/globals.css'
import "@/styles/ReactToastify.css"
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
  );
}
