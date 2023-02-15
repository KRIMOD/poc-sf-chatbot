import { initChat } from "@/utils/sf-chat";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // @ts-expect-error
    document.getElementById("SuppliedEmail").value = user.email;
    // @ts-expect-error
    document.getElementsByClassName("inputEmail")[0].style.visibility =
      "hidden";
  }, [scriptLoaded]);

  // };

  return (
    <>
      <Script
        id="sf-chat"
        src="https://valobat--chatbot.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js"
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
          setScriptLoaded(true);
        }}
      />
      <p>Chat en français</p>
      {/* <input
        type="checkbox"
        id="displayHelpButton"
        onChange={handleChange}
        checked={displayHelpButton}
      /> */}
      {/* <label htmlFor="displayHelpButton">Toggle help button</label> */}
    </>
  );
}
