import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-aside';
type PageAside = ComponentConfig<typeof theme, AppConfig, 'pageAside', 'uiPro'>;
export interface PageAsideProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'aside'
     */
    as?: any;
    class?: any;
    ui?: PageAside['slots'];
}
export interface PageAsideSlots {
    top(props?: {}): any;
    default(props?: {}): any;
    bottom(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<PageAsideProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PageAsideProps> & Readonly<{}>, {
    as: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, PageAsideSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
