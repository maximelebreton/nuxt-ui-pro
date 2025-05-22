import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/banner';
type Banner = ComponentConfig<typeof theme, AppConfig, 'banner', 'uiPro'>;
export interface BannerProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    /**
     * A unique id saved to local storage to remember if the banner has been dismissed.
     * Change this value to show the banner again.
     * @defaultValue '1'
     */
    id?: string;
    /**
     * The icon displayed next to the title.
     * @IconifyIcon
     */
    icon?: string;
    title?: string;
    /**
     * Display a list of actions next to the title.
     * `{ color: 'neutral', size: 'xs' }`{lang="ts-type"}
     */
    actions?: ButtonProps[];
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    /**
     * @defaultValue 'primary'
     */
    color?: Banner['variants']['color'];
    /**
     * Display a close button to dismiss the banner.
     * `{ size: 'md', color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
     * @emits `close`
     * @defaultValue false
     */
    close?: boolean | Partial<ButtonProps>;
    /**
     * The icon displayed in the close button.
     * @defaultValue appConfig.ui.icons.close
     * @IconifyIcon
     */
    closeIcon?: string;
    class?: any;
    ui?: Banner['slots'];
}
export interface BannerSlots {
    leading(props?: {}): any;
    title(props?: {}): any;
    actions(props?: {}): any;
    close(props: {
        ui: any;
    }): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<BannerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any, string, import("vue").PublicProps, any, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, BannerSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
