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
     * @defaultValue t('prose.collapsible.name')
     */
    name?: string;
    /**
     * The text displayed when the collapsible is open.
     * @defaultValue t('prose.collapsible.openText')
     */
    openText?: string;
    /**
     * The text displayed when the collapsible is closed.
     * @defaultValue t('prose.collapsible.closeText')
     */
    closeText?: string;
    class?: any;
    ui?: ProseCollapsible['slots'];
}
export interface ProseCollapsibleSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseCollapsibleProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProseCollapsibleProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseCollapsibleSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
