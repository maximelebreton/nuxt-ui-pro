import type { ContentNavigationItem } from '@nuxt/content';
import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, InputProps, LinkProps, ModalProps, CommandPaletteProps, CommandPaletteSlots, CommandPaletteGroup, CommandPaletteItem, ComponentConfig } from '@nuxt/ui';
import type { UseFuseOptions } from '@vueuse/integrations/useFuse';
import theme from '#build/ui-pro/content/content-search';
type ContentSearch = ComponentConfig<typeof theme, AppConfig, 'contentSearch', 'uiPro'>;
export interface ContentSearchLink extends Omit<LinkProps, 'custom'> {
    label?: string;
    description?: string;
    /**
     * @IconifyIcon
     */
    icon?: string;
    children?: ContentSearchLink[];
}
export interface ContentSearchFile {
    id: string;
    title: string;
    titles: string[];
    level: number;
    content: string;
}
export interface ContentSearchItem extends Omit<LinkProps, 'custom'>, CommandPaletteItem {
    level?: number;
    /**
     * @IconifyIcon
     */
    icon?: string;
}
export interface ContentSearchProps<T extends ContentSearchLink = ContentSearchLink> extends /* @vue-ignore */ Pick<ModalProps, 'title' | 'description' | 'overlay' | 'transition' | 'content' | 'dismissible' | 'fullscreen' | 'modal' | 'portal'> {
    /**
     * The icon displayed in the input.
     * @defaultValue appConfig.ui.icons.search
     * @IconifyIcon
     */
    icon?: string;
    /**
     * The placeholder text for the input.
     * @defaultValue t('commandPalette.placeholder')
     */
    placeholder?: InputProps['placeholder'];
    /**
     * Automatically focus the input when component is mounted.
     * @defaultValue true
     */
    autofocus?: boolean;
    /** When `true`, the loading icon will be displayed. */
    loading?: boolean;
    /**
     * The icon when the `loading` prop is `true`.
     * @defaultValue appConfig.ui.icons.loading
     * @IconifyIcon
     */
    loadingIcon?: string;
    /**
     * Display a close button in the input (useful when inside a Modal for example).
     * `{ size: 'md', color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
     * @emits 'update:open'
     * @defaultValue true
     */
    close?: boolean | Partial<ButtonProps>;
    /**
     * The icon displayed in the close button.
     * @defaultValue appConfig.ui.icons.close
     * @IconifyIcon
     */
    closeIcon?: string;
    /**
     * Keyboard shortcut to open the search (used by [`defineShortcuts`](https://ui.nuxt.com/composables/define-shortcuts))
     * @defaultValue 'meta_k'
     */
    shortcut?: string;
    /** Links group displayed as the first group in the command palette. */
    links?: T[];
    navigation?: ContentNavigationItem[];
    /** Custom groups displayed between navigation and color mode group. */
    groups?: CommandPaletteGroup<ContentSearchItem>[];
    files?: ContentSearchFile[];
    /**
     * Options for [useFuse](https://vueuse.org/integrations/useFuse) passed to the [CommandPalette](https://ui.nuxt.com/components/command-palette).
     * @defaultValue { fuseOptions: { includeMatches: true } }
     */
    fuse?: UseFuseOptions<T>;
    /**
     * When `true`, the theme command will be added to the groups.
     * @defaultValue true
     */
    colorMode?: boolean;
    class?: any;
    ui?: ContentSearch['slots'] & CommandPaletteProps<CommandPaletteGroup<ContentSearchItem>, ContentSearchItem>['ui'];
}
export type ContentSearchSlots = CommandPaletteSlots<CommandPaletteGroup<ContentSearchItem>, ContentSearchItem> & {
    content(props?: {}): any;
};
declare const _default: <T extends ContentSearchLink>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:searchTerm"?: ((value: string) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onUpdate:searchTerm"> & (ContentSearchProps<T> & {
        searchTerm?: string;
    }) & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        commandPaletteRef: Readonly<import("vue").ShallowRef<import("vue").ShallowUnwrapRef<{}> | null>>;
    }>): void;
    attrs: any;
    slots: ContentSearchSlots;
    emit: (evt: "update:searchTerm", value: string) => void;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
