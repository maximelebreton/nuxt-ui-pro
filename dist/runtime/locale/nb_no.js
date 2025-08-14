import { nb_no } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...nb_no,
  messages: {
    ...nb_no.messages,
    authForm: {
      submit: "Fortsett",
      hidePassword: "Skjul passord",
      showPassword: "Vis passord"
    },
    banner: {
      close: "Lukk"
    },
    chatPrompt: {
      placeholder: "Skriv din melding her..."
    },
    chatPromptSubmit: {
      label: "Send"
    },
    colorMode: {
      system: "System",
      light: "Lys",
      dark: "M\xF8rk",
      switchToLight: "Bytt til lys modus",
      switchToDark: "Bytt til m\xF8rk modus"
    },
    contentSearch: {
      links: "Lenker",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "S\xF8k..."
    },
    contentToc: {
      title: "P\xE5 denne siden"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "S\xF8k..."
    },
    dashboardSidebarCollapse: {
      expand: "Utvid sidepanel",
      collapse: "Skjul sidepanel"
    },
    dashboardSidebarToggle: {
      close: "Lukk sidepanel",
      open: "\xC5pne sidepanel"
    },
    error: {
      clear: "Tilbake til forsiden"
    },
    header: {
      close: "Lukk meny",
      open: "\xC5pne meny"
    },
    pricingTable: {
      caption: "Prisplaneringssammenligning"
    },
    prose: {
      codeCollapse: {
        name: "kode",
        openText: "Utvid",
        closeText: "Skjul"
      },
      collapsible: {
        name: "egenskaper",
        openText: "Vis",
        closeText: "Skjul"
      },
      pre: {
        copy: "Kopier kode til utklippstavle"
      }
    }
  }
});
