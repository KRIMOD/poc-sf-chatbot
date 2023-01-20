import SeoHead from "@/components/seo-head";
import { initChatBot } from "@/utils/chatbot";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <SeoHead title="POC - SF chatbot" />
      <main>
        <h1>Hello World</h1>
        <Script
          id="gabin"
          src="https://playful-panda-3dtfr6-dev-ed.trailblaze.my.salesforce.com/embeddedservice/5.0/esw.min.js"
          onLoad={() => {
            initChatBot();
          }}
        />
      </main>
    </>
  );
}
