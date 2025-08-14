import { tr } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...tr,
  messages: {
    ...tr.messages,
    authForm: {
      submit: "Devam et",
      hidePassword: "\u015Eifreyi gizle",
      showPassword: "\u015Eifreyi g\xF6ster"
    },
    banner: {
      close: "Kapat"
    },
    chatPrompt: {
      placeholder: "Buraya mesaj\u0131n\u0131z\u0131 yaz\u0131n..."
    },
    chatPromptSubmit: {
      label: "G\xF6nder"
    },
    colorMode: {
      system: "Sistem",
      light: "A\xE7\u0131k",
      dark: "Koyu",
      switchToLight: "A\xE7\u0131k moda ge\xE7",
      switchToDark: "Koyu moda ge\xE7"
    },
    contentSearch: {
      links: "Ba\u011Flant\u0131lar",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "Ara..."
    },
    contentToc: {
      title: "Bu sayfada"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "Ara..."
    },
    dashboardSidebarCollapse: {
      expand: "Kenar \xE7ubu\u011Funu geni\u015Flet",
      collapse: "Kenar \xE7ubu\u011Funu daralt"
    },
    dashboardSidebarToggle: {
      close: "Kenar \xE7ubu\u011Funu kapat",
      open: "Kenar \xE7ubu\u011Funu a\xE7"
    },
    error: {
      clear: "Ana sayfaya d\xF6n"
    },
    header: {
      close: "Men\xFCy\xFC kapat",
      open: "Men\xFCy\xFC a\xE7"
    },
    pricingTable: {
      caption: "Fiyat planlar\u0131n\u0131 kar\u015F\u0131la\u015Ft\u0131r"
    },
    prose: {
      codeCollapse: {
        name: "kod",
        openText: "Geni\u015Flet",
        closeText: "Daralt"
      },
      collapsible: {
        name: "\xF6zellikler",
        openText: "G\xF6ster",
        closeText: "Gizle"
      },
      pre: {
        copy: "Kodu panoya kopyala"
      }
    }
  }
});
