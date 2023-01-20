import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://service.force.com/embeddedservice/5.0/esw.min.js" />
      </body>
    </Html>
  );
}
