import { az } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...az,
  messages: {
    ...az.messages,
    authForm: {
      submit: "Davam et",
      hidePassword: "\u015Eifr\u0259ni gizl\u0259t",
      showPassword: "\u015Eifr\u0259ni g\xF6st\u0259r"
    },
    banner: {
      close: "Ba\u011Fla"
    },
    chatPrompt: {
      placeholder: "Buraya mesaj\u0131n\u0131z\u0131 yaz\u0131n..."
    },
    chatPromptSubmit: {
      label: "G\xF6nd\u0259r"
    },
    colorMode: {
      system: "Sistem",
      light: "\u0130\u015F\u0131ql\u0131",
      dark: "Qaranl\u0131q",
      switchToLight: "\u0130\u015F\u0131ql\u0131 rejim\u0259 ke\xE7",
      switchToDark: "Qaranl\u0131q rejim\u0259 ke\xE7"
    },
    contentSearch: {
      links: "Ba\u011Flant\u0131lar",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "Axtar..."
    },
    contentToc: {
      title: "Bu s\u0259hif\u0259d\u0259"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "Axtar..."
    },
    dashboardSidebarCollapse: {
      expand: "Yan paneli geni\u015Fl\u0259t",
      collapse: "Yan paneli daralt"
    },
    dashboardSidebarToggle: {
      close: "Yan paneli ba\u011Fla",
      open: "Yan paneli a\xE7"
    },
    error: {
      clear: "Ana s\u0259hif\u0259y\u0259 qay\u0131t"
    },
    header: {
      close: "Menyunu ba\u011Fla",
      open: "Menyunu a\xE7"
    },
    pricingTable: {
      caption: "Qiym\u0259t planlar\u0131n\u0131n m\xFCqayis\u0259si"
    },
    prose: {
      codeCollapse: {
        name: "kod",
        openText: "Geni\u015Fl\u0259t",
        closeText: "Daralt"
      },
      collapsible: {
        name: "x\xFCsusiyy\u0259tl\u0259r",
        openText: "G\xF6st\u0259r",
        closeText: "Gizl\u0259t"
      },
      pre: {
        copy: "Kodu bufer\u0259 kopyala"
      }
    }
  }
});
