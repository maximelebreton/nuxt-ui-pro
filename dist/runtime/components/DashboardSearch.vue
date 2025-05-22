<script>
import theme from "#build/ui-pro/dashboard-search";
</script>

<script setup>
import { computed, useTemplateRef } from "vue";
import { defu } from "defu";
import { omit } from "@nuxt/ui/utils";
import { useAppConfig, useColorMode, defineShortcuts, useRuntimeHook } from "#imports";
import { useLocalePro } from "../composables/useLocalePro";
import { transformUI } from "../utils";
import { tv } from "../utils/tv";
const props = defineProps({
  icon: { type: String, required: false },
  placeholder: { type: String, required: false },
  loading: { type: Boolean, required: false },
  loadingIcon: { type: String, required: false },
  shortcut: { type: String, required: false, default: "meta_k" },
  groups: { type: Array, required: false },
  fuse: { type: Object, required: false },
  colorMode: { type: Boolean, required: false, default: true },
  class: { type: null, required: false },
  ui: { type: void 0, required: false }
});
const slots = defineSlots();
const open = defineModel("open", { type: Boolean, ...{ default: false } });
const searchTerm = defineModel("searchTerm", { type: String, ...{ default: "" } });
useRuntimeHook("dashboard:search:toggle", () => {
  open.value = !open.value;
});
const appConfig = useAppConfig();
const colorMode = useColorMode();
const { t } = useLocalePro();
const proxySlots = omit(slots, ["content"]);
const fuse = computed(() => defu({}, props.fuse, {
  fuseOptions: {}
}));
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.dashboardSearch || {} })());
const groups = computed(() => {
  const groups2 = [];
  groups2.push(...props.groups || []);
  if (props.colorMode && !colorMode?.forced) {
    groups2.push({
      id: "theme",
      label: t("dashboardSearch.theme"),
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
