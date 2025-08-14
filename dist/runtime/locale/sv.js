import { sv } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...sv,
  messages: {
    ...sv.messages,
    authForm: {
      submit: "Forts\xE4tt",
      hidePassword: "D\xF6lj l\xF6senord",
      showPassword: "Visa l\xF6senord"
    },
    banner: {
      close: "St\xE4ng"
    },
    chatPrompt: {
      placeholder: "Skriv ditt meddelande h\xE4r..."
    },
    chatPromptSubmit: {
      label: "Skicka"
    },
    colorMode: {
      system: "System",
      light: "Ljust",
      dark: "M\xF6rkt",
      switchToLight: "Byt till ljust l\xE4ge",
      switchToDark: "Byt till m\xF6rkt l\xE4ge"
    },
    contentSearch: {
      links: "L\xE4nkar",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "S\xF6k..."
    },
    contentToc: {
      title: "P\xE5 denna sida"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "S\xF6k..."
    },
    dashboardSidebarCollapse: {
      expand: "Expandera sidof\xE4ltet",
      collapse: "Minimera sidof\xE4ltet"
    },
    dashboardSidebarToggle: {
      close: "St\xE4ng sidof\xE4ltet",
      open: "\xD6ppna sidof\xE4ltet"
    },
    error: {
      clear: "Tillbaka till startsidan"
    },
    header: {
      close: "St\xE4ng menyn",
      open: "\xD6ppna menyn"
    },
    pricingTable: {
      caption: "Prisplanering"
    },
    prose: {
      codeCollapse: {
        name: "kod",
        openText: "Expandera",
        closeText: "Minimera"
      },
      collapsible: {
        name: "egenskaper",
        openText: "Visa",
        closeText: "D\xF6lj"
      },
      pre: {
        copy: "Kopiera kod till urklipp"
      }
    }
  }
});
