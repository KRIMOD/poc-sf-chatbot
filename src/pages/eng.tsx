import { initChat } from "@/utils/sf-chat";
import Script from "next/script";

export default function HomeEn() {
  return (
    <>
      <Script
        id="sf-chat"
        src="https://valobat--chatbot.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js"
        onLoad={() => {
          initChat(
            "en",
            {
              firstName: "Usain",
              lastName: "Bolt",
              email: "bolt@gmail.com",
            },
            "Need help with declaration",
            true
          );
        }}
      />
      <p>Chat en anglais</p>
    </>
  );
}
