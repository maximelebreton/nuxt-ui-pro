import type { AppConfig } from '@nuxt/schema';
import type { BadgeProps, LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/changelog-version';
import type { UserProps } from '../types';
type ChangelogVersion = ComponentConfig<typeof theme, AppConfig, 'changelogVersion', 'uiPro'>;
export interface ChangelogVersionProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'article'
     */
    as?: any;
    title?: string;
    description?: string;
    /** The date of the changelog version. Can be a string or a Date object. */
    date?: string | Date;
    /**
     * Display a badge on the changelog version.
     * Can be a string or an object.
     * `{ color: 'neutral', variant: 'solid' }`{lang="ts-type"}
     */
    badge?: string | BadgeProps;
    /** The authors of the changelog version. */
    authors?: UserProps[];
    /** The image of the changelog version. Can be a string or an object. */
    image?: string | Partial<HTMLImageElement>;
    /**
     * Display an indicator dot on the left.
     * @defaultValue true
     */
    indicator?: boolean;
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    onClick?: (event: MouseEvent) => void | Promise<void>;
    class?: any;
    ui?: ChangelogVersion['slots'];
}
export interface ChangelogVersionSlots {
    header(props?: {}): any;
    badge(props?: {}): any;
    date(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    image(props?: {}): any;
    body(props?: {}): any;
    footer(props?: {}): any;
    authors(props?: {}): any;
    actions(props?: {}): any;
    indicator(props?: {}): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ChangelogVersionProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ChangelogVersionProps> & Readonly<{}>, {
    as: any;
    indicator: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ChangelogVersionSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
