import * as unplugin from 'unplugin';
import { NuxtUIOptions } from '@nuxt/ui/unplugin';
import * as uiPro from '#build/ui-pro';
import { TVConfig } from '@nuxt/ui';

type AppConfigUIPro = TVConfig<typeof uiPro>;
interface NuxtUIProOptions extends NuxtUIOptions {
    uiPro?: AppConfigUIPro;
    license?: string;
}
declare const runtimeDir: string;
declare const NuxtUIProPlugin: unplugin.UnpluginInstance<NuxtUIProOptions | undefined, boolean>;

export { NuxtUIProPlugin, runtimeDir };
export type { NuxtUIProOptions };
