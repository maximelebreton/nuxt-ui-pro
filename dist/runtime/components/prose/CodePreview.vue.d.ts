import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/code-preview';
type ProseCodePreview = ComponentConfig<typeof theme, AppConfig, 'codePreview', 'uiPro.prose'>;
export interface ProseCodePreviewProps {
    class?: any;
    ui?: ProseCodePreview['slots'];
}
export interface ProseCodePreviewSlots {
    default(props?: {}): any;
    code(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseCodePreviewProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProseCodePreviewProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseCodePreviewSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
