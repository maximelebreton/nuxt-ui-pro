import type { ButtonProps } from '@nuxt/ui';
export interface DashboardSidebarCollapseProps extends /** @vue-ignore */ Pick<ButtonProps, 'as' | 'size' | 'disabled' | 'ui'> {
    side?: 'left' | 'right';
    /**
     * @defaultValue 'neutral'
     */
    color?: ButtonProps['color'];
    /**
     * @defaultValue 'ghost'
     */
    variant?: ButtonProps['variant'];
    class?: any;
}
declare const _default: import("vue").DefineComponent<DashboardSidebarCollapseProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<DashboardSidebarCollapseProps> & Readonly<{}>, {
    color: "error" | "info" | "primary" | "secondary" | "success" | "warning" | "neutral";
    variant: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost";
    side: "left" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
