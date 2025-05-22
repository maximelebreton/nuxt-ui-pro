<script>
import theme from "#build/ui-pro/content/content-search";
</script>

<script setup>
import { computed, useTemplateRef } from "vue";
import { defu } from "defu";
import { omit } from "@nuxt/ui/utils";
import { useAppConfig, useColorMode, defineShortcuts } from "#imports";
import { useContentSearch } from "../../composables/useContentSearch";
import { useLocalePro } from "../../composables/useLocalePro";
import { transformUI } from "../../utils";
import { tv } from "../../utils/tv";
const props = defineProps({
  icon: { type: String, required: false },
  placeholder: { type: String, required: false },
  loading: { type: Boolean, required: false },
  loadingIcon: { type: String, required: false },
  shortcut: { type: String, required: false, default: "meta_k" },
  links: { type: Array, required: false },
  navigation: { type: Array, required: false },
  groups: { type: Array, required: false },
  files: { type: Array, required: false },
  fuse: { type: Object, required: false },
  colorMode: { type: Boolean, required: false, default: true },
  class: { type: null, required: false },
  ui: { type: void 0, required: false }
});
const slots = defineSlots();
const searchTerm = defineModel("searchTerm", { type: String, ...{ default: "" } });
const { t } = useLocalePro();
const { open } = useContentSearch();
const colorMode = useColorMode();
const appConfig = useAppConfig();
const proxySlots = omit(slots, ["content"]);
const fuse = computed(() => defu({}, props.fuse, {
  fuseOptions: {
    includeMatches: true
  }
}));
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.contentSearch || {} })());
function mapLinksItems(links) {
  return links.flatMap((link) => [{
    ...link,
    suffix: link.description,
    icon: link.icon || appConfig.ui.icons.file
  }, ...link.children?.map((child) => ({
    ...child,
    prefix: link.label + " >",
    suffix: child.description,
    icon: child.icon || link.icon || appConfig.ui.icons.file
  })) || []]);
}
function mapNavigationItems(children, parent) {
  return children.flatMap((link) => {
    if (link.children?.length) {
      return mapNavigationItems(link.children, link);
    }
    return props.files?.filter((file) => file.id === link.path || file.id.startsWith(`${link.path}#`))?.map((file) => mapFile(file, link, parent)) || [];
  });
}
function mapFile(file, link, parent) {
  const prefix = [...new Set([parent?.title, ...file.titles].filter(Boolean))];
  return {
    prefix: prefix?.length ? prefix.join(" > ") + " >" : void 0,
    label: file.id === link.path ? link.title : file.title,
    suffix: file.content.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
    to: file.id,
    icon: link.icon || parent?.icon || (file.level > 1 ? appConfig.ui.icons.hash : appConfig.ui.icons.file),
    level: file.level
  };
}
const groups = computed(() => {
  const groups2 = [];
  if (props.links?.length) {
    groups2.push({ id: "links", label: t("contentSearch.links"), items: mapLinksItems(props.links) });
  }
  if (props.navigation?.length) {
    if (props.navigation.some((link) => !!link.children?.length)) {
      groups2.push(...props.navigation.map((group) => ({ id: group.path, label: group.title, items: mapNavigationItems(group.children || []), postFilter })));
    } else {
      groups2.push({ id: "docs", items: mapNavigationItems(props.navigation), postFilter });
    }
  }
  groups2.push(...props.groups || []);
  if (props.colorMode && !colorMode?.forced) {
    groups2.push({
      id: "theme",
      label: t("contentSearch.theme"),
      items: [{
        label: t("colorMode.system"),
        icon: appConfig.ui.icons.system,
        active: colorMode.preference === "system",
        onSelect: () => {
          colorMode.preference = "system";
        }
      }, {
        label: t("colorMode.light"),
        icon: appConfig.ui.icons.light,
        active: colorMode.preference === "light",
        onSelect: () => {
          colorMode.preference = "light";
        }
      }, {
        label: t("colorMode.dark"),
        icon: appConfig.ui.icons.dark,
        active: colorMode.preference === "dark",
        onSelect: () => {
          colorMode.preference = "dark";
        }
      }]
    });
  }
  return groups2;
});
function postFilter(query, items) {
  if (!query) {
    return items?.filter((item) => item.level === 1);
  }
  return items;
}
function onSelect(item) {
  if (item.disabled) {
    return;
  }
  open.value = false;
  searchTerm.value = "";
}
defineShortcuts({
  [props.shortcut]: {
    usingInput: true,
    handler: () => open.value = !open.value
  }
});
const commandPaletteRef = useTemplateRef("commandPaletteRef");
defineExpose({
  commandPaletteRef
});
</script>

<template>
  <UModal v-model:open="open" :class="ui.modal({ class: props.class })">
    <template #content>
      <slot name="content">
        <UCommandPalette
          ref="commandPaletteRef"
          v-model:search-term="searchTerm"
          :icon="icon"
          :placeholder="placeholder"
          :loading="loading"
          :loading-icon="loadingIcon"
          :groups="groups"
          :fuse="fuse"
          :ui="transformUI(omit(ui, ['modal']), props.ui)"
          close
          @update:model-value="onSelect"
          @update:open="open = $event"
        >
          <template v-for="(_, name) in proxySlots" #[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </UCommandPalette>
      </slot>
    </template>
  </UModal>
</template>
