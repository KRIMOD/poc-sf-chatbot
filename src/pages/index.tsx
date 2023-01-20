import SeoHead from "@/components/seo-head";
import { initChatBot } from "@/utils/chatbot";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <SeoHead title="POC - SF chatbot" />
      <h1>Hello World</h1>
    </>
  );
}
