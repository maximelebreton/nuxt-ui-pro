import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ButtonSlots, KbdProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/content/content-search-button';
type ContentSearchButton = ComponentConfig<typeof theme, AppConfig, 'contentSearchButton', 'uiPro'>;
export interface ContentSearchButtonProps {
    /**
     * The icon displayed in the button.
     * @defaultValue appConfig.ui.icons.search
     * @IconifyIcon
     */
    icon?: string;
    /**
     * The label displayed in the button.
     * @defaultValue t('contentSearchButton.label')
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
     * @defaultValue true
     */
    collapsed?: boolean;
    /**
     * The keyboard keys to display in the button.
     * `{ variant: 'subtle' }`{lang="ts-type"}
     * @defaultValue ['meta', 'k']
     */
    kbds?: KbdProps['value'][] | KbdProps[];
    ui?: ContentSearchButton['slots'] & ButtonProps['ui'];
    class?: any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ContentSearchButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ContentSearchButtonProps> & Readonly<{}>, {
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
