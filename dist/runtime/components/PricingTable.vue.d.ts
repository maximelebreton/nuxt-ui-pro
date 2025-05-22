import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/pricing-table';
import type { PricingPlanProps } from '../types';
type PricingTable = ComponentConfig<typeof theme, AppConfig, 'pricingTable', 'uiPro'>;
type DynamicSlots<T extends {
    id: string;
}, S extends string | undefined = undefined> = {
    [K in T['id'] as K extends string ? S extends string ? (K | `${K}-${S}`) : K : never]?: (props: {
        tier: Extract<T, {
            id: K extends `${infer Base}-${S}` ? Base : K;
        }>;
    }) => any;
};
export type PricingTableTier = Pick<PricingPlanProps, 'title' | 'description' | 'badge' | 'billingCycle' | 'billingPeriod' | 'price' | 'discount' | 'button' | 'highlight'> & {
    id: string;
    [key: string]: any;
};
export type PricingTableSectionFeature<T extends PricingTableTier = PricingTableTier> = {
    title: string;
    tiers?: {
        [K in Extract<T['id'], string>]: boolean | number | string;
    } & Record<string, boolean | number | string>;
};
export interface PricingTableSection<T extends PricingTableTier = PricingTableTier> {
    title: string;
    features: PricingTableSectionFeature<T>[];
}
export interface PricingTableProps<T extends PricingTableTier = PricingTableTier> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    /**
     * The caption to display above the table.
     * @defeaultValue t('pricingTable.caption')
     */
    caption?: string;
    /**
     * The pricing tiers to display in the table.
     * Each tier represents a pricing plan with its own title, description, price, and features.
     */
    tiers: T[];
    /**
     * The sections of features to display in the table.
     * Each section contains a title and a list of features with their availability in each tier.
     */
    sections: PricingTableSection<T>[];
    class?: any;
    ui?: PricingTable['slots'];
}
type SlotProps<T extends PricingTableTier> = (props: {
    tier: T;
}) => any;
export type PricingTableSlots<T extends PricingTableTier = PricingTableTier> = {
    'caption': (props?: {}) => any;
    'tier': SlotProps<T>;
    'tier-title': SlotProps<T>;
    'tier-description': SlotProps<T>;
    'tier-badge': SlotProps<T>;
    'tier-button': SlotProps<T>;
    'tier-billing': SlotProps<T>;
    'tier-discount': SlotProps<T>;
    'tier-price': SlotProps<T>;
} & DynamicSlots<T, 'title' | 'description' | 'badge' | 'button' | 'billing' | 'discount' | 'price'>;
declare const _default: <T extends PricingTableTier>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, never> & PricingTableProps<T> & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: PricingTableSlots<T>;
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
