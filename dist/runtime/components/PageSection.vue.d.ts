import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-section';
import type { PageFeatureProps } from '../types';
type PageSection = ComponentConfig<typeof theme, AppConfig, 'pageSection', 'uiPro'>;
export interface PageSectionProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'section'
     */
    as?: any;
    /**
     * The headline displayed above the title.
     */
    headline?: string;
    /**
     * The icon displayed above the title.
     * @IconifyIcon
     */
    icon?: string;
    title?: string;
    description?: string;
    /**
     * Display a list of Button under the description.
     * `{ size: 'lg' }`{lang="ts-type"}
     */
    links?: ButtonProps[];
    /**
     * Display a list of PageFeature under the description.
     */
    features?: PageFeatureProps[];
    /**
     * The orientation of the section.
     * @defaultValue 'vertical'
     */
    orientation?: PageSection['variants']['orientation'];
    /**
     * Reverse the order of the default slot.
     * @defaultValue false
     */
    reverse?: boolean;
    class?: any;
    ui?: PageSection['slots'];
}
export interface PageSectionSlots {
    top(props?: {}): any;
    header(props?: {}): any;
    leading(props?: {}): any;
    headline(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    body(props?: {}): any;
    features(props?: {}): any;
    footer(props?: {}): any;
    links(props?: {}): any;
    default(props?: {}): any;
    bottom(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<PageSectionProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PageSectionProps> & Readonly<{}>, {
    orientation: PageSection["variants"]["orientation"];
    as: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, PageSectionSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
