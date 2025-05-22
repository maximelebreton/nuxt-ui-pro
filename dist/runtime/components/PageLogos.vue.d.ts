import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-logos';
import type { PageMarqueeProps } from '../types';
type PageLogos = ComponentConfig<typeof theme, AppConfig, 'pageLogos', 'uiPro'>;
type PageLogosItem = {
    src: string;
    alt: string;
} | string;
export interface PageLogosProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    title?: string;
    items?: PageLogosItem[];
    marquee?: boolean | PageMarqueeProps;
    class?: any;
    ui?: PageLogos['slots'];
}
export interface PageLogosSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<PageLogosProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PageLogosProps> & Readonly<{}>, {
    marquee: boolean | PageMarqueeProps;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, PageLogosSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
