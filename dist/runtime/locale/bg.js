import { bg } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...bg,
  messages: {
    ...bg.messages,
    authForm: {
      submit: "\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0438",
      hidePassword: "\u0421\u043A\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430",
      showPassword: "\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430"
    },
    banner: {
      close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438"
    },
    chatPrompt: {
      placeholder: "\u0412\u044A\u0432\u0435\u0434\u0435\u0442\u0435 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435..."
    },
    chatPromptSubmit: {
      label: "\u0418\u0437\u043F\u0440\u0430\u0442\u0438"
    },
    colorMode: {
      system: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430",
      light: "\u0421\u0432\u0435\u0442\u043B\u043E",
      dark: "\u0422\u044A\u043C\u043D\u043E",
      switchToLight: "\u041F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0438 \u043A\u044A\u043C \u0441\u0432\u0435\u0442\u044A\u043B \u0440\u0435\u0436\u0438\u043C",
      switchToDark: "\u041F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0438 \u043A\u044A\u043C \u0442\u044A\u043C\u0435\u043D \u0440\u0435\u0436\u0438\u043C"
    },
    contentSearch: {
      links: "\u0412\u0440\u044A\u0437\u043A\u0438",
      theme: "\u0422\u0435\u043C\u0430"
    },
    contentSearchButton: {
      label: "\u0422\u044A\u0440\u0441\u0435\u043D\u0435"
    },
    contentToc: {
      title: "\u0421\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435"
    },
    dashboardSearch: {
      theme: "\u0422\u0435\u043C\u0430"
    },
    dashboardSearchButton: {
      label: "\u0422\u044A\u0440\u0441\u0435\u043D\u0435"
    },
    dashboardSidebarCollapse: {
      expand: "\u0420\u0430\u0437\u0448\u0438\u0440\u0438",
      collapse: "\u0421\u0432\u0438\u0439"
    },
    dashboardSidebarToggle: {
      close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438",
      open: "\u041E\u0442\u0432\u043E\u0440\u0438"
    },
    error: {
      clear: "\u0418\u0437\u0447\u0438\u0441\u0442\u0438"
    },
    header: {
      close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438",
      open: "\u041E\u0442\u0432\u043E\u0440\u0438"
    },
    pricingTable: {
      caption: "\u0426\u0435\u043D\u043E\u0432\u0430 \u0442\u0430\u0431\u043B\u0438\u0446\u0430"
    },
    prose: {
      codeCollapse: {
        name: "\u043A\u043E\u0434",
        openText: "\u0420\u0430\u0437\u0433\u044A\u043D\u0438",
        closeText: "\u0421\u0433\u044A\u043D\u0438"
      },
      collapsible: {
        name: "\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430",
        openText: "\u041F\u043E\u043A\u0430\u0436\u0438",
        closeText: "\u0421\u043A\u0440\u0438\u0439"
      },
      pre: {
        copy: "\u041A\u043E\u043F\u0438\u0440\u0430\u0439 \u043A\u043E\u0434\u0430 \u0432 \u043A\u043B\u0438\u043F\u0431\u043E\u0440\u0434\u0430"
      }
    }
  }
});
