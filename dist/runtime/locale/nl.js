import { nl } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...nl,
  messages: {
    ...nl.messages,
    authForm: {
      submit: "Doorgaan",
      hidePassword: "Wachtwoord verbergen",
      showPassword: "Wachtwoord tonen"
    },
    banner: {
      close: "Sluiten"
    },
    chatPrompt: {
      placeholder: "Schrijf hier je bericht..."
    },
    chatPromptSubmit: {
      label: "Versturen"
    },
    colorMode: {
      system: "Systeem",
      light: "Licht",
      dark: "Donker",
      switchToLight: "Overschakelen naar lichte modus",
      switchToDark: "Overschakelen naar donkere modus"
    },
    contentSearch: {
      links: "Links",
      theme: "Thema"
    },
    contentSearchButton: {
      label: "Zoeken..."
    },
    contentToc: {
      title: "Op deze pagina"
    },
    dashboardSearch: {
      theme: "Thema"
    },
    dashboardSearchButton: {
      label: "Zoeken..."
    },
    dashboardSidebarCollapse: {
      expand: "Zijbalk uitvouwen",
      collapse: "Zijbalk invouwen"
    },
    dashboardSidebarToggle: {
      close: "Zijbalk sluiten",
      open: "Zijbalk openen"
    },
    error: {
      clear: "Terug naar home"
    },
    header: {
      close: "Menu sluiten",
      open: "Menu openen"
    },
    pricingTable: {
      caption: "Prijsplanvergelijking"
    },
    prose: {
      codeCollapse: {
        name: "code",
        openText: "Uitvouwen",
        closeText: "Invouwen"
      },
      collapsible: {
        name: "eigenschappen",
        openText: "Tonen",
        closeText: "Verbergen"
      },
      pre: {
        copy: "Code naar klembord kopi\xEBren"
      }
    }
  }
});
