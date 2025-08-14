import { tj } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...tj,
  messages: {
    ...tj.messages,
    authForm: {
      submit: "\u0418\u0434\u043E\u043C\u0430 \u0434\u043E\u0434\u0430\u043D",
      hidePassword: "\u041F\u0438\u043D\u04B3\u043E\u043D \u043A\u0430\u0440\u0434\u0430\u043D\u0438 \u043F\u0430\u0440\u043E\u043B",
      showPassword: "\u041D\u0430\u043C\u043E\u0438\u0448\u0438 \u043F\u0430\u0440\u043E\u043B"
    },
    banner: {
      close: "\u041F\u04EF\u0448\u0438\u0434\u0430\u043D"
    },
    chatPrompt: {
      placeholder: "\u041F\u0430\u0439\u0451\u043C \u0432\u043E\u0440\u0438\u0434 \u043A\u0443\u043D\u0435\u0434..."
    },
    chatPromptSubmit: {
      label: "\u0424\u0438\u0440\u0438\u0441\u0442\u043E\u0434\u0430\u043D"
    },
    colorMode: {
      system: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430",
      light: "\u0420\u04EF\u0448\u043D\u043E",
      dark: "\u0422\u043E\u0440\u0438\u043A",
      switchToLight: "\u0413\u0443\u0437\u0430\u0440\u0438\u0448 \u0431\u0430 \u04B3\u043E\u043B\u0430\u0442\u0438 \u0440\u04EF\u0448\u043D\u043E",
      switchToDark: "\u0413\u0443\u0437\u0430\u0440\u0438\u0448 \u0431\u0430 \u04B3\u043E\u043B\u0430\u0442\u0438 \u0442\u043E\u0440\u0438\u043A"
    },
    contentSearch: {
      links: "\u041F\u0430\u0439\u0432\u0430\u043D\u0434\u04B3\u043E",
      theme: "\u041C\u0430\u0432\u0437\u04EF\u044A"
    },
    contentSearchButton: {
      label: "\u04B6\u0443\u0441\u0442\u0443\u04B7\u04EF"
    },
    contentToc: {
      title: "\u041C\u0443\u043D\u0434\u0430\u0440\u0438\u04B7\u0430"
    },
    dashboardSearch: {
      theme: "\u041C\u0430\u0432\u0437\u04EF\u044A"
    },
    dashboardSearchButton: {
      label: "\u04B6\u0443\u0441\u0442\u0443\u04B7\u04EF"
    },
    dashboardSidebarCollapse: {
      expand: "\u0412\u0430\u0441\u0435\u044A \u043A\u0430\u0440\u0434\u0430\u043D",
      collapse: "\u041A\u0430\u043C \u043A\u0430\u0440\u0434\u0430\u043D"
    },
    dashboardSidebarToggle: {
      close: "\u041F\u04EF\u0448\u0438\u0434\u0430\u043D",
      open: "\u041A\u0443\u0448\u043E\u0434\u0430\u043D"
    },
    error: {
      clear: "\u0422\u043E\u0437\u0430 \u043A\u0430\u0440\u0434\u0430\u043D"
    },
    header: {
      close: "\u041F\u04EF\u0448\u0438\u0434\u0430\u043D",
      open: "\u041A\u0443\u0448\u043E\u0434\u0430\u043D"
    },
    pricingTable: {
      caption: "\u04B6\u0430\u0434\u0432\u0430\u043B\u0438 \u043D\u0430\u0440\u0445\u04B3\u043E"
    },
    prose: {
      codeCollapse: {
        name: "\u043A\u043E\u0434",
        openText: "\u0412\u0430\u0441\u0435\u044A \u043A\u0430\u0440\u0434\u0430\u043D",
        closeText: "\u041A\u0430\u043C \u043A\u0430\u0440\u0434\u0430\u043D"
      },
      collapsible: {
        name: "\u0445\u0443\u0441\u0443\u0441\u0438\u044F\u0442\u04B3\u043E",
        openText: "\u041D\u0430\u043C\u043E\u0438\u0448 \u0434\u043E\u0434\u0430\u043D",
        closeText: "\u041F\u0438\u043D\u04B3\u043E\u043D \u043A\u0430\u0440\u0434\u0430\u043D"
      },
      pre: {
        copy: "\u041D\u0443\u0441\u0445\u0430 \u0431\u0430\u0440\u0434\u043E\u0448\u0442\u0430\u043D"
      }
    }
  }
});
