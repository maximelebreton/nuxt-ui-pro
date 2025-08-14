import { hi } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...hi,
  messages: {
    ...hi.messages,
    authForm: {
      submit: "\u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
      hidePassword: "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u091B\u093F\u092A\u093E\u090F\u0902",
      showPassword: "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u093F\u0916\u093E\u090F\u0902"
    },
    banner: {
      close: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902"
    },
    chatPrompt: {
      placeholder: "\u092F\u0939\u093E\u0901 \u0906\u092A\u0915\u093E \u0938\u0902\u0926\u0947\u0936 \u0932\u093F\u0916\u0947\u0902..."
    },
    chatPromptSubmit: {
      label: "\u092D\u0947\u091C\u0947\u0902"
    },
    colorMode: {
      system: "\u0938\u093F\u0938\u094D\u091F\u092E",
      light: "\u0939\u0932\u094D\u0915\u093E",
      dark: "\u0917\u0939\u0930\u093E",
      switchToLight: "\u0939\u0932\u094D\u0915\u0947 \u092E\u094B\u0921 \u092E\u0947\u0902 \u092C\u0926\u0932\u0947\u0902",
      switchToDark: "\u0917\u0939\u0930\u0947 \u092E\u094B\u0921 \u092E\u0947\u0902 \u092C\u0926\u0932\u0947\u0902"
    },
    contentSearch: {
      links: "\u0932\u093F\u0902\u0915\u094D\u0938",
      theme: "\u0925\u0940\u092E"
    },
    contentSearchButton: {
      label: "\u0916\u094B\u091C\u0947\u0902..."
    },
    contentToc: {
      title: "\u0907\u0938 \u092A\u0943\u0937\u094D\u0920 \u092A\u0930"
    },
    dashboardSearch: {
      theme: "\u0925\u0940\u092E"
    },
    dashboardSearchButton: {
      label: "\u0916\u094B\u091C\u0947\u0902..."
    },
    dashboardSidebarCollapse: {
      expand: "\u0938\u093E\u0907\u0921\u092C\u093E\u0930 \u0935\u093F\u0938\u094D\u0924\u093E\u0930\u093F\u0924 \u0915\u0930\u0947\u0902",
      collapse: "\u0938\u093E\u0907\u0921\u092C\u093E\u0930 \u0938\u0902\u0915\u0941\u091A\u093F\u0924 \u0915\u0930\u0947\u0902"
    },
    dashboardSidebarToggle: {
      close: "\u0938\u093E\u0907\u0921\u092C\u093E\u0930 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
      open: "\u0938\u093E\u0907\u0921\u092C\u093E\u0930 \u0916\u094B\u0932\u0947\u0902"
    },
    error: {
      clear: "\u0939\u094B\u092E \u092A\u0947\u091C \u092A\u0930 \u0935\u093E\u092A\u0938 \u091C\u093E\u090F\u0902"
    },
    header: {
      close: "\u092E\u0947\u0928\u0942 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
      open: "\u092E\u0947\u0928\u0942 \u0916\u094B\u0932\u0947\u0902"
    },
    pricingTable: {
      caption: "\u0915\u0940\u092E\u0924 \u092F\u094B\u091C\u0928\u093E\u0913\u0902 \u0915\u0940 \u0924\u0941\u0932\u0928\u093E"
    },
    prose: {
      codeCollapse: {
        name: "\u0915\u094B\u0921",
        openText: "\u0935\u093F\u0938\u094D\u0924\u093E\u0930 \u0915\u0930\u0947\u0902",
        closeText: "\u0938\u0902\u0915\u0941\u091A\u093F\u0924 \u0915\u0930\u0947\u0902"
      },
      collapsible: {
        name: "\u0917\u0941\u0923",
        openText: "\u0926\u093F\u0916\u093E\u090F\u0901",
        closeText: "\u091B\u093F\u092A\u093E\u090F\u0901"
      },
      pre: {
        copy: "\u0915\u094B\u0921 \u0915\u094B \u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u092A\u0930 \u0915\u0949\u092A\u0940 \u0915\u0930\u0947\u0902"
      }
    }
  }
});
