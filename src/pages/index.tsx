import { initChatBot } from "@/utils/sf-chat";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="gabin"
        src="https://playful-panda-3dtfr6-dev-ed.trailblaze.my.salesforce.com/embeddedservice/5.0/esw.min.js"
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
