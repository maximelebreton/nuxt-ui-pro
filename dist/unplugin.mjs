import { fileURLToPath } from 'node:url';
import { normalize, join } from 'pathe';
import { globSync } from 'tinyglobby';
import { defu } from 'defu';
import { createUnplugin } from 'unplugin';
import ui from '@nuxt/ui/vite';
import { g as getTemplates, i as icons, t as theme, v as validateLicense } from './shared/ui-pro.BvhO-FJN.mjs';
import dotenv from 'dotenv';
import { consola } from 'consola';
import { colors } from 'consola/utils';
import 'scule';
import '@nuxt/kit';
import 'ofetch';
import 'pkg-types';

function TemplatePlugin(options) {
  const templates = getTemplates(options, options);
  const templateKeys = new Set(templates.map((t) => `#build/${t.filename}`));
  return {
    name: "nuxt:ui-pro:templates",
    enforce: "pre",
    resolveId(id) {
      if (templateKeys.has(id + ".ts")) {
        return id.replace("#build/", "virtual:nuxt-ui-pro-templates/") + ".ts";
      }
    },
    loadInclude: (id) => templateKeys.has(id.replace("virtual:nuxt-ui-pro-templates/", "#build/")),
    load(id) {
      id = id.replace("virtual:nuxt-ui-pro-templates/", "#build/");
      return templates.find((t) => `#build/${t.filename}` === id).getContents({});
    }
  };
}

function AppConfigPlugin(appConfig) {
  return {
    name: "nuxt:ui-pro:app-config",
    enforce: "pre",
    resolveId(id) {
      if (id === "#build/app.config") {
        return "virtual:nuxt-ui-app-config";
      }
    },
    transform(code, id) {
      if (id === "virtual:nuxt-ui-app-config") {
        const existingConfig = new Function(`return ${code.match(/export default (.*)/s)?.[1]}`)();
        const mergedConfig = defu(existingConfig, {
          ui: {
            icons
          },
          uiPro: appConfig.uiPro
        });
        return `export default ${JSON.stringify(mergedConfig)}`;
      }
    }
  };
}

dotenv.config();
function LicensePlugin(license) {
  const theme$1 = theme || { env: "NUXT_UI_PRO_LICENSE", link: "https://ui.nuxt.com/pro" };
  const key = process.env[theme$1.env] || license;
  return {
    name: "nuxt:ui-pro:license",
    vite: {
      enforce: "pre",
      apply(config, { command }) {
        if (command === "serve") {
          if (!key) {
            consola.box(
              colors.greenBright("Nuxt UI Pro") + `

Missing \`${theme$1.env}\` env variable, please add it to your \`.env\`.

` + colors.blueBright(`Purchase Nuxt UI Pro at ${theme$1.link} to build your app in production.`)
            );
          }
        }
        return command === "build";
      }
    },
    async buildStart() {
      await validateLicense({ key, theme: theme$1, dir: process.cwd() });
    }
  };
}

const runtimeDir = normalize(fileURLToPath(new URL("./runtime", import.meta.url)));
const resolveColors = (colors) => {
  return colors?.length ? [.../* @__PURE__ */ new Set(["primary", ...colors])] : ["primary", "secondary", "success", "info", "warning", "error"];
};
const NuxtUIProPlugin = createUnplugin((_options = {}) => {
  let options = defu(_options, {
    prefix: "U",
    colorMode: true,
    theme: {
      colors: void 0,
      transitions: true
    },
    autoImport: {
      dirs: [join(runtimeDir, "composables")]
    }
  });
  options.theme = options.theme || {};
  options.theme.colors = resolveColors(options.theme.colors);
  const components = globSync("**/*.vue", {
    cwd: join(runtimeDir, "components"),
    ignore: [
      !options.colorMode && "color-mode/**/*.vue",
      "content/*.vue",
      "prose/**/*.vue"
    ].filter(Boolean)
  });
  const componentNames = new Set(components.map((c) => `${options.prefix}${c.split("/").pop()?.replace(/\.vue$/, "")}`));
  const componentPaths = new Map(components.map((c) => {
    const name = c.replace(/\.vue$/, "");
    const componentName = `${options.prefix}${name.split("/").pop()}`;
    return [componentName, c];
  }));
  const overrides = globSync("**/*.vue", {
    cwd: join(runtimeDir, "vue/components"),
    ignore: [
      !options.colorMode && "color-mode/**/*.vue"
    ].filter(Boolean)
  });
  const overrideNames = new Set(overrides.map((c) => `${options.prefix}${c.split("/").pop()?.replace(/\.vue$/, "")}`));
  const overridePaths = new Map(overrides.map((c) => {
    const name = c.replace(/\.vue$/, "");
    const componentName = `${options.prefix}${name.split("/").pop()}`;
    return [componentName, c];
  }));
  options = defu(options, {
    components: {
      resolvers: [
        (componentName) => {
          if (overrideNames.has(componentName)) {
            const relativePath = overridePaths.get(componentName);
            return {
              name: "default",
              from: join(runtimeDir, "vue/components", relativePath)
            };
          }
          if (componentNames.has(componentName)) {
            const relativePath = componentPaths.get(componentName);
            return {
              name: "default",
              from: join(runtimeDir, "components", relativePath)
            };
          }
        }
      ]
    }
  });
  const appConfig = { uiPro: options.uiPro };
  return [
    ui(options),
    TemplatePlugin(options),
    AppConfigPlugin(appConfig),
    LicensePlugin(options.license)
  ].flat(1);
});

export { NuxtUIProPlugin, runtimeDir };
