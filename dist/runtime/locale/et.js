import { et } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...et,
  messages: {
    ...et.messages,
    authForm: {
      submit: "J\xE4tka",
      hidePassword: "Peida parool",
      showPassword: "N\xE4ita parooli"
    },
    banner: {
      close: "Sulge"
    },
    chatPrompt: {
      placeholder: "Siia kirjutage oma s\xF5num..."
    },
    chatPromptSubmit: {
      label: "Saada"
    },
    colorMode: {
      system: "S\xFCsteem",
      light: "Hele",
      dark: "Tume",
      switchToLight: "L\xFClitu heledasse re\u017Eiimi",
      switchToDark: "L\xFClitu tumedasse re\u017Eiimi"
    },
    contentSearch: {
      links: "Lingid",
      theme: "Teema"
    },
    contentSearchButton: {
      label: "Otsi..."
    },
    contentToc: {
      title: "Sellel lehel"
    },
    dashboardSearch: {
      theme: "Teema"
    },
    dashboardSearchButton: {
      label: "Otsi..."
    },
    dashboardSidebarCollapse: {
      expand: "Laienda k\xFClgriba",
      collapse: "Ahenda k\xFClgriba"
    },
    dashboardSidebarToggle: {
      close: "Sulge k\xFClgriba",
      open: "Ava k\xFClgriba"
    },
    error: {
      clear: "Tagasi avalehele"
    },
    header: {
      close: "Sulge men\xFC\xFC",
      open: "Ava men\xFC\xFC"
    },
    pricingTable: {
      caption: "Hinna plaanide v\xF5rdlus"
    },
    prose: {
      codeCollapse: {
        name: "kood",
        openText: "Laienda",
        closeText: "Ahenda"
      },
      collapsible: {
        name: "omadused",
        openText: "N\xE4ita",
        closeText: "Peida"
      },
      pre: {
        copy: "Kopeeri kood l\xF5ikelauale"
      }
    }
  }
});
