import { initChatBot } from "@/utils/sf-chat";
import Script from "next/script";

export default function HomeEn() {
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
            "Need help with declaration"
          );
        }}
      />
      <p>Chat en anglais</p>
    </>
  );
}
