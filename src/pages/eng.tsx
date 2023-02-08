import { initChatBot } from "@/utils/chatbot";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="gabin"
        src="https://playful-panda-3dtfr6-dev-ed.trailblaze.my.salesforce.com/embeddedservice/5.0/esw.min.js"
        onLoad={() => {
          initChatBot(
            "en",
            {
              firstName: "Usain",
              lastName: "Bolt",
              email: "bolt@gmail.com",
            },
            "Need help ?"
          );
        }}
      />
      <p>Chat in english</p>
    </>
  );
}
