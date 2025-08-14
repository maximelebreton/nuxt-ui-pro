import { de } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...de,
  messages: {
    ...de.messages,
    authForm: {
      submit: "Weiter",
      hidePassword: "Passwort verbergen",
      showPassword: "Passwort anzeigen"
    },
    banner: {
      close: "Schlie\xDFen"
    },
    chatPrompt: {
      placeholder: "Hier schreiben Sie Ihre Nachricht..."
    },
    chatPromptSubmit: {
      label: "Senden"
    },
    colorMode: {
      system: "System",
      light: "Hell",
      dark: "Dunkel",
      switchToLight: "Zum hellen Modus wechseln",
      switchToDark: "Zum dunklen Modus wechseln"
    },
    contentSearch: {
      links: "Links",
      theme: "Theme"
    },
    contentSearchButton: {
      label: "Suchen..."
    },
    contentToc: {
      title: "Auf dieser Seite"
    },
    dashboardSearch: {
      theme: "Theme"
    },
    dashboardSearchButton: {
      label: "Suchen..."
    },
    dashboardSidebarCollapse: {
      expand: "Seitenleiste erweitern",
      collapse: "Seitenleiste einklappen"
    },
    dashboardSidebarToggle: {
      close: "Seitenleiste schlie\xDFen",
      open: "Seitenleiste \xF6ffnen"
    },
    error: {
      clear: "Zur\xFCck zur Startseite"
    },
    header: {
      close: "Men\xFC schlie\xDFen",
      open: "Men\xFC \xF6ffnen"
    },
    pricingTable: {
      caption: "Preisplanvergleich"
    },
    prose: {
      codeCollapse: {
        name: "Code",
        openText: "Erweitern",
        closeText: "Reduzieren"
      },
      collapsible: {
        name: "Eigenschaften",
        openText: "Anzeigen",
        closeText: "Ausblenden"
      },
      pre: {
        copy: "Code in die Zwischenablage kopieren"
      }
    }
  }
});
