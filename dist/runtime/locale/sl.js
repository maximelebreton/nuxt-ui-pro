import { sl } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...sl,
  messages: {
    ...sl.messages,
    authForm: {
      submit: "Nadaljuj",
      hidePassword: "Skrij geslo",
      showPassword: "Prika\u017Ei geslo"
    },
    banner: {
      close: "Zapri"
    },
    chatPrompt: {
      placeholder: "Tukaj napi\u0161ite svoje sporo\u010Dilo..."
    },
    chatPromptSubmit: {
      label: "Po\u0161lji sporo\u010Dilo"
    },
    colorMode: {
      system: "Sistem",
      light: "Svetlo",
      dark: "Temno",
      switchToLight: "Preklopi na svetli na\u010Din",
      switchToDark: "Preklopi na temni na\u010Din"
    },
    contentSearch: {
      links: "Povezave",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "I\u0161\u010Di..."
    },
    contentToc: {
      title: "Na tej strani"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "I\u0161\u010Di..."
    },
    dashboardSidebarCollapse: {
      expand: "Raz\u0161iri stransko vrstico",
      collapse: "Strni stransko vrstico"
    },
    dashboardSidebarToggle: {
      close: "Zapri stransko vrstico",
      open: "Odpri stransko vrstico"
    },
    error: {
      clear: "Nazaj na doma\u010Do stran"
    },
    header: {
      close: "Zapri meni",
      open: "Odpri meni"
    },
    pricingTable: {
      caption: "Primerjava cenovnih na\u010Drtov"
    },
    prose: {
      codeCollapse: {
        name: "koda",
        openText: "Raz\u0161iri",
        closeText: "Strni"
      },
      collapsible: {
        name: "lastnosti",
        openText: "Prika\u017Ei",
        closeText: "Skrij"
      },
      pre: {
        copy: "Kopiraj kodo v odlo\u017Ei\u0161\u010De"
      }
    }
  }
});
