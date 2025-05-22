<script>
import theme from "#build/ui-pro/prose/code-collapse";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  icon: { type: String, required: false },
  name: { type: String, required: false, default: "code" },
  openText: { type: String, required: false, default: "Expand" },
  closeText: { type: String, required: false, default: "Collapse" },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const open = defineModel("open", { type: Boolean, ...{ default: false } });
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.codeCollapse || {} })({
  open: open.value
}));
</script>

<template>
  <div :class="ui.root({ class: [props.class, props.ui?.root] })">
    <slot />

    <div :class="ui.footer({ class: props.ui?.footer })">
      <UButton
        :icon="icon || appConfig.ui.icons.chevronDown"
        color="neutral"
        variant="outline"
        :data-state="open ? 'open' : 'closed'"
        :label="`${open ? closeText : openText} ${name}`"
        :class="ui.trigger({ class: props.ui?.trigger })"
        :ui="{ leadingIcon: ui.triggerIcon({ class: props.ui?.triggerIcon }) }"
        @click="open = !open"
      />
    </div>
  </div>
</template>
