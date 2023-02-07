// @ts-nocheck

const initESW = (
  gslbBaseURL: string,
  lang: string,
  user: User,
  defaultIssue: string
) => {
  embedded_svc.settings.displayHelpButton = true; //Or false
  embedded_svc.settings.language = lang; //For example, enter 'en' or 'en-US'

  embedded_svc.settings.defaultMinimizedText = "Vous avez besoin d'aide ?"; //(Defaults to Chat with an Expert)
  embedded_svc.settings.disabledMinimizedText = "Vous avez besoin d'aide ?"; //(Defaults to Agent Offline)

  embedded_svc.settings.extraPrechatInfo = [
    {
      entityName: "Contact",
      showOnCreate: true,
      linkToEntityName: "Case",
      linkToEntityField: "ContactId",
      saveToTranscript: "Contact",
      entityFieldMaps: [
        {
          isExactMatch: true,
          fieldName: "FirstName",
          doCreate: true,
          doFind: true,
          label: "firstName",
        },
        {
          isExactMatch: true,
          fieldName: "LastName",
          doCreate: true,
          doFind: true,
          label: "LastName",
        },
        {
          isExactMatch: true,
          fieldName: "Email",
          doCreate: true,
          doFind: true,
          label: "Email",
        },
      ],
    },
    {
      entityName: "Case",
      showOnCreate: true,
      saveToTranscript: "Case",
      entityFieldMaps: [
        {
          isExactMatch: false,
          fieldName: "Subject",
          doCreate: true,
          doFind: false,
          label: "issue",
        },
        {
          isExactMatch: false,
          fieldName: "Status",
          doCreate: true,
          doFind: false,
          label: "Status",
        },
        {
          isExactMatch: false,
          fieldName: "Origin",
          doCreate: true,
          doFind: false,
          label: "Origin",
        },
      ],
    },
    {
      entityName: "Account",
      showOnCreate: true,
      entityFieldMaps: [
        {
          isExactMatch: true,
          fieldName: "Name",
          doCreate: true,
          doFind: true,
          label: "LastName",
        },
      ],
    },
  ];

  embedded_svc.settings.extraPrechatFormDetails = [
    {
      label: "firstName",
      value: user.firstName,
      transcriptFields: [],
      displayToAgent: true,
    },
    {
      label: "LastName",
      value: user.lastName,
      transcriptFields: [],
      displayToAgent: false,
    },
    {
      label: "Email",
      value: user.email,
      transcriptFields: [],
      displayToAgent: true,
    },
    {
      label: "issue",
      value: defaultIssue,
      transcriptFields: [],
      displayToAgent: true,
    },
  ];

  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  embedded_svc.init(
    "https://playful-panda-3dtfr6-dev-ed.trailblaze.my.salesforce.com",
    "https://playful-panda-3dtfr6-dev-ed.trailblaze.my.salesforce-sites.com/liveAgentSetupFlow",
    gslbBaseURL,
    "00D8d0000092iIm",
    "Valobot_group",
    {
      baseLiveAgentContentURL:
        "https://c.la1-c2-lo2.salesforceliveagent.com/content",
      deploymentId: "5728d000000kW36",
      buttonId: "5738d000000kX5b",
      baseLiveAgentURL: "https://d.la1-c2-lo2.salesforceliveagent.com/chat",
      eswLiveAgentDevName: "Valobot_group",
      isOfflineSupportEnabled: true,
    }
  );
};

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export const initChatBot = (
  lang: string,
  user: User,
  defaultIssue = "Besoin d'aide déclaration"
) => {
  if (!window.embedded_svc) {
    initESW(null, lang, user, defaultIssue);
  } else {
    initESW("https://service.force.com", lang, user, defaultIssue);
  }
};

export const popChatBot = () => {
  console.log("pop chat");
  embedded_svc.bootstrapEmbeddedService();
};
