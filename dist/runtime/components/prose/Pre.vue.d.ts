import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/pre';
type ProsePre = ComponentConfig<typeof theme, AppConfig, 'pre', 'uiPro.prose'>;
export interface ProsePreProps {
    icon?: string;
    code?: string;
    language?: string;
    filename?: string;
    highlights?: number[];
    hideHeader?: boolean;
    meta?: string;
    class?: any;
    ui?: ProsePre['slots'];
}
export interface ProsePreSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProsePreProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProsePreProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProsePreSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
