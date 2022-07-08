import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Create jaw-dropping mockups/animations. Just drag-drop your screen-recordings, select a template, and export"
        />
        <meta name="theme-color" content="#0069FE" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch.png"></link>

        <script
          async
          defer
          data-website-id="f5c90616-9ce9-44ed-9cac-9db56c19c785"
          src="https://umami.mohitya.dev/umami.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
