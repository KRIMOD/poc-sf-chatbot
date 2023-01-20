// @ts-nocheck
import SeoHead from "@/components/seo-head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <SeoHead title="POC - SF chatbot" />
      <h1>Hello World</h1>
      <LiveAgent />
    </>
  );
}

const LiveAgent = () => {
  const initializeAgent = () => {
    liveagent.init(
      "https://d.la1-c2-lo2.salesforceliveagent.com/chat",
      "5728d000000kW36",
      "00D8d0000092iIm"
    );
    if (!window._laq) {
      window._laq = [];
    }
    window._laq.push(function () {
      liveagent.showWhenOffline(
        "5738d000000kWg1",
        document.getElementById("liveagent_button_offline_5738d000000kWg1")
      );
      liveagent.showWhenOnline(
        "5738d000000kWg1",
        document.getElementById("liveagent_button_online_5738d000000kWg1")
      );
    });
  };

  const initializeChat = () => {
    liveagent.addButtonEventHandler("Your_ID", function (e: any) {
      if (e == liveagent.BUTTON_EVENT.BUTTON_AVAILABLE) {
        liveagent.startChat("Your_ID");
      }
    });
    initializeAgent();
  };

  return (
    <section>
      <Script
        defer
        type="text/javascript"
        src="https://c.la1-c2-lo2.salesforceliveagent.com/content/g/js/56.0/deployment.js"
      />
      <div>
        <button
          onClick={initializeChat}
          id="liveagent_button_online_5738d000000kWg1"
        >
          Start Chat
        </button>
        <button
          style={{ display: "none" }}
          id="liveagent_button_offline_5738d000000kWg1"
        >
          There are no agents currently available
        </button>
      </div>
    </section>
  );
};
