const initESW = (gslbBaseURL: string) => {
  embedded_svc.settings.displayHelpButton = true; //Or false
  embedded_svc.settings.language = ""; //For example, enter 'en' or 'en-US'

  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  embedded_svc.init(
    "https://playful-panda-3dtfr6-dev-ed.trailblaze.my.salesforce.com",
    "https://playful-panda-3dtfr6-dev-ed.trailblaze.my.salesforce-sites.com/liveAgentSetupFlow",
    gslbBaseURL,
    "00D8d0000092iIm",
    "Gabin_group",
    {
      baseLiveAgentContentURL:
        "https://c.la1-c2-lo2.salesforceliveagent.com/content",
      deploymentId: "5728d000000kW36",
      buttonId: "5738d000000kWg1",
      baseLiveAgentURL: "https://d.la1-c2-lo2.salesforceliveagent.com/chat",
      eswLiveAgentDevName: "Gabin_group",
      isOfflineSupportEnabled: true,
    }
  );
};

export const initChatBot = () => {
  if (!window.embedded_svc) {
    initESW(null);
  } else {
    initESW("https://service.force.com");
  }
};