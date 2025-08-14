import { pt } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...pt,
  messages: {
    ...pt.messages,
    authForm: {
      submit: "Continuar",
      hidePassword: "Ocultar senha",
      showPassword: "Mostrar senha"
    },
    banner: {
      close: "Fechar"
    },
    chatPrompt: {
      placeholder: "Escreva sua mensagem aqui..."
    },
    chatPromptSubmit: {
      label: "Enviar"
    },
    colorMode: {
      system: "Sistema",
      light: "Claro",
      dark: "Escuro",
      switchToLight: "Mudar para modo claro",
      switchToDark: "Mudar para modo escuro"
    },
    contentSearch: {
      links: "Links",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "Pesquisar..."
    },
    contentToc: {
      title: "Nesta p\xE1gina"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "Pesquisar..."
    },
    dashboardSidebarCollapse: {
      expand: "Expandir barra lateral",
      collapse: "Recolher barra lateral"
    },
    dashboardSidebarToggle: {
      close: "Fechar barra lateral",
      open: "Abrir barra lateral"
    },
    error: {
      clear: "Voltar para a p\xE1gina inicial"
    },
    header: {
      close: "Fechar menu",
      open: "Abrir menu"
    },
    pricingTable: {
      caption: "Compara\xE7\xE3o de planos de pre\xE7os"
    },
    prose: {
      codeCollapse: {
        name: "c\xF3digo",
        openText: "Expandir",
        closeText: "Recolher"
      },
      collapsible: {
        name: "propriedades",
        openText: "Mostrar",
        closeText: "Ocultar"
      },
      pre: {
        copy: "Copiar c\xF3digo para a \xE1rea de transfer\xEAncia"
      }
    }
  }
});
