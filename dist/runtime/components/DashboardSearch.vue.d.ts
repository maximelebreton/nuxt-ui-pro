import type { AppConfig } from '@nuxt/schema';
import type { CommandPaletteProps, CommandPaletteSlots, CommandPaletteGroup, CommandPaletteItem, ComponentConfig } from '@nuxt/ui';
import type { UseFuseOptions } from '@vueuse/integrations/useFuse';
import theme from '#build/ui-pro/dashboard-search';
type DashboardSearch = ComponentConfig<typeof theme, AppConfig, 'dashboardSearch', 'uiPro'>;
export interface DashboardSearchProps<T extends CommandPaletteItem = CommandPaletteItem> {
    /**
     * The icon displayed in the search input.
     * @defaultValue appConfig.ui.icons.search
     * @IconifyIcon
     */
    icon?: string;
    /**
     * Placeholder for the command palette search input.
     */
    placeholder?: string;
    /** When `true`, the loading icon will be displayed. */
    loading?: boolean;
    /**
     * The icon when the `loading` prop is `true`.
     * @defaultValue appConfig.ui.icons.loading
     * @IconifyIcon
     */
    loadingIcon?: string;
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
    commandPaletteRef: Readonly<import("vue").ShallowRef<any>>;
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
    colorMode: boolean;
    shortcut: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, DashboardSearchSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
