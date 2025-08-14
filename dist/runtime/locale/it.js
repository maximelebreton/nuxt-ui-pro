import { it } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...it,
  messages: {
    ...it.messages,
    authForm: {
      submit: "Continua",
      hidePassword: "Nascondi password",
      showPassword: "Mostra password"
    },
    banner: {
      close: "Chiudi"
    },
    chatPrompt: {
      placeholder: "Scrivi il tuo messaggio qui..."
    },
    chatPromptSubmit: {
      label: "Invia"
    },
    colorMode: {
      system: "Sistema",
      light: "Chiaro",
      dark: "Scuro",
      switchToLight: "Passa alla modalit\xE0 chiara",
      switchToDark: "Passa alla modalit\xE0 scura"
    },
    contentSearch: {
      links: "Collegamenti",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "Cerca..."
    },
    contentToc: {
      title: "In questa pagina"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "Cerca..."
    },
    dashboardSidebarCollapse: {
      expand: "Espandi barra laterale",
      collapse: "Comprimi barra laterale"
    },
    dashboardSidebarToggle: {
      close: "Chiudi barra laterale",
      open: "Apri barra laterale"
    },
    error: {
      clear: "Torna alla home"
    },
    header: {
      close: "Chiudi menu",
      open: "Apri menu"
    },
    pricingTable: {
      caption: "Confronto dei piani di prezzo"
    },
    prose: {
      codeCollapse: {
        name: "codice",
        openText: "Espandi",
        closeText: "Comprimi"
      },
      collapsible: {
        name: "propriet\xE0",
        openText: "Mostra",
        closeText: "Nascondi"
      },
      pre: {
        copy: "Copia codice negli appunti"
      }
    }
  }
});
