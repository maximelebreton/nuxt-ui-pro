import { lt } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...lt,
  messages: {
    ...lt.messages,
    authForm: {
      submit: "T\u0119sti",
      hidePassword: "Sl\u0117pti slapta\u017Eod\u012F",
      showPassword: "Rodyti slapta\u017Eod\u012F"
    },
    banner: {
      close: "U\u017Edaryti"
    },
    chatPrompt: {
      placeholder: "\u012Eveskite savo \u017Einut\u0119 \u010Dia..."
    },
    chatPromptSubmit: {
      label: "Si\u0173sti \u017Einut\u0119"
    },
    colorMode: {
      system: "Sistema",
      light: "\u0160viesus",
      dark: "Tamsus",
      switchToLight: "Perjungti \u012F \u0161vies\u0173 re\u017Eim\u0105",
      switchToDark: "Perjungti \u012F tams\u0173 re\u017Eim\u0105"
    },
    contentSearch: {
      links: "Nuorodos",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "Ie\u0161koti..."
    },
    contentToc: {
      title: "\u0160iame puslapyje"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "Ie\u0161koti..."
    },
    dashboardSidebarCollapse: {
      expand: "I\u0161pl\u0117sti \u0161onin\u0119 juost\u0105",
      collapse: "Suskleisti \u0161onin\u0119 juost\u0105"
    },
    dashboardSidebarToggle: {
      close: "U\u017Edaryti \u0161onin\u0119 juost\u0105",
      open: "Atidaryti \u0161onin\u0119 juost\u0105"
    },
    error: {
      clear: "Gr\u012F\u017Eti \u012F prad\u017Ei\u0105"
    },
    header: {
      close: "U\u017Edaryti meniu",
      open: "Atidaryti meniu"
    },
    pricingTable: {
      caption: "Kain\u0173 plan\u0173 palyginimas"
    },
    prose: {
      codeCollapse: {
        name: "kodas",
        openText: "I\u0161pl\u0117sti",
        closeText: "Suskleisti"
      },
      collapsible: {
        name: "savyb\u0117s",
        openText: "Rodyti",
        closeText: "Sl\u0117pti"
      },
      pre: {
        copy: "Kopijuoti kod\u0105 \u012F i\u0161karpin\u0119"
      }
    }
  }
});
