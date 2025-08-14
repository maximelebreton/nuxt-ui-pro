import { ko } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...ko,
  messages: {
    ...ko.messages,
    authForm: {
      submit: "\uACC4\uC18D",
      hidePassword: "\uBE44\uBC00\uBC88\uD638 \uC228\uAE30\uAE30",
      showPassword: "\uBE44\uBC00\uBC88\uD638 \uD45C\uC2DC"
    },
    banner: {
      close: "\uB2EB\uAE30"
    },
    chatPrompt: {
      placeholder: "\uC5EC\uAE30\uC5D0 \uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694..."
    },
    chatPromptSubmit: {
      label: "\uC804\uC1A1"
    },
    colorMode: {
      system: "\uC2DC\uC2A4\uD15C",
      light: "\uB77C\uC774\uD2B8",
      dark: "\uB2E4\uD06C",
      switchToLight: "\uB77C\uC774\uD2B8 \uBAA8\uB4DC\uB85C \uC804\uD658",
      switchToDark: "\uB2E4\uD06C \uBAA8\uB4DC\uB85C \uC804\uD658"
    },
    contentSearch: {
      links: "\uB9C1\uD06C",
      theme: "\uD14C\uB9C8"
    },
    contentSearchButton: {
      label: "\uAC80\uC0C9..."
    },
    contentToc: {
      title: "\uC774 \uD398\uC774\uC9C0\uC5D0\uC11C"
    },
    dashboardSearch: {
      theme: "\uD14C\uB9C8"
    },
    dashboardSearchButton: {
      label: "\uAC80\uC0C9..."
    },
    dashboardSidebarCollapse: {
      expand: "\uC0AC\uC774\uB4DC\uBC14 \uD655\uC7A5",
      collapse: "\uC0AC\uC774\uB4DC\uBC14 \uCD95\uC18C"
    },
    dashboardSidebarToggle: {
      close: "\uC0AC\uC774\uB4DC\uBC14 \uB2EB\uAE30",
      open: "\uC0AC\uC774\uB4DC\uBC14 \uC5F4\uAE30"
    },
    error: {
      clear: "\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30"
    },
    header: {
      close: "\uBA54\uB274 \uB2EB\uAE30",
      open: "\uBA54\uB274 \uC5F4\uAE30"
    },
    pricingTable: {
      caption: "\uAC00\uACA9 \uD50C\uB79C \uBE44\uAD50"
    },
    prose: {
      codeCollapse: {
        name: "\uCF54\uB4DC",
        openText: "\uD3BC\uCE58\uAE30",
        closeText: "\uC811\uAE30"
      },
      collapsible: {
        name: "\uC18D\uC131",
        openText: "\uBCF4\uAE30",
        closeText: "\uC228\uAE30\uAE30"
      },
      pre: {
        copy: "\uCF54\uB4DC\uB97C \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC"
      }
    }
  }
});
