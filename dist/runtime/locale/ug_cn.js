import { ug_cn } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...ug_cn,
  messages: {
    ...ug_cn.messages,
    authForm: {
      submit: "\u062F\u06D5\u06CB\u0627\u0645 \u0642\u0649\u0644\u0649\u0634",
      hidePassword: "\u067E\u0627\u0631\u0648\u0644\u0646\u0649 \u064A\u0648\u0634\u06C7\u0631\u06C7\u0634",
      showPassword: "\u067E\u0627\u0631\u0648\u0644\u0646\u0649 \u0643\u06C6\u0631\u0633\u0649\u062A\u0649\u0634"
    },
    banner: {
      close: "\u062A\u0627\u0642\u0627\u0634"
    },
    chatPrompt: {
      placeholder: "\u062E\u06D5\u062A \u0643\u0649\u0631\u06AF\u06C8\u0632\u06C8\u06AD..."
    },
    chatPromptSubmit: {
      label: "\u064A\u0648\u0644\u0644\u0627\u0634"
    },
    colorMode: {
      system: "\u0633\u0649\u0633\u062A\u06D0\u0645\u0627",
      light: "\u064A\u0648\u0631\u06C7\u0642",
      dark: "\u0642\u0627\u0631\u0627\u06AD\u063A\u06C7",
      switchToLight: "\u064A\u0648\u0631\u06C7\u0642 \u06BE\u0627\u0644\u06D5\u062A\u0643\u06D5 \u0626\u0627\u0644\u0645\u0627\u0634\u062A\u06C7\u0631\u06C7\u0634",
      switchToDark: "\u0642\u0627\u0631\u0627\u06AD\u063A\u06C7 \u06BE\u0627\u0644\u06D5\u062A\u0643\u06D5 \u0626\u0627\u0644\u0645\u0627\u0634\u062A\u06C7\u0631\u06C7\u0634"
    },
    contentSearch: {
      links: "\u0626\u06C7\u0644\u0627\u0646\u0645\u0649\u0644\u0627\u0631",
      theme: "\u062A\u06D0\u0645\u0627"
    },
    contentSearchButton: {
      label: "\u0626\u0649\u0632\u062F\u06D5\u0634"
    },
    contentToc: {
      title: "\u0645\u06D5\u0632\u0645\u06C7\u0646"
    },
    dashboardSearch: {
      theme: "\u062A\u06D0\u0645\u0627"
    },
    dashboardSearchButton: {
      label: "\u0626\u0649\u0632\u062F\u06D5\u0634"
    },
    dashboardSidebarCollapse: {
      expand: "\u0643\u06D0\u06AD\u06D5\u064A\u062A\u0649\u0634",
      collapse: "\u062A\u0627\u0631\u0627\u064A\u062A\u0649\u0634"
    },
    dashboardSidebarToggle: {
      close: "\u062A\u0627\u0642\u0627\u0634",
      open: "\u0626\u06D0\u0686\u0649\u0634"
    },
    error: {
      clear: "\u062A\u0627\u0632\u0649\u0644\u0627\u0634"
    },
    header: {
      close: "\u062A\u0627\u0642\u0627\u0634",
      open: "\u0626\u06D0\u0686\u0649\u0634"
    },
    pricingTable: {
      caption: "\u0628\u0627\u06BE\u0627 \u062C\u06D5\u062F\u06CB\u0649\u0644\u0649"
    },
    prose: {
      codeCollapse: {
        name: "\u0643\u0648\u062F",
        openText: "\u0643\u06D0\u06AD\u06D5\u064A\u062A\u0649\u0634",
        closeText: "\u062A\u0627\u0631\u0627\u064A\u062A\u0649\u0634"
      },
      collapsible: {
        name: "\u062E\u0627\u0633\u0644\u0649\u0642\u0644\u0627\u0631",
        openText: "\u0643\u06C6\u0631\u0633\u0649\u062A\u0649\u0634",
        closeText: "\u064A\u0648\u0634\u06C7\u0631\u06C7\u0634"
      },
      pre: {
        copy: "\u0643\u06C6\u0686\u06C8\u0631\u06C8\u0634"
      }
    }
  }
});
