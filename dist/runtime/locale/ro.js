import { ro } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...ro,
  messages: {
    ...ro.messages,
    authForm: {
      submit: "Continu\u0103",
      hidePassword: "Ascunde parola",
      showPassword: "Arat\u0103 parola"
    },
    banner: {
      close: "\xCEnchide"
    },
    chatPrompt: {
      placeholder: "Scrie\u021Bi mesajul dvs. aici..."
    },
    chatPromptSubmit: {
      label: "Trimite"
    },
    colorMode: {
      system: "Sistem",
      light: "Luminos",
      dark: "\xCEntunecat",
      switchToLight: "Comut\u0103 la modul luminos",
      switchToDark: "Comut\u0103 la modul \xEEntunecat"
    },
    contentSearch: {
      links: "Linkuri",
      theme: "Tem\u0103"
    },
    contentSearchButton: {
      label: "Caut\u0103..."
    },
    contentToc: {
      title: "Pe aceast\u0103 pagin\u0103"
    },
    dashboardSearch: {
      theme: "Tem\u0103"
    },
    dashboardSearchButton: {
      label: "Caut\u0103..."
    },
    dashboardSidebarCollapse: {
      expand: "Extinde bara lateral\u0103",
      collapse: "Restr\xE2nge bara lateral\u0103"
    },
    dashboardSidebarToggle: {
      close: "\xCEnchide bara lateral\u0103",
      open: "Deschide bara lateral\u0103"
    },
    error: {
      clear: "\xCEnapoi la pagina principal\u0103"
    },
    header: {
      close: "\xCEnchide meniul",
      open: "Deschide meniul"
    },
    pricingTable: {
      caption: "Comparare pre\u021Buri"
    },
    prose: {
      codeCollapse: {
        name: "cod",
        openText: "Extinde",
        closeText: "Restr\xE2nge"
      },
      collapsible: {
        name: "propriet\u0103\u021Bi",
        openText: "Afi\u0219eaz\u0103",
        closeText: "Ascunde"
      },
      pre: {
        copy: "Copiaz\u0103 codul \xEEn clipboard"
      }
    }
  }
});
