import { fr } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...fr,
  messages: {
    ...fr.messages,
    authForm: {
      submit: "Continuer",
      hidePassword: "Masquer le mot de passe",
      showPassword: "Afficher le mot de passe"
    },
    banner: {
      close: "Fermer"
    },
    chatPrompt: {
      placeholder: "\xC9crivez votre message ici..."
    },
    chatPromptSubmit: {
      label: "Envoyer"
    },
    colorMode: {
      system: "Syst\xE8me",
      light: "Clair",
      dark: "Sombre",
      switchToLight: "Passer en mode clair",
      switchToDark: "Passer en mode sombre"
    },
    contentSearch: {
      links: "Liens",
      theme: "Th\xE8me"
    },
    contentSearchButton: {
      label: "Rechercher..."
    },
    contentToc: {
      title: "Sur cette page"
    },
    dashboardSearch: {
      theme: "Th\xE8me"
    },
    dashboardSearchButton: {
      label: "Rechercher..."
    },
    dashboardSidebarCollapse: {
      expand: "D\xE9ployer la barre lat\xE9rale",
      collapse: "Replier la barre lat\xE9rale"
    },
    dashboardSidebarToggle: {
      close: "Fermer la barre lat\xE9rale",
      open: "Ouvrir la barre lat\xE9rale"
    },
    error: {
      clear: "Retour \xE0 l'accueil"
    },
    header: {
      close: "Fermer le menu",
      open: "Ouvrir le menu"
    },
    pricingTable: {
      caption: "Comparaison des plans de prix"
    },
    prose: {
      codeCollapse: {
        name: "code",
        openText: "D\xE9velopper",
        closeText: "R\xE9duire"
      },
      collapsible: {
        name: "propri\xE9t\xE9s",
        openText: "Afficher",
        closeText: "Masquer"
      },
      pre: {
        copy: "Copier le code dans le presse-papiers"
      }
    }
  }
});
