import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/code-collapse';
type ProseCodeCollapse = ComponentConfig<typeof theme, AppConfig, 'codeCollapse', 'uiPro.prose'>;
export interface ProseCodeCollapseProps {
    /**
     * The icon displayed to toggle the code.
     * @defaultValue appConfig.ui.icons.chevronDown
     */
    icon?: string;
    /**
     * The name displayed in the trigger label.
     * @defaultValue t('prose.codeCollapse.name')
     */
    name?: string;
    /**
     * The text displayed when the code is collapsed.
     * @defaultValue t('prose.codeCollapse.openText')
     */
    openText?: string;
    /**
     * The text displayed when the code is expanded.
     * @defaultValue t('prose.codeCollapse.closeText')
     */
    closeText?: string;
    class?: any;
    ui?: ProseCodeCollapse['slots'];
}
export interface ProseCodeCollapseSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseCodeCollapseProps & {
    open?: boolean;
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<ProseCodeCollapseProps & {
    open?: boolean;
}> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseCodeCollapseSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
