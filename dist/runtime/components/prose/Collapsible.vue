<script>
import theme from "#build/ui-pro/prose/collapsible";
</script>

<script setup>
import { computed } from "vue";
import UCollapsible from "@nuxt/ui/components/Collapsible.vue";
import UIcon from "@nuxt/ui/components/Icon.vue";
import { useAppConfig } from "#imports";
import { useLocalePro } from "../../composables/useLocalePro";
import { transformUI } from "../../utils";
import { tv } from "../../utils/tv";
const props = defineProps({
  icon: { type: String, required: false },
  name: { type: String, required: false },
  openText: { type: String, required: false },
  closeText: { type: String, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const { t } = useLocalePro();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.collapsible || {} })());
</script>

<template>
  <UCollapsible :unmount-on-hide="false" :class="props.class" :ui="transformUI(ui)">
    <template #default="{ open }">
      <button :class="ui.trigger({ class: props.ui?.trigger })">
        <UIcon :name="icon || appConfig.ui.icons.chevronDown" :class="ui.triggerIcon({ class: props.ui?.triggerIcon })" />

        <span :class="ui.triggerLabel({ class: props.ui?.triggerLabel })">
          {{ open ? props.closeText || t("prose.collapsible.closeText") : props.openText || t("prose.collapsible.openText") }} {{ props.name || t("prose.collapsible.name") }}
        </span>
      </button>
    </template>

    <template #content>
      <slot />
    </template>
  </UCollapsible>
</template>
