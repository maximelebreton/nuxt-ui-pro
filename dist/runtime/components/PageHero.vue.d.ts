import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-hero';
type PageHero = ComponentConfig<typeof theme, AppConfig, 'pageHero', 'uiPro'>;
export interface PageHeroProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    headline?: string;
    title?: string;
    description?: string;
    /**
     * Display a list of Button under the description.
     * `{ size: 'xl' }`{lang="ts-type"}
     */
    links?: ButtonProps[];
    /**
     * The orientation of the page hero.
     * @defaultValue 'vertical'
     */
    orientation?: PageHero['variants']['orientation'];
    /**
     * Reverse the order of the default slot.
     * @defaultValue false
     */
    reverse?: boolean;
    class?: any;
    ui?: PageHero['slots'];
}
export interface PageHeroSlots {
    default(props?: {}): any;
    top(props?: {}): any;
    bottom(props?: {}): any;
    headline(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    links(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<PageHeroProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PageHeroProps> & Readonly<{}>, {
    orientation: PageHero["variants"]["orientation"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, PageHeroSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
