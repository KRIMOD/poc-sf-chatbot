/**
 * @param {'fr' | 'en'} lang
 * @param {{firstName: string, lastName: string, email: string}} user - The employee who is responsible for the project.
 * @param {String?} defaultIssue - The employee's department.
 */

export function initChat(lang, user, defaultIssue, displayHelpButton = true) {
  const gslbBaseURL = window.embedded_svc ? "https://service.force.com" : null;

  embedded_svc.settings.displayHelpButton = displayHelpButton; //Or false
  embedded_svc.settings.language = lang; //For example, enter 'en' or 'en-US'

  embedded_svc.settings.defaultMinimizedText =
    lang === "fr" ? "Besoin d'aide ?" : "Need help ?"; //(Defaults to Chat with an Expert)
  embedded_svc.settings.offlineSupportMinimizedText =
    lang === "fr" ? "Contactez-nous" : "Contact-Us"; //(Defaults to Agent Offline)

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
          doCreate: false,
          doFind: true,
          label: "FirstName",
        },
        {
          isExactMatch: true,
          fieldName: "LastName",
          doCreate: false,
          doFind: true,
          label: "LastName",
        },
        {
          isExactMatch: true,
          fieldName: "Email",
          doCreate: false,
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
      linkToEntityName: "Case", // check
      linkToEntityField: "AccountId", // check
      saveToTranscript: "Account", // check
      entityFieldMaps: [
        {
          isExactMatch: true,
          fieldName: "Name",
          doCreate: false,
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
      value: "Chat - En ligne",
      transcriptFields: [],
      displayToAgent: true,
    },
  ];

  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  // toutEvent();
  embedded_svc.addEventHandler("onAvailability", function (data) {
    console.log(data);
    if (document.getElementById("SuppliedEmail") !== null) {
      document.getElementById("SuppliedEmail").value = "bolt@gmail.com";
    }
    // console.log(document.getElementById("SuppliedEmail"));
  });

  embedded_svc.init(
    "https://valobat.my.salesforce.com",
    "https://valobat.my.site.com/callcenter",
    gslbBaseURL,
    "00D0900000B5LzF",
    "Chat_Adherent_Group",
    {
      baseLiveAgentContentURL:
        "https://c.la1-core1.sfdc-urlt2q.salesforceliveagent.com/content",
      deploymentId: "572AX000000003Y",
      buttonId: "573AX000000002G",
      baseLiveAgentURL:
        "https://d.la1-core1.sfdc-urlt2q.salesforceliveagent.com/chat",
      eswLiveAgentDevName: "Chat_Adherent_Group",
      isOfflineSupportEnabled: true,
    }
  );

  initAndHideExternalKeys(user.email);
}

export const popChatBox = () => {
  embedded_svc.bootstrapEmbeddedService();
};

const initAndHideExternalKeys = (email) => {
  embedded_svc.addEventHandler("onAvailability", function (data) {
    if (document.getElementById("SuppliedEmail") !== null) {
      // email
      const elEmail = document.getElementById("SuppliedEmail");
      elEmail.value = email;
      elEmail.dispatchEvent(new Event("change", { bubbles: true }));
      const hiddenElEmail = (document.getElementsByClassName(
        "inputEmail"
      )[0].style.visibility = "hidden");
      //
      document.getElementById("Sujet_Chat__c").value = "";
      document.getElementById("Sujet_Chat__c-label").innerHTML =
        "Quelle est votre demande ?";
      document.getElementById("SuppliedPhone-label").innerHTML =
        "Numéro de téléphone";
    }
  });
};
