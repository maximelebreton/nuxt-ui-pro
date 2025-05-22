import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/pricing-plans';
import type { PricingPlanProps } from '../types';
type PricingPlans = ComponentConfig<typeof theme, AppConfig, 'pricingPlans', 'uiPro'>;
export interface PricingPlansProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    plans?: PricingPlanProps[];
    /**
     * The orientation of the pricing plans.
     * @defaultValue 'horizontal'
     */
    orientation?: PricingPlans['variants']['orientation'];
    /**
     * When `true`, the plans will be displayed without gap.
     * @defaultValue false
     */
    compact?: boolean;
    /**
     * When `true`, the plans will be displayed with a larger gap.
     * Useful when one plan is scaled. Doesn't work with `compact`.
     * @defaultValue false
     */
    scale?: boolean;
    class?: any;
}
export interface PricingPlansSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<PricingPlansProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PricingPlansProps> & Readonly<{}>, {
    orientation: PricingPlans["variants"]["orientation"];
    compact: boolean;
    scale: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, PricingPlansSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
