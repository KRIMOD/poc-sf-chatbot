import { initChatBot } from "@/utils/sf-chat";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="fb-sf-chat"
        src="https://service.force.com/embeddedservice/5.0/esw.min.js"
      />
      <Script
        id="sf-chat"
        src="https://valobat--chatbot.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js"
        onLoad={() => {
          initChatBot(
            "fr",
            {
              firstName: "Usain",
              lastName: "Bolt",
              email: "bolt@gmail.com",
            },
            "Besoin d'aide sur déclaration"
          );
        }}
      />
      <p>Chat en français</p>
    </>
  );
}
