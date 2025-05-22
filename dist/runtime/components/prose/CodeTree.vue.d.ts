import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/code-tree';
type ProseCodeTree = ComponentConfig<typeof theme, AppConfig, 'codeTree', 'uiPro.prose'>;
export interface ProseCodeTreeProps {
    /**
     * The default path to select.
     * @example 'package.json'
     */
    defaultValue?: string;
    /**
     * Expand all directories by default.
     * @defaultValue false
     */
    expandAll?: boolean;
    class?: any;
    ui?: ProseCodeTree['slots'];
}
export interface ProseCodeTreeSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseCodeTreeProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProseCodeTreeProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseCodeTreeSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
