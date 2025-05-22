import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/h2';
type ProseH2 = ComponentConfig<typeof theme, AppConfig, 'h2', 'uiPro.prose'>;
export interface ProseH2Props {
    id?: string;
    class?: any;
    ui?: ProseH2['slots'];
}
export interface ProseH2Slots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseH2Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProseH2Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseH2Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
