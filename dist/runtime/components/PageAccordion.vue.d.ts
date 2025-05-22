import type { AppConfig } from '@nuxt/schema';
import type { AccordionProps, AccordionSlots, AccordionItem, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-accordion';
type PageAccordion = ComponentConfig<typeof theme, AppConfig, 'pageAccordion', 'uiPro'>;
export interface PageAccordionProps<T extends AccordionItem = AccordionItem> extends /** @vue-ignore */ Omit<AccordionProps<T>, 'type'> {
    type?: AccordionProps<T>['type'];
    class?: any;
    ui?: PageAccordion['slots'] & AccordionProps['ui'];
}
export type PageAccordionSlots<T extends AccordionItem = AccordionItem> = AccordionSlots<T & {
    slot?: string;
}>;
declare const _default: <T extends AccordionItem>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, never> & PageAccordionProps<T> & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: PageAccordionSlots<T>;
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
