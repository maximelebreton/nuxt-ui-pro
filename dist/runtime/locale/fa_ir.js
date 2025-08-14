import { fa_ir } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...fa_ir,
  messages: {
    ...fa_ir.messages,
    authForm: {
      submit: "\u0627\u062F\u0627\u0645\u0647",
      hidePassword: "\u067E\u0646\u0647\u0627\u0646 \u06A9\u0631\u062F\u0646 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
      showPassword: "\u0646\u0645\u0627\u06CC\u0634 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"
    },
    banner: {
      close: "\u0628\u0633\u062A\u0646"
    },
    chatPrompt: {
      placeholder: "\u0627\u06CC\u0646\u062C\u0627 \u067E\u06CC\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
    },
    chatPromptSubmit: {
      label: "\u0627\u0631\u0633\u0627\u0644"
    },
    colorMode: {
      system: "\u0633\u06CC\u0633\u062A\u0645",
      light: "\u0631\u0648\u0634\u0646",
      dark: "\u062A\u06CC\u0631\u0647",
      switchToLight: "\u062A\u063A\u06CC\u06CC\u0631 \u0628\u0647 \u062D\u0627\u0644\u062A \u0631\u0648\u0634\u0646",
      switchToDark: "\u062A\u063A\u06CC\u06CC\u0631 \u0628\u0647 \u062D\u0627\u0644\u062A \u062A\u06CC\u0631\u0647"
    },
    contentSearch: {
      links: "\u067E\u06CC\u0648\u0646\u062F\u0647\u0627",
      theme: "\u062A\u0645"
    },
    contentSearchButton: {
      label: "\u062C\u0633\u062A\u062C\u0648..."
    },
    contentToc: {
      title: "\u062F\u0631 \u0627\u06CC\u0646 \u0635\u0641\u062D\u0647"
    },
    dashboardSearch: {
      theme: "\u062A\u0645"
    },
    dashboardSearchButton: {
      label: "\u062C\u0633\u062A\u062C\u0648..."
    },
    dashboardSidebarCollapse: {
      expand: "\u06AF\u0633\u062A\u0631\u0634 \u0646\u0648\u0627\u0631 \u06A9\u0646\u0627\u0631\u06CC",
      collapse: "\u062C\u0645\u0639 \u06A9\u0631\u062F\u0646 \u0646\u0648\u0627\u0631 \u06A9\u0646\u0627\u0631\u06CC"
    },
    dashboardSidebarToggle: {
      close: "\u0628\u0633\u062A\u0646 \u0646\u0648\u0627\u0631 \u06A9\u0646\u0627\u0631\u06CC",
      open: "\u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0646\u0648\u0627\u0631 \u06A9\u0646\u0627\u0631\u06CC"
    },
    error: {
      clear: "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC"
    },
    header: {
      close: "\u0628\u0633\u062A\u0646 \u0645\u0646\u0648",
      open: "\u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0645\u0646\u0648"
    },
    pricingTable: {
      caption: "\u0645\u0642\u0627\u06CC\u0633\u0647 \u0637\u0631\u062D \u0642\u06CC\u0645\u062A"
    },
    prose: {
      codeCollapse: {
        name: "\u06A9\u062F",
        openText: "\u06AF\u0633\u062A\u0631\u0634",
        closeText: "\u062C\u0645\u0639 \u06A9\u0631\u062F\u0646"
      },
      collapsible: {
        name: "\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627",
        openText: "\u0646\u0645\u0627\u06CC\u0634",
        closeText: "\u067E\u0646\u0647\u0627\u0646"
      },
      pre: {
        copy: "\u06A9\u067E\u06CC \u06A9\u062F \u062F\u0631 \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F"
      }
    }
  }
});
