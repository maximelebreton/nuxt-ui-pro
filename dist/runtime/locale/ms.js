import { ms } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...ms,
  messages: {
    ...ms.messages,
    authForm: {
      submit: "Teruskan",
      hidePassword: "Sembunyikan kata laluan",
      showPassword: "Tunjukkan kata laluan"
    },
    banner: {
      close: "Tutup"
    },
    chatPrompt: {
      placeholder: "Taip mesej anda di sini..."
    },
    chatPromptSubmit: {
      label: "Hantar mesej"
    },
    colorMode: {
      system: "Sistem",
      light: "Cerah",
      dark: "Gelap",
      switchToLight: "Tukar ke mod cerah",
      switchToDark: "Tukar ke mod gelap"
    },
    contentSearch: {
      links: "Pautan",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "Cari..."
    },
    contentToc: {
      title: "Di halaman ini"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "Cari..."
    },
    dashboardSidebarCollapse: {
      expand: "Kembangkan bar sisi",
      collapse: "Runtuhkan bar sisi"
    },
    dashboardSidebarToggle: {
      close: "Tutup bar sisi",
      open: "Buka bar sisi"
    },
    error: {
      clear: "Kembali ke laman utama"
    },
    header: {
      close: "Tutup menu",
      open: "Buka menu"
    },
    pricingTable: {
      caption: "Perbandingan pelan harga"
    },
    prose: {
      codeCollapse: {
        name: "kod",
        openText: "Kembangkan",
        closeText: "Runtuhkan"
      },
      collapsible: {
        name: "ciri",
        openText: "Tunjukkan",
        closeText: "Sembunyikan"
      },
      pre: {
        copy: "Salin kod ke papan klip"
      }
    }
  }
});
