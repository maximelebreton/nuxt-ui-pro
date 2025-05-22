import * as vite from 'vite';
import { NuxtUIProOptions } from './unplugin.mjs';
import 'unplugin';
import '@nuxt/ui/unplugin';
import '#build/ui-pro';
import '@nuxt/ui';

declare const _default: (options?: NuxtUIProOptions | undefined) => vite.Plugin<any> | vite.Plugin<any>[];

export { NuxtUIProOptions, _default as default };
