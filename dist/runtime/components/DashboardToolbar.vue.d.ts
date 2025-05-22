import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/dashboard-toolbar';
type DashboardToolbar = ComponentConfig<typeof theme, AppConfig, 'dashboardToolbar', 'uiPro'>;
export interface DashboardToolbarProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    class?: any;
    ui?: DashboardToolbar['slots'];
}
export interface DashboardToolbarSlots {
    default(props?: {}): any;
    left(props?: {}): any;
    right(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<DashboardToolbarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DashboardToolbarProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, DashboardToolbarSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
