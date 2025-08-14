import { zh_tw } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...zh_tw,
  messages: {
    ...zh_tw.messages,
    authForm: {
      submit: "\u7E7C\u7E8C",
      hidePassword: "\u96B1\u85CF\u5BC6\u78BC",
      showPassword: "\u986F\u793A\u5BC6\u78BC"
    },
    banner: {
      close: "\u95DC\u9589"
    },
    chatPrompt: {
      placeholder: "\u5728\u9019\u88E1\u8F38\u5165\u4F60\u7684\u6D88\u606F..."
    },
    chatPromptSubmit: {
      label: "\u767C\u9001"
    },
    colorMode: {
      system: "\u7CFB\u7D71",
      light: "\u6DFA\u8272",
      dark: "\u6DF1\u8272",
      switchToLight: "\u5207\u63DB\u5230\u6DFA\u8272\u6A21\u5F0F",
      switchToDark: "\u5207\u63DB\u5230\u6DF1\u8272\u6A21\u5F0F"
    },
    contentSearch: {
      links: "\u9023\u7D50",
      theme: "\u4E3B\u984C"
    },
    contentSearchButton: {
      label: "\u641C\u5C0B..."
    },
    contentToc: {
      title: "\u672C\u9801\u5167\u5BB9"
    },
    dashboardSearch: {
      theme: "\u4E3B\u984C"
    },
    dashboardSearchButton: {
      label: "\u641C\u5C0B..."
    },
    dashboardSidebarCollapse: {
      expand: "\u5C55\u958B\u5074\u908A\u6B04",
      collapse: "\u6536\u8D77\u5074\u908A\u6B04"
    },
    dashboardSidebarToggle: {
      close: "\u95DC\u9589\u5074\u908A\u6B04",
      open: "\u958B\u555F\u5074\u908A\u6B04"
    },
    error: {
      clear: "\u8FD4\u56DE\u9996\u9801"
    },
    header: {
      close: "\u95DC\u9589\u9078\u55AE",
      open: "\u958B\u555F\u9078\u55AE"
    },
    pricingTable: {
      caption: "\u50F9\u683C\u8A08\u756B\u6BD4\u8F03"
    },
    prose: {
      codeCollapse: {
        name: "\u7A0B\u5F0F\u78BC",
        openText: "\u5C55\u958B",
        closeText: "\u6536\u8D77"
      },
      collapsible: {
        name: "\u5C6C\u6027",
        openText: "\u986F\u793A",
        closeText: "\u96B1\u85CF"
      },
      pre: {
        copy: "\u8907\u88FD\u7A0B\u5F0F\u78BC\u5230\u526A\u8CBC\u7C3F"
      }
    }
  }
});
