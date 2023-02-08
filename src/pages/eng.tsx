import { initChatBot } from "@/utils/sf-chat";
import Script from "next/script";

export default function HomeEn() {
  return (
    <>
      {/* <Script
        id="fb-sf-chat"
        src="https://service.force.com/embeddedservice/5.0/esw.min.js"
      /> */}
      <Script
        id="sf-chat"
        src="https://valobat--chatbot.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js"
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
