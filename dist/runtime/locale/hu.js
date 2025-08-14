import { hu } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...hu,
  messages: {
    ...hu.messages,
    authForm: {
      submit: "Folytat\xE1s",
      hidePassword: "Jelsz\xF3 elrejt\xE9se",
      showPassword: "Jelsz\xF3 megjelen\xEDt\xE9se"
    },
    banner: {
      close: "Bez\xE1r\xE1s"
    },
    chatPrompt: {
      placeholder: "\xCDrd be a k\xE9rd\xE9sedet itt..."
    },
    chatPromptSubmit: {
      label: "K\xFCld\xE9s"
    },
    colorMode: {
      system: "Rendszer",
      light: "Vil\xE1gos",
      dark: "S\xF6t\xE9t",
      switchToLight: "V\xE1lt\xE1s vil\xE1gos m\xF3dra",
      switchToDark: "V\xE1lt\xE1s s\xF6t\xE9t m\xF3dra"
    },
    contentSearch: {
      links: "Linkek",
      theme: "T\xE9ma"
    },
    contentSearchButton: {
      label: "Keres\xE9s..."
    },
    contentToc: {
      title: "Ezen az oldalon"
    },
    dashboardSearch: {
      theme: "T\xE9ma"
    },
    dashboardSearchButton: {
      label: "Keres\xE9s..."
    },
    dashboardSidebarCollapse: {
      expand: "Oldals\xE1v kinyit\xE1sa",
      collapse: "Oldals\xE1v \xF6sszecsuk\xE1sa"
    },
    dashboardSidebarToggle: {
      close: "Oldals\xE1v bez\xE1r\xE1sa",
      open: "Oldals\xE1v megnyit\xE1sa"
    },
    error: {
      clear: "Vissza a f\u0151oldalra"
    },
    header: {
      close: "Men\xFC bez\xE1r\xE1sa",
      open: "Men\xFC megnyit\xE1sa"
    },
    pricingTable: {
      caption: "\xC1rlista \xF6sszehasonl\xEDt\xE1sa"
    },
    prose: {
      codeCollapse: {
        name: "k\xF3d",
        openText: "Kinyit",
        closeText: "\xD6sszecsuk"
      },
      collapsible: {
        name: "tulajdons\xE1gok",
        openText: "Mutat",
        closeText: "Elrejt"
      },
      pre: {
        copy: "K\xF3d m\xE1sol\xE1sa a v\xE1g\xF3lapra"
      }
    }
  }
});
