import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ButtonSlots, KbdProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/dashboard-search-button';
type DashboardSearchButton = ComponentConfig<typeof theme, AppConfig, 'dashboardSearchButton', 'uiPro'>;
export interface DashboardSearchButtonProps {
    /**
     * The icon displayed in the button.
     * @defaultValue appConfig.ui.icons.search
     * @IconifyIcon
     */
    icon?: string;
    /**
     * The label displayed in the button.
     * @defaultValue t('dashboardSearchButton.label')
     */
    label?: string;
    /**
     * The color of the button.
     * @defaultValue 'neutral'
     */
    color?: ButtonProps['color'];
    /**
     * The variant of the button.
     * Defaults to 'outline' when not collapsed, 'ghost' when collapsed.
     */
    variant?: ButtonProps['variant'];
    size?: ButtonProps['size'];
    /**
     * Whether the button is collapsed.
     * @defaultValue false
     */
    collapsed?: boolean;
    /**
     * The keyboard keys to display in the button.
     * `{ variant: 'subtle' }`{lang="ts-type"}
     * @defaultValue ['meta', 'k']
     */
    kbds?: KbdProps['value'][] | KbdProps[];
    ui?: DashboardSearchButton['slots'] & ButtonProps['ui'];
    class?: any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<DashboardSearchButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DashboardSearchButtonProps> & Readonly<{}>, {
    color: "error" | "info" | "primary" | "secondary" | "success" | "warning" | "neutral";
    collapsed: boolean;
    kbds: KbdProps["value"][] | KbdProps[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ButtonSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
