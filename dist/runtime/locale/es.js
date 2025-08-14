import { es } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...es,
  messages: {
    ...es.messages,
    authForm: {
      submit: "Continuar",
      hidePassword: "Ocultar contrase\xF1a",
      showPassword: "Mostrar contrase\xF1a"
    },
    banner: {
      close: "Cerrar"
    },
    chatPrompt: {
      placeholder: "Escribe tu mensaje aqu\xED..."
    },
    chatPromptSubmit: {
      label: "Enviar"
    },
    colorMode: {
      system: "Sistema",
      light: "Claro",
      dark: "Oscuro",
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro"
    },
    contentSearch: {
      links: "Enlaces",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "Buscar..."
    },
    contentToc: {
      title: "En esta p\xE1gina"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "Buscar..."
    },
    dashboardSidebarCollapse: {
      expand: "Expandir barra lateral",
      collapse: "Colapsar barra lateral"
    },
    dashboardSidebarToggle: {
      close: "Cerrar barra lateral",
      open: "Abrir barra lateral"
    },
    error: {
      clear: "Volver al inicio"
    },
    header: {
      close: "Cerrar men\xFA",
      open: "Abrir men\xFA"
    },
    pricingTable: {
      caption: "Comparaci\xF3n de planes de precios"
    },
    prose: {
      codeCollapse: {
        name: "c\xF3digo",
        openText: "Expandir",
        closeText: "Colapsar"
      },
      collapsible: {
        name: "propiedades",
        openText: "Mostrar",
        closeText: "Ocultar"
      },
      pre: {
        copy: "Copiar c\xF3digo al portapapeles"
      }
    }
  }
});
