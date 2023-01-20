import SeoHead from "@/components/seo-head";
import { useEffect } from "react";
import { initESW } from "@/utils/chatbot";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <SeoHead title="POC - SF chatbot" />
      <main>
        <h1>Hello world</h1>
        <Script
          id="gabin"
          src="https://playful-panda-3dtfr6-dev-ed.trailblaze.my.salesforce.com/embeddedservice/5.0/esw.min.js"
          onLoad={() => {
            if (!window.embedded_svc) {
              initESW(null);
            } else {
              initESW("https://service.force.com");
            }
          }}
        />
      </main>
    </>
  );
}
