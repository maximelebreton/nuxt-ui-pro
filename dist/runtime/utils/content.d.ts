import type { ContentNavigationItem, ContentCollectionItem } from '@nuxt/content';
type MapContentNavigationItemOptions = {
    labelAttribute?: string;
    deep?: number;
};
export declare function mapContentNavigationItem(item: ContentNavigationItem, options?: MapContentNavigationItemOptions, currentDepth?: number): Omit<ContentNavigationItem, "title" | "path"> & {
    label?: string;
    to?: string;
};
export declare function mapContentNavigation(navigation: ContentNavigationItem[], options?: MapContentNavigationItemOptions): (Omit<ContentNavigationItem, "title" | "path"> & {
    label?: string;
    to?: string;
})[];
/** @deprecated Use `findPageHeadline` from Nuxt Content : https://ui.nuxt.com/getting-started/content#findpageheadline to migrate */
export declare function findPageHeadline(navigation?: ContentNavigationItem[], page?: ContentCollectionItem | null): string | undefined;
/** @deprecated Use `findPageBreadcrumb` from Nuxt Content : https://ui.nuxt.com/getting-started/content#findpagebreadcrumb to migrate */
export declare function findPageBreadcrumb(navigation?: ContentNavigationItem[], page?: ContentCollectionItem | undefined | null): ContentNavigationItem[];
export {};
