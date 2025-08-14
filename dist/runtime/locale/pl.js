import { pl } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...pl,
  messages: {
    ...pl.messages,
    authForm: {
      submit: "Kontynuuj",
      hidePassword: "Ukryj has\u0142o",
      showPassword: "Poka\u017C has\u0142o"
    },
    banner: {
      close: "Zamknij"
    },
    chatPrompt: {
      placeholder: "Tutaj wpisz swoj\u0105 wiadomo\u015B\u0107..."
    },
    chatPromptSubmit: {
      label: "Wy\u015Blij"
    },
    colorMode: {
      system: "System",
      light: "Jasny",
      dark: "Ciemny",
      switchToLight: "Prze\u0142\u0105cz na tryb jasny",
      switchToDark: "Prze\u0142\u0105cz na tryb ciemny"
    },
    contentSearch: {
      links: "Linki",
      theme: "Motyw"
    },
    contentSearchButton: {
      label: "Szukaj..."
    },
    contentToc: {
      title: "Na tej stronie"
    },
    dashboardSearch: {
      theme: "Motyw"
    },
    dashboardSearchButton: {
      label: "Szukaj..."
    },
    dashboardSidebarCollapse: {
      expand: "Rozwi\u0144 pasek boczny",
      collapse: "Zwi\u0144 pasek boczny"
    },
    dashboardSidebarToggle: {
      close: "Zamknij pasek boczny",
      open: "Otw\xF3rz pasek boczny"
    },
    error: {
      clear: "Powr\xF3t do strony g\u0142\xF3wnej"
    },
    header: {
      close: "Zamknij menu",
      open: "Otw\xF3rz menu"
    },
    pricingTable: {
      caption: "Por\xF3wnanie plan\xF3w cenowych"
    },
    prose: {
      codeCollapse: {
        name: "kod",
        openText: "Rozwi\u0144",
        closeText: "Zwi\u0144"
      },
      collapsible: {
        name: "w\u0142a\u015Bciwo\u015Bci",
        openText: "Poka\u017C",
        closeText: "Ukryj"
      },
      pre: {
        copy: "Kopiuj kod do schowka"
      }
    }
  }
});
