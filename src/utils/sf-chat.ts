//@ts-nocheck
interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export function initChat(
  lang: "fr" | "en",
  user: User,
  defaultIssue: string,
  displayHelpButton = true
) {
  const gslbBaseURL = window.embedded_svc ? "https://service.force.com" : null;

  embedded_svc.settings.displayHelpButton = displayHelpButton; //Or false
  embedded_svc.settings.language = lang; //For example, enter 'en' or 'en-US'

  embedded_svc.settings.defaultMinimizedText =
    lang === "fr" ? "Besoin d'aide ? ON" : "Need help ? ON"; //(Defaults to Chat with an Expert)
  embedded_svc.settings.disabledMinimizedText =
    lang === "fr" ? "Besoin d'aide ? OFF 1" : "Need help ? OFF 1"; //(Defaults to Agent Offline)
  embedded_svc.settings.offlineSupportMinimizedText =
    lang === "fr" ? "Contactez-nous OFF 2" : "Contact-Us OFF 2"; //(Defaults to Agent Offline)

  embedded_svc.settings.prepopulatedPrechatFields = {
    Subject:
      lang === "fr"
        ? "Besoin d'aide avec ma déclaration"
        : "Need help with my declaration",
  };

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

  toutEvent();

  embedded_svc.init(
    "https://valobat--chatbot.sandbox.my.salesforce.com",
    "https://valobat--chatbot.sandbox.my.site.com/callcenter",
    gslbBaseURL || null,
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

  toutEvent();
}

export const popChatBox = () => {
  embedded_svc.bootstrapEmbeddedService();
};
const toutEvent = () => {
  embedded_svc.addEventHandler("onHelpButtonClick", function (data) {
    console.log("onHelpButtonClick event was fired.");
  });

  embedded_svc.addEventHandler("onChatRequestSuccess", function (data) {
    console.log(
      "onChatRequestSuccess event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onChatEstablished", function (data) {
    console.log(
      "onChatEstablished event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onChasitorMessage", function (data) {
    console.log(
      "onChasitorMessage event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onAgentMessage", function (data) {
    console.log(
      "onAgentMessage event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onChatConferenceInitiated", function (data) {
    console.log(
      "onChatConferenceInitiated event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onAgentJoinedConference", function (data) {
    console.log(
      "onAgentJoinedConference event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onAgentLeftConference", function (data) {
    console.log(
      "onAgentLeftConference event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onChatConferenceEnded", function (data) {
    console.log(
      "onChatConferenceEnded event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onChatTransferSuccessful", function (data) {
    console.log(
      "onChatTransferSuccessful event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onChatEndedByChasitor", function (data) {
    console.log(
      "onChatEndedByChasitor event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onChatEndedByAgent", function (data) {
    console.log(
      "onChatEndedByAgent event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onQueueUpdate", function (data) {
    console.log(
      "onQueueUpdate event was fired. liveAgentSessionKey was " +
        data.liveAgentSessionKey +
        "and queuePosition was " +
        data.queuePosition
    );
  });

  embedded_svc.addEventHandler("onIdleTimeoutOccurred", function (data) {
    console.log(
      "onIdleTimeoutOccurred event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onConnectionError", function (data) {
    console.log(
      "onConnectionError event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onClickSubmitButton", function (data) {
    console.log(
      "onClickSubmitButton event was fired.  liveAgentSessionKey was " +
        data.liveAgentSessionKey
    );
  });

  embedded_svc.addEventHandler("onInviteAccepted", function () {
    console.log("onInviteAccepted event was fired.");
  });

  embedded_svc.addEventHandler("onInviteRejected", function () {
    console.log("onInviteRejected event was fired.");
  });

  embedded_svc.addEventHandler("onInvitationResourceLoaded", function () {
    console.log("onInvitationResourceLoaded event was fired.");
  });

  embedded_svc.addEventHandler("onSettingsCallCompleted", function (data) {
    console.log(
      "onSettingsCallCompleted event was fired. Agent availability status is " +
        data.isAgentAvailable
        ? "online"
        : "offline"
    );
  });

  embedded_svc.addEventHandler("onAvailability", function (data) {
    console.log(
      "onAvailability event was fired. Agent availability status is " +
        data.isAgentAvailable
        ? "online"
        : "offline"
    );
  });
};
