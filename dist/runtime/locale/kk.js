import { kk } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...kk,
  messages: {
    ...kk.messages,
    authForm: {
      submit: "\u0416\u0430\u043B\u0493\u0430\u0441\u0442\u044B\u0440\u0443",
      hidePassword: "\u049A\u04B1\u043F\u0438\u044F \u0441\u04E9\u0437\u0434\u0456 \u0436\u0430\u0441\u044B\u0440\u0443",
      showPassword: "\u049A\u04B1\u043F\u0438\u044F \u0441\u04E9\u0437\u0434\u0456 \u043A\u04E9\u0440\u0441\u0435\u0442\u0443"
    },
    banner: {
      close: "\u0416\u0430\u0431\u0443"
    },
    chatPrompt: {
      placeholder: "\u0425\u0430\u0431\u0430\u0440 \u0435\u043D\u0433\u0456\u0437\u0456\u04A3\u0456\u0437..."
    },
    chatPromptSubmit: {
      label: "\u0416\u0456\u0431\u0435\u0440\u0443"
    },
    colorMode: {
      system: "\u0416\u04AF\u0439\u0435",
      light: "\u0410\u0448\u044B\u049B",
      dark: "\u049A\u0430\u0440\u0430\u04A3\u0493\u044B",
      switchToLight: "\u0410\u0448\u044B\u049B \u0440\u0435\u0436\u0438\u043C\u0433\u0435 \u0430\u0443\u044B\u0441\u0443",
      switchToDark: "\u049A\u0430\u0440\u0430\u04A3\u0493\u044B \u0440\u0435\u0436\u0438\u043C\u0433\u0435 \u0430\u0443\u044B\u0441\u0443"
    },
    contentSearch: {
      links: "\u0421\u0456\u043B\u0442\u0435\u043C\u0435\u043B\u0435\u0440",
      theme: "\u0422\u0430\u049B\u044B\u0440\u044B\u043F"
    },
    contentSearchButton: {
      label: "\u0406\u0437\u0434\u0435\u0443"
    },
    contentToc: {
      title: "\u041C\u0430\u0437\u043C\u04B1\u043D\u044B"
    },
    dashboardSearch: {
      theme: "\u0422\u0430\u049B\u044B\u0440\u044B\u043F"
    },
    dashboardSearchButton: {
      label: "\u0406\u0437\u0434\u0435\u0443"
    },
    dashboardSidebarCollapse: {
      expand: "\u041A\u0435\u04A3\u0435\u0439\u0442\u0443",
      collapse: "\u0416\u0438\u044E"
    },
    dashboardSidebarToggle: {
      close: "\u0416\u0430\u0431\u0443",
      open: "\u0410\u0448\u0443"
    },
    error: {
      clear: "\u0422\u0430\u0437\u0430\u043B\u0430\u0443"
    },
    header: {
      close: "\u0416\u0430\u0431\u0443",
      open: "\u0410\u0448\u0443"
    },
    pricingTable: {
      caption: "\u0411\u0430\u0493\u0430 \u043A\u0435\u0441\u0442\u0435\u0441\u0456"
    },
    prose: {
      codeCollapse: {
        name: "\u043A\u043E\u0434",
        openText: "\u041A\u0435\u04A3\u0435\u0439\u0442\u0443",
        closeText: "\u0416\u0438\u044B\u0440\u0443"
      },
      collapsible: {
        name: "\u049B\u0430\u0441\u0438\u0435\u0442\u0442\u0435\u0440",
        openText: "\u041A\u04E9\u0440\u0441\u0435\u0442\u0443",
        closeText: "\u0416\u0430\u0441\u044B\u0440\u0443"
      },
      pre: {
        copy: "\u041A\u043E\u0434\u0442\u044B \u0430\u043B\u043C\u0430\u0441\u0443 \u0431\u0443\u0444\u0435\u0440\u0456\u043D\u0435 \u043A\u04E9\u0448\u0456\u0440\u0443"
      }
    }
  }
});
