import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, DrawerProps, ModalProps, SlideoverProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/header';
type Header = ComponentConfig<typeof theme, AppConfig, 'header', 'uiPro'>;
type HeaderMode = 'modal' | 'slideover' | 'drawer';
type HeaderMenu<T> = T extends 'modal' ? ModalProps : T extends 'slideover' ? SlideoverProps : T extends 'drawer' ? DrawerProps : never;
export interface HeaderProps<T extends HeaderMode = HeaderMode> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'header'
     */
    as?: any;
    title?: string;
    to?: string;
    /**
     * The mode of the header menu.
     * @defaultValue 'modal'
     */
    mode?: T;
    /**
     * The props for the header menu component.
     */
    menu?: HeaderMenu<T>;
    /**
     * Customize the toggle button to open the header menu displayed when the `content` slot is used.
     * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
     */
    toggle?: boolean | Partial<ButtonProps>;
    /**
     * The side to render the toggle button on.
     * @defaultValue 'right'
     */
    toggleSide?: 'left' | 'right';
    class?: any;
    ui?: Header['slots'];
}
export interface HeaderSlots {
    title(props?: {}): any;
    left(props?: {}): any;
    default(props?: {}): any;
    right(props?: {}): any;
    toggle(props: {
        open: boolean;
        toggle: () => void;
    }): any;
    top(props?: {}): any;
    bottom(props?: {}): any;
    body(props?: {}): any;
    content(props?: {}): any;
}
declare const _default: <T extends HeaderMode>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:open"?: ((value: boolean) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onUpdate:open"> & (HeaderProps<T> & {
        open?: boolean;
    }) & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: HeaderSlots;
    emit: (evt: "update:open", value: boolean) => void;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
