import { cs } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...cs,
  messages: {
    ...cs.messages,
    authForm: {
      submit: "Pokra\u010Dovat",
      hidePassword: "Skr\xFDt heslo",
      showPassword: "Zobrazit heslo"
    },
    banner: {
      close: "Zav\u0159\xEDt"
    },
    chatPrompt: {
      placeholder: "Zde napi\u0161te sv\u016Fj text..."
    },
    chatPromptSubmit: {
      label: "Odeslat"
    },
    colorMode: {
      system: "Syst\xE9mov\xFD",
      light: "Sv\u011Btl\xFD",
      dark: "Tmav\xFD",
      switchToLight: "P\u0159epnout na sv\u011Btl\xFD re\u017Eim",
      switchToDark: "P\u0159epnout na tmav\xFD re\u017Eim"
    },
    contentSearch: {
      links: "Odkazy",
      theme: "T\xE9ma"
    },
    contentSearchButton: {
      label: "Hledat..."
    },
    contentToc: {
      title: "Na t\xE9to str\xE1nce"
    },
    dashboardSearch: {
      theme: "T\xE9ma"
    },
    dashboardSearchButton: {
      label: "Hledat..."
    },
    dashboardSidebarCollapse: {
      expand: "Rozbalit postrann\xED panel",
      collapse: "Sbalit postrann\xED panel"
    },
    dashboardSidebarToggle: {
      close: "Zav\u0159\xEDt postrann\xED panel",
      open: "Otev\u0159\xEDt postrann\xED panel"
    },
    error: {
      clear: "Zp\u011Bt na \xFAvod"
    },
    header: {
      close: "Zav\u0159\xEDt menu",
      open: "Otev\u0159\xEDt menu"
    },
    pricingTable: {
      caption: "Porovn\xE1n\xED cenov\xFDch pl\xE1n\u016F"
    },
    prose: {
      codeCollapse: {
        name: "k\xF3d",
        openText: "Rozbalit",
        closeText: "Sbalit"
      },
      collapsible: {
        name: "vlastnosti",
        openText: "Zobrazit",
        closeText: "Skr\xFDt"
      },
      pre: {
        copy: "Kop\xEDrovat k\xF3d do schr\xE1nky"
      }
    }
  }
});
