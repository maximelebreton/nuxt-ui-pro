import type { Messages as UIMessages } from '@nuxt/ui';
export type Messages = UIMessages & {
    authForm: {
        submit: string;
        hidePassword: string;
        showPassword: string;
    };
    banner: {
        close: string;
    };
    chatPrompt: {
        placeholder: string;
    };
    chatPromptSubmit: {
        label: string;
    };
    colorMode: {
        system: string;
        light: string;
        dark: string;
        switchToLight: string;
        switchToDark: string;
    };
    contentSearch: {
        links: string;
        theme: string;
    };
    contentSearchButton: {
        label: string;
    };
    contentToc: {
        title: string;
    };
    dashboardSearch: {
        theme: string;
    };
    dashboardSearchButton: {
        label: string;
    };
    dashboardSidebarCollapse: {
        expand: string;
        collapse: string;
    };
    dashboardSidebarToggle: {
        close: string;
        open: string;
    };
    error: {
        clear: string;
    };
    header: {
        close: string;
        open: string;
    };
    pricingTable: {
        caption: string;
    };
    prose: {
        pre: {
            copy: string;
        };
    };
};
