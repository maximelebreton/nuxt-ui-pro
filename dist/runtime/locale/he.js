import { he } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...he,
  messages: {
    ...he.messages,
    authForm: {
      submit: "\u05D4\u05DE\u05E9\u05DA",
      hidePassword: "\u05D4\u05E1\u05EA\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4",
      showPassword: "\u05D4\u05E6\u05D2 \u05E1\u05D9\u05E1\u05DE\u05D4"
    },
    banner: {
      close: "\u05E1\u05D2\u05D5\u05E8"
    },
    chatPrompt: {
      placeholder: "\u05DB\u05EA\u05D5\u05D1 \u05D0\u05EA \u05D4\u05D4\u05D5\u05D3\u05E2\u05D4 \u05E9\u05DC\u05DA \u05DB\u05D0\u05DF..."
    },
    chatPromptSubmit: {
      label: "\u05E9\u05DC\u05D7"
    },
    colorMode: {
      system: "\u05DE\u05E2\u05E8\u05DB\u05EA",
      light: "\u05D1\u05D4\u05D9\u05E8",
      dark: "\u05DB\u05D4\u05D4",
      switchToLight: "\u05E2\u05D1\u05D5\u05E8 \u05DC\u05DE\u05E6\u05D1 \u05D1\u05D4\u05D9\u05E8",
      switchToDark: "\u05E2\u05D1\u05D5\u05E8 \u05DC\u05DE\u05E6\u05D1 \u05DB\u05D4\u05D4"
    },
    contentSearch: {
      links: "\u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",
      theme: "\u05E2\u05E8\u05DB\u05EA \u05E0\u05D5\u05E9\u05D0"
    },
    contentSearchButton: {
      label: "\u05D7\u05D9\u05E4\u05D5\u05E9..."
    },
    contentToc: {
      title: "\u05D1\u05D3\u05E3 \u05D6\u05D4"
    },
    dashboardSearch: {
      theme: "\u05E2\u05E8\u05DB\u05EA \u05E0\u05D5\u05E9\u05D0"
    },
    dashboardSearchButton: {
      label: "\u05D7\u05D9\u05E4\u05D5\u05E9..."
    },
    dashboardSidebarCollapse: {
      expand: "\u05D4\u05E8\u05D7\u05D1 \u05E1\u05E8\u05D2\u05DC \u05E6\u05D3",
      collapse: "\u05DB\u05D5\u05D5\u05E5 \u05E1\u05E8\u05D2\u05DC \u05E6\u05D3"
    },
    dashboardSidebarToggle: {
      close: "\u05E1\u05D2\u05D5\u05E8 \u05E1\u05E8\u05D2\u05DC \u05E6\u05D3",
      open: "\u05E4\u05EA\u05D7 \u05E1\u05E8\u05D2\u05DC \u05E6\u05D3"
    },
    error: {
      clear: "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA"
    },
    header: {
      close: "\u05E1\u05D2\u05D5\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8",
      open: "\u05E4\u05EA\u05D7 \u05EA\u05E4\u05E8\u05D9\u05D8"
    },
    pricingTable: {
      caption: "\u05E9\u05D9\u05E4\u05D5\u05E8 \u05DE\u05D7\u05D9\u05E8\u05D5\u05DF"
    },
    prose: {
      codeCollapse: {
        name: "\u05E7\u05D5\u05D3",
        openText: "\u05D4\u05E8\u05D7\u05D1",
        closeText: "\u05DB\u05D5\u05D5\u05E5"
      },
      collapsible: {
        name: "\u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD",
        openText: "\u05D4\u05E6\u05D2",
        closeText: "\u05D4\u05E1\u05EA\u05E8"
      },
      pre: {
        copy: "\u05D4\u05E2\u05EA\u05E7 \u05E7\u05D5\u05D3 \u05DC\u05DC\u05D5\u05D7"
      }
    }
  }
});
