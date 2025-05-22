import type { AppConfig } from '@nuxt/schema';
import type { LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/callout';
type ProseCallout = ComponentConfig<typeof theme, AppConfig, 'callout', 'uiPro.prose'>;
export interface ProseCalloutProps {
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    icon?: string;
    /**
     * @defaultValue 'neutral'
     */
    color?: ProseCallout['variants']['color'];
    class?: any;
    ui?: ProseCallout['slots'];
}
export interface ProseCalloutSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseCalloutProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProseCalloutProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseCalloutSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
