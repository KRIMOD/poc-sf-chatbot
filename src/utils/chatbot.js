const initESW = (gslbBaseURL, lang, user, defaultIssue) => {
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
          label: "FirstName",
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
          label: "Issue",
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
      label: "FirstName",
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
      label: "Issue",
      value: defaultIssue,
      transcriptFields: [],
      displayToAgent: true,
    },
    {
      label: "Langage",
      value: lang,
      transcriptFields: ["Langage__c"],
      displayToAgent: true,
    },
    {
      label: "Origin",
      value: "Web",
      transcriptFields: [],
      displayToAgent: true,
    },
  ];

  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  embedded_svc.init(
    "https://valobat--chatbot.sandbox.my.salesforce.com",
    "https://valobat--chatbot.sandbox.my.site.com/callcenter",
    gslbBaseURL,
    "00DAW000001Jllp",
    "Chat_Adherent",
    {
      baseLiveAgentContentURL:
        "https://c.la2s-core1.sfdc-urlt2q.salesforceliveagent.com/content",
      deploymentId: "572AW000000xmBt",
      buttonId: "573AW000000ECsX",
      baseLiveAgentURL:
        "https://d.la2s-core1.sfdc-urlt2q.salesforceliveagent.com/chat",
      eswLiveAgentDevName: "Chat_Adherent",
      isOfflineSupportEnabled: true,
    }
  );
};

/**
 * @param {'fr' | 'en'} lang
 * @param {{firstName: string, lastName: string, email: string}} user - The employee who is responsible for the project.
 * @param {String?} defaultIssue - The employee's department.
 */
export const initChatBot = (
  lang,
  user,
  defaultIssue = "Besoin d'aide déclaration"
) => {
  if (!window.embedded_svc) {
    initESW(null, lang, user, defaultIssue);
  } else {
    initESW("https://service.force.com", lang, user, defaultIssue);
  }
};
