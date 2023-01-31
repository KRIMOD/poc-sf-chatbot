// @ts-nocheck
const initESW = (gslbBaseURL: string) => {
  embedded_svc.settings.displayHelpButton = false; //Or false
  embedded_svc.settings.language = "fr"; //For example, enter 'en' or 'en-US'

  embedded_svc.settings.defaultMinimizedText = "Vous avez besoin d'aide ?"; //(Defaults to Chat with an Expert)
  embedded_svc.settings.disabledMinimizedText = "Vous avez besoin d'aide ?"; //(Defaults to Agent Offline)

  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  embedded_svc.settings.extraPrechatInfo = [
    {
      entityFieldMaps: [
        {
          doCreate: false,
          doFind: true,
          fieldName: "LastName",
          isExactMatch: true,
          label: "Last Name",
        },
        {
          doCreate: false,
          doFind: true,
          fieldName: "FirstName",
          isExactMatch: true,
          label: "First Name",
        },
        {
          doCreate: false,
          doFind: true,
          fieldName: "Email",
          isExactMatch: true,
          label: "Email",
        },
      ],
      entityName: "Contact",
    },
  ];

  embedded_svc.settings.extraPrechatFormDetails = [
    // {
    //   label: "First Name",
    //   value: "Krimo",
    //   displayToAgent: true,
    // },
    // {
    //   label: "Last Name",
    //   value: "Temam",
    //   displayToAgent: true,
    // },
    {
      label: "Email",
      value: "gm_temam@esi.dz",
      displayToAgent: true,
    },
    {
      label: "issue",
      value: "Overriding your setup",
      displayToAgent: true,
    },
  ];

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

export const popChatBot = () => {
  console.log("pop chat");
  embedded_svc.bootstrapEmbeddedService();
};
