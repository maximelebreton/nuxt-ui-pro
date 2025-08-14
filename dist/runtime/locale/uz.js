import { uz } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...uz,
  messages: {
    ...uz.messages,
    authForm: {
      submit: "Davom etish",
      hidePassword: "Parolni yashirish",
      showPassword: "Parolni ko'rsatish"
    },
    banner: {
      close: "Yopish"
    },
    chatPrompt: {
      placeholder: "Bu yerda savolingizni yozing..."
    },
    chatPromptSubmit: {
      label: "Jo'natish"
    },
    colorMode: {
      system: "Tizim",
      light: "Yorug'",
      dark: "Qorong'i",
      switchToLight: "Yorug' rejimga o'tish",
      switchToDark: "Qorong'i rejimga o'tish"
    },
    contentSearch: {
      links: "Havolalar",
      theme: "Mavzu"
    },
    contentSearchButton: {
      label: "Qidirish..."
    },
    contentToc: {
      title: "Ushbu sahifada"
    },
    dashboardSearch: {
      theme: "Mavzu"
    },
    dashboardSearchButton: {
      label: "Qidirish..."
    },
    dashboardSidebarCollapse: {
      expand: "Yon panelni kengaytirish",
      collapse: "Yon panelni yig'ish"
    },
    dashboardSidebarToggle: {
      close: "Yon panelni yopish",
      open: "Yon panelni ochish"
    },
    error: {
      clear: "Bosh sahifaga qaytish"
    },
    header: {
      close: "Menyuni yopish",
      open: "Menyuni ochish"
    },
    pricingTable: {
      caption: "Narx planlarini taqqoslash"
    },
    prose: {
      codeCollapse: {
        name: "kod",
        openText: "Kengaytirish",
        closeText: "Yig'ish"
      },
      collapsible: {
        name: "xususiyatlar",
        openText: "Ko'rsatish",
        closeText: "Yashirish"
      },
      pre: {
        copy: "Koddan buferga nusxa olish"
      }
    }
  }
});
