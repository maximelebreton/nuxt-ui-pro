<script>
import theme from "#build/ui-pro/prose/collapsible";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  icon: { type: String, required: false },
  name: { type: String, required: false, default: "properties" },
  openText: { type: String, required: false, default: "Show" },
  closeText: { type: String, required: false, default: "Hide" },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.collapsible || {} })());
</script>

<template>
  <UCollapsible :unmount-on-hide="false" :class="ui.base({ class: props.class })">
    <template #default="{ open }">
      <button :class="ui.trigger({ class: props.ui?.trigger })">
        <UIcon :name="icon || appConfig.ui.icons.chevronDown" :class="ui.triggerIcon({ class: props.ui?.triggerIcon })" />

        <span :class="ui.triggerLabel({ class: props.ui?.triggerLabel })">{{ open ? closeText : openText }} {{ name }}</span>
      </button>
    </template>

    <template #content>
      <slot mdc-unwrap="p" />
    </template>
  </UCollapsible>
</template>
