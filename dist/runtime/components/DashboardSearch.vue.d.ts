import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, InputProps, ModalProps, CommandPaletteProps, CommandPaletteSlots, CommandPaletteGroup, CommandPaletteItem, ComponentConfig } from '@nuxt/ui';
import type { UseFuseOptions } from '@vueuse/integrations/useFuse';
import theme from '#build/ui-pro/dashboard-search';
type DashboardSearch = ComponentConfig<typeof theme, AppConfig, 'dashboardSearch', 'uiPro'>;
export interface DashboardSearchProps<T extends CommandPaletteItem = CommandPaletteItem> extends /* @vue-ignore */ Pick<ModalProps, 'title' | 'description' | 'overlay' | 'transition' | 'content' | 'dismissible' | 'fullscreen' | 'modal' | 'portal'> {
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
    groups?: CommandPaletteGroup<T>[];
    /**
     * Options for [useFuse](https://vueuse.org/integrations/useFuse) passed to the [CommandPalette](https://ui.nuxt.com/components/command-palette).
     * @defaultValue {}
     */
    fuse?: UseFuseOptions<T>;
    /**
     * When `true`, the theme command will be added to the groups.
     * @defaultValue true
     */
    colorMode?: boolean;
    class?: any;
    ui?: DashboardSearch['slots'] & CommandPaletteProps<CommandPaletteGroup<CommandPaletteItem>, CommandPaletteItem>['ui'];
}
export type DashboardSearchSlots = CommandPaletteSlots<CommandPaletteGroup<CommandPaletteItem>, CommandPaletteItem> & {
    content(props?: {}): any;
};
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<DashboardSearchProps<CommandPaletteItem> & {
    open?: boolean;
    searchTerm?: string;
}, {
    commandPaletteRef: Readonly<import("vue").ShallowRef<import("vue").ShallowUnwrapRef<{}> | null>>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
    "update:searchTerm": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<DashboardSearchProps<CommandPaletteItem> & {
    open?: boolean;
    searchTerm?: string;
}> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:searchTerm"?: ((value: string) => any) | undefined;
}>, {
    close: boolean | Partial<ButtonProps>;
    colorMode: boolean;
    shortcut: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, DashboardSearchSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
