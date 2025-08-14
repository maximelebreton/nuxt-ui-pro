import { id } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...id,
  messages: {
    ...id.messages,
    authForm: {
      submit: "Lanjutkan",
      hidePassword: "Sembunyikan kata sandi",
      showPassword: "Tampilkan kata sandi"
    },
    banner: {
      close: "Tutup"
    },
    chatPrompt: {
      placeholder: "Tulis pesan Anda di sini..."
    },
    chatPromptSubmit: {
      label: "Kirim"
    },
    colorMode: {
      system: "Sistem",
      light: "Terang",
      dark: "Gelap",
      switchToLight: "Beralih ke mode terang",
      switchToDark: "Beralih ke mode gelap"
    },
    contentSearch: {
      links: "Tautan",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "Cari..."
    },
    contentToc: {
      title: "Pada halaman ini"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "Cari..."
    },
    dashboardSidebarCollapse: {
      expand: "Perluas sidebar",
      collapse: "Ciutkan sidebar"
    },
    dashboardSidebarToggle: {
      close: "Tutup sidebar",
      open: "Buka sidebar"
    },
    error: {
      clear: "Kembali ke beranda"
    },
    header: {
      close: "Tutup menu",
      open: "Buka menu"
    },
    pricingTable: {
      caption: "Perbandingan Harga"
    },
    prose: {
      codeCollapse: {
        name: "kode",
        openText: "Perluas",
        closeText: "Ciutkan"
      },
      collapsible: {
        name: "properti",
        openText: "Tampilkan",
        closeText: "Sembunyikan"
      },
      pre: {
        copy: "Salin kode ke clipboard"
      }
    }
  }
});
