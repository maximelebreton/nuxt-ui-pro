import { ja } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...ja,
  messages: {
    ...ja.messages,
    authForm: {
      submit: "\u7D9A\u3051\u308B",
      hidePassword: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u96A0\u3059",
      showPassword: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A"
    },
    banner: {
      close: "\u9589\u3058\u308B"
    },
    chatPrompt: {
      placeholder: "\u3053\u3053\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044..."
    },
    chatPromptSubmit: {
      label: "\u9001\u4FE1"
    },
    colorMode: {
      system: "\u30B7\u30B9\u30C6\u30E0",
      light: "\u30E9\u30A4\u30C8",
      dark: "\u30C0\u30FC\u30AF",
      switchToLight: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048",
      switchToDark: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048"
    },
    contentSearch: {
      links: "\u30EA\u30F3\u30AF",
      theme: "\u30C6\u30FC\u30DE"
    },
    contentSearchButton: {
      label: "\u691C\u7D22..."
    },
    contentToc: {
      title: "\u3053\u306E\u30DA\u30FC\u30B8\u5185"
    },
    dashboardSearch: {
      theme: "\u30C6\u30FC\u30DE"
    },
    dashboardSearchButton: {
      label: "\u691C\u7D22..."
    },
    dashboardSidebarCollapse: {
      expand: "\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u5C55\u958B",
      collapse: "\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080"
    },
    dashboardSidebarToggle: {
      close: "\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u9589\u3058\u308B",
      open: "\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u958B\u304F"
    },
    error: {
      clear: "\u30DB\u30FC\u30E0\u306B\u623B\u308B"
    },
    header: {
      close: "\u30E1\u30CB\u30E5\u30FC\u3092\u9589\u3058\u308B",
      open: "\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F"
    },
    pricingTable: {
      caption: "\u4FA1\u683C\u30D7\u30E9\u30F3\u306E\u6BD4\u8F03"
    },
    prose: {
      codeCollapse: {
        name: "\u30B3\u30FC\u30C9",
        openText: "\u5C55\u958B",
        closeText: "\u6298\u308A\u305F\u305F\u3080"
      },
      collapsible: {
        name: "\u30D7\u30ED\u30D1\u30C6\u30A3",
        openText: "\u8868\u793A",
        closeText: "\u975E\u8868\u793A"
      },
      pre: {
        copy: "\u30B3\u30FC\u30C9\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC"
      }
    }
  }
});
