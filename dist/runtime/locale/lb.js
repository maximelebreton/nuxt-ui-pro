import { lb } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...lb,
  messages: {
    ...lb.messages,
    authForm: {
      submit: "Fortsch\xE9cken",
      hidePassword: "Passwuert verstoppen",
      showPassword: "Passwuert uweisen"
    },
    banner: {
      close: "Zoumaachen"
    },
    chatPrompt: {
      placeholder: "Tippt hei \xC4re Message..."
    },
    chatPromptSubmit: {
      label: "Prompt sch\xE9cken"
    },
    colorMode: {
      system: "System",
      light: "Liicht",
      dark: "Donkel",
      switchToLight: "Op de Liichtmodus wiesselen",
      switchToDark: "Op de Donkelmodus wiesselen"
    },
    contentSearch: {
      links: "Linken",
      theme: "Thema"
    },
    contentSearchButton: {
      label: "Sichen..."
    },
    contentToc: {
      title: "Op d\xEBser S\xE4it"
    },
    dashboardSearch: {
      theme: "Thema"
    },
    dashboardSearchButton: {
      label: "Sichen..."
    },
    dashboardSidebarCollapse: {
      expand: "Sidebar opklappen",
      collapse: "Sidebar zouklappen"
    },
    dashboardSidebarToggle: {
      close: "Sidebar zoumaachen",
      open: "Sidebar opmaachen"
    },
    error: {
      clear: "Zr\xE9ck op d\u2019Starts\xE4it"
    },
    header: {
      close: "Men\xFC zoumaachen",
      open: "Men\xFC opmaachen"
    },
    pricingTable: {
      caption: "Vergl\xE4ich vun de Pr\xE4ispl\xE4ng"
    },
    prose: {
      codeCollapse: {
        name: "code",
        openText: "Opklappen",
        closeText: "Zouklappen"
      },
      collapsible: {
        name: "eegenschaften",
        openText: "Uweisen",
        closeText: "Verstoppen"
      },
      pre: {
        copy: "Code an d'Zw\xEBschsp\xE4icher kop\xE9ieren"
      }
    }
  }
});
