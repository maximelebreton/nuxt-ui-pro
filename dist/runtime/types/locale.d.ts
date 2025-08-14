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
        title?: string;
        description?: string;
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
        title?: string;
        description?: string;
        theme: string;
    };
    dashboardSearchButton: {
        label: string;
    };
    dashboardSidebar?: {
        title?: string;
        description?: string;
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
        title?: string;
        description?: string;
        close: string;
        open: string;
    };
    pricingTable: {
        caption: string;
    };
    prose: {
        codeCollapse: {
            name: string;
            openText: string;
            closeText: string;
        };
        collapsible: {
            name: string;
            openText: string;
            closeText: string;
        };
        pre: {
            copy: string;
        };
    };
};
