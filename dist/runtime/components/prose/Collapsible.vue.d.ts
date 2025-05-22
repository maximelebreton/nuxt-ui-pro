import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/collapsible';
type ProseCollapsible = ComponentConfig<typeof theme, AppConfig, 'collapsible', 'uiPro.prose'>;
export interface ProseCollapsibleProps {
    /**
     * The icon displayed to toggle the collapsible.
     * @defaultValue appConfig.ui.icons.chevronDown
     */
    icon?: string;
    /**
     * The name displayed in the trigger label.
     * @defaultValue 'properties'
     */
    name?: string;
    /**
     * The text displayed when the collapsible is open.
     * @defaultValue 'Show'
     */
    openText?: string;
    /**
     * The text displayed when the collapsible is closed.
     * @defaultValue 'Hide'
     */
    closeText?: string;
    class?: any;
    ui?: ProseCollapsible['slots'];
}
export interface ProseCollapsibleSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseCollapsibleProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProseCollapsibleProps> & Readonly<{}>, {
    name: string;
    openText: string;
    closeText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseCollapsibleSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
