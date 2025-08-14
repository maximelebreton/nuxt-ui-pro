import { ca } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...ca,
  messages: {
    ...ca.messages,
    authForm: {
      submit: "Continuar",
      hidePassword: "Amagar contrasenya",
      showPassword: "Mostrar contrasenya"
    },
    banner: {
      close: "Tancar"
    },
    chatPrompt: {
      placeholder: "Escriu el teu missatge aqu\xED..."
    },
    chatPromptSubmit: {
      label: "Enviar"
    },
    colorMode: {
      system: "Sistema",
      light: "Clar",
      dark: "Fosc",
      switchToLight: "Canviar a mode clar",
      switchToDark: "Canviar a mode fosc"
    },
    contentSearch: {
      links: "Enlla\xE7os",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "Cercar..."
    },
    contentToc: {
      title: "En aquesta p\xE0gina"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "Cercar..."
    },
    dashboardSidebarCollapse: {
      expand: "Expandir barra lateral",
      collapse: "Contraure barra lateral"
    },
    dashboardSidebarToggle: {
      close: "Tancar barra lateral",
      open: "Obrir barra lateral"
    },
    error: {
      clear: "Tornar a l'inici"
    },
    header: {
      close: "Tancar men\xFA",
      open: "Obrir men\xFA"
    },
    pricingTable: {
      caption: "Comparaci\xF3 de plans de preu"
    },
    prose: {
      codeCollapse: {
        name: "codi",
        openText: "Desplega",
        closeText: "Replega"
      },
      collapsible: {
        name: "propietats",
        openText: "Mostra",
        closeText: "Amaga"
      },
      pre: {
        copy: "Copiar codi al portapapers"
      }
    }
  }
});
