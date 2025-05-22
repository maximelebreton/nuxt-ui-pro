import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-marquee';
type PageMarquee = ComponentConfig<typeof theme, AppConfig, 'pageMarquee', 'uiPro'>;
export interface PageMarqueeProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    pauseOnHover?: boolean;
    reverse?: boolean;
    orientation?: PageMarquee['variants']['orientation'];
    repeat?: number;
    overlay?: boolean;
    class?: any;
    ui?: PageMarquee['slots'];
}
export interface PageMarqueeSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<PageMarqueeProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PageMarqueeProps> & Readonly<{}>, {
    repeat: number;
    orientation: PageMarquee["variants"]["orientation"];
    overlay: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, PageMarqueeSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
