import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/h3';
type ProseH3 = ComponentConfig<typeof theme, AppConfig, 'h3', 'uiPro.prose'>;
export interface ProseH3Props {
    id?: string;
    class?: any;
    ui?: ProseH3['slots'];
}
export interface ProseH3Slots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseH3Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProseH3Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseH3Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
