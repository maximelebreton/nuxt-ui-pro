import { th } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...th,
  messages: {
    ...th.messages,
    authForm: {
      submit: "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D",
      hidePassword: "\u0E0B\u0E48\u0E2D\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
      showPassword: "\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"
    },
    banner: {
      close: "\u0E1B\u0E34\u0E14"
    },
    chatPrompt: {
      placeholder: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E1B\u0E49\u0E2D\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48..."
    },
    chatPromptSubmit: {
      label: "\u0E2A\u0E48\u0E07"
    },
    colorMode: {
      system: "\u0E23\u0E30\u0E1A\u0E1A",
      light: "\u0E2A\u0E27\u0E48\u0E32\u0E07",
      dark: "\u0E21\u0E37\u0E14",
      switchToLight: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E2B\u0E21\u0E14\u0E2A\u0E27\u0E48\u0E32\u0E07",
      switchToDark: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E2B\u0E21\u0E14\u0E21\u0E37\u0E14"
    },
    contentSearch: {
      links: "\u0E25\u0E34\u0E07\u0E01\u0E4C",
      theme: "\u0E18\u0E35\u0E21"
    },
    contentSearchButton: {
      label: "\u0E04\u0E49\u0E19\u0E2B\u0E32..."
    },
    contentToc: {
      title: "\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49"
    },
    dashboardSearch: {
      theme: "\u0E18\u0E35\u0E21"
    },
    dashboardSearchButton: {
      label: "\u0E04\u0E49\u0E19\u0E2B\u0E32..."
    },
    dashboardSidebarCollapse: {
      expand: "\u0E02\u0E22\u0E32\u0E22\u0E41\u0E16\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07",
      collapse: "\u0E22\u0E48\u0E2D\u0E41\u0E16\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07"
    },
    dashboardSidebarToggle: {
      close: "\u0E1B\u0E34\u0E14\u0E41\u0E16\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07",
      open: "\u0E40\u0E1B\u0E34\u0E14\u0E41\u0E16\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07"
    },
    error: {
      clear: "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01"
    },
    header: {
      close: "\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39",
      open: "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39"
    },
    pricingTable: {
      caption: "\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"
    },
    prose: {
      codeCollapse: {
        name: "\u0E42\u0E04\u0E49\u0E14",
        openText: "\u0E02\u0E22\u0E32\u0E22",
        closeText: "\u0E22\u0E48\u0E2D"
      },
      collapsible: {
        name: "\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34",
        openText: "\u0E41\u0E2A\u0E14\u0E07",
        closeText: "\u0E0B\u0E48\u0E2D\u0E19"
      },
      pre: {
        copy: "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E42\u0E04\u0E49\u0E14\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E04\u0E25\u0E34\u0E1B\u0E1A\u0E2D\u0E23\u0E4C\u0E14"
      }
    }
  }
});
