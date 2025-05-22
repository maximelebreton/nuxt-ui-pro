import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/steps';
type ProseSteps = ComponentConfig<typeof theme, AppConfig, 'steps', 'uiPro.prose'>;
export interface ProseStepsProps {
    /**
     * The heading level to apply to the steps.
     * @defaultValue '3'
     */
    level?: ProseSteps['variants']['level'];
    class?: any;
}
export interface ProseStepsSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ProseStepsProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ProseStepsProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ProseStepsSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
