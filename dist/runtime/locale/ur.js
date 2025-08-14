import { ur } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...ur,
  messages: {
    ...ur.messages,
    authForm: {
      submit: "\u062C\u0627\u0631\u06CC \u0631\u06A9\u06BE\u06CC\u06BA",
      hidePassword: "\u067E\u0627\u0633 \u0648\u0631\u0688 \u0686\u06BE\u067E\u0627\u0626\u06CC\u06BA",
      showPassword: "\u067E\u0627\u0633 \u0648\u0631\u0688 \u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA"
    },
    banner: {
      close: "\u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA"
    },
    chatPrompt: {
      placeholder: "\u06CC\u06C1\u0627\u06BA \u0627\u067E\u0646\u0627 \u067E\u06CC\u063A\u0627\u0645 \u0644\u06A9\u06BE\u06CC\u06BA"
    },
    chatPromptSubmit: {
      label: "\u067E\u06CC\u063A\u0627\u0645 \u0628\u06BE\u06CC\u062C\u06CC\u06BA"
    },
    colorMode: {
      system: "\u0633\u0633\u0679\u0645",
      light: "\u0631\u0648\u0634\u0646",
      dark: "\u062A\u0627\u0631\u06CC\u06A9",
      switchToLight: "\u0631\u0648\u0634\u0646 \u0645\u0648\u0688 \u0645\u06CC\u06BA \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0631\u06CC\u06BA",
      switchToDark: "\u062A\u0627\u0631\u06CC\u06A9 \u0645\u0648\u0688 \u0645\u06CC\u06BA \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0631\u06CC\u06BA"
    },
    contentSearch: {
      links: "\u0644\u0646\u06A9\u0633",
      theme: "\u062A\u06BE\u06CC\u0645"
    },
    contentSearchButton: {
      label: "\u062A\u0644\u0627\u0634 \u06A9\u0631\u06CC\u06BA..."
    },
    contentToc: {
      title: "\u0627\u0633 \u0635\u0641\u062D\u06D2 \u067E\u0631"
    },
    dashboardSearch: {
      theme: "\u062A\u06BE\u06CC\u0645"
    },
    dashboardSearchButton: {
      label: "\u062A\u0644\u0627\u0634 \u06A9\u0631\u06CC\u06BA..."
    },
    dashboardSidebarCollapse: {
      expand: "\u0633\u0627\u0626\u06CC\u0688 \u0628\u0627\u0631 \u06A9\u0648 \u067E\u06BE\u06CC\u0644\u0627\u0626\u06CC\u06BA",
      collapse: "\u0633\u0627\u0626\u06CC\u0688 \u0628\u0627\u0631 \u06A9\u0648 \u0633\u06A9\u06CC\u0691\u06CC\u06BA"
    },
    dashboardSidebarToggle: {
      close: "\u0633\u0627\u0626\u06CC\u0688 \u0628\u0627\u0631 \u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",
      open: "\u0633\u0627\u0626\u06CC\u0688 \u0628\u0627\u0631 \u06A9\u06BE\u0648\u0644\u06CC\u06BA"
    },
    error: {
      clear: "\u06C1\u0648\u0645 \u067E\u06CC\u062C \u067E\u0631 \u0648\u0627\u067E\u0633 \u062C\u0627\u0626\u06CC\u06BA"
    },
    header: {
      close: "\u0645\u06CC\u0646\u0648 \u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",
      open: "\u0645\u06CC\u0646\u0648 \u06A9\u06BE\u0648\u0644\u06CC\u06BA"
    },
    pricingTable: {
      caption: "\u0642\u06CC\u0645\u062A \u067E\u0644\u0646\u0632 \u06A9\u06CC \u0645\u0642\u0627\u06CC\u0633\u06C1"
    },
    prose: {
      codeCollapse: {
        name: "\u06A9\u0648\u0688",
        openText: "\u067E\u06BE\u06CC\u0644\u0627\u0626\u06CC\u06BA",
        closeText: "\u0633\u06A9\u06CC\u0691\u06CC\u06BA"
      },
      collapsible: {
        name: "\u062E\u0635\u0648\u0635\u06CC\u0627\u062A",
        openText: "\u062F\u06A9\u06BE\u0627\u0626\u06CC\u06BA",
        closeText: "\u0686\u06BE\u067E\u0627\u0626\u06CC\u06BA"
      },
      pre: {
        copy: "\u06A9\u0648\u0688 \u06A9\u0627\u067E\u06CC \u06A9\u0631\u06CC\u06BA"
      }
    }
  }
});
