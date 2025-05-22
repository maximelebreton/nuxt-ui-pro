import * as _nuxt_schema from '@nuxt/schema';
import { HookResult } from '@nuxt/schema';
export * from '../dist/runtime/types/index.js';

interface ModuleOptions {
    /**
     * Force the import of prose components even if @nuxtjs/mdc or @nuxt/content is not installed
     * @defaultValue false
     */
    mdc?: boolean;
    /**
     * Force the import of content & prose components even if @nuxt/content is not installed
     * @defaultValue false
     */
    content?: boolean;
    /**
     * License key
     */
    license?: string;
}
declare module '#app' {
    interface RuntimeNuxtHooks {
        'dashboard:search:toggle': () => HookResult;
        'dashboard:sidebar:toggle': () => HookResult;
        'dashboard:sidebar:collapse': (value: boolean) => HookResult;
    }
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

export { _default as default };
export type { ModuleOptions };
