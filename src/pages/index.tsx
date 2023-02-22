import { initChat } from "@/utils/sf-chat";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="sf-chat"
        src="https://valobat.my.salesforce.com/embeddedservice/5.0/esw.min.js"
        onLoad={() => {
          initChat(
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
