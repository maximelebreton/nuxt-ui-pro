import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig, LinkProps } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/card';
type ProseCard = ComponentConfig<typeof theme, AppConfig, 'card', 'uiPro.prose'>;
export interface ProseCardProps {
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    icon?: string;
    title?: string;
    description?: string;
    /**
     * @defaultValue 'primary'
     */
    color?: ProseCard['variants']['color'];
    class?: any;
    ui?: ProseCard['slots'];
}
export interface ProseCardSlots {
    default(props?: {}): any;
    title(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseCardProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProseCardProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseCardSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
