import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vanta Guard </title>
        <style>
          @import
          url(&quot;https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap)
        </style>
        <meta property="og:title" content="Vanta Guard " />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:description" content={``} />
        <meta property="og:url" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
