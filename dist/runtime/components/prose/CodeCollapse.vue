<script>
import theme from "#build/ui-pro/prose/code-collapse";
</script>

<script setup>
import { computed } from "vue";
import UButton from "@nuxt/ui/components/Button.vue";
import { useAppConfig } from "#imports";
import { useLocalePro } from "../../composables/useLocalePro";
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
const open = defineModel("open", { type: Boolean, ...{ default: false } });
const { t } = useLocalePro();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.codeCollapse || {} })({
  open: open.value
}));
</script>

<template>
  <div :class="ui.root({ class: [props.ui?.root, props.class] })">
    <slot />

    <div :class="ui.footer({ class: props.ui?.footer })">
      <UButton
        :icon="icon || appConfig.ui.icons.chevronDown"
        color="neutral"
        variant="outline"
        :data-state="open ? 'open' : 'closed'"
        :label="`${open ? props.closeText || t('prose.codeCollapse.closeText') : props.openText || t('prose.codeCollapse.openText')} ${props.name || t('prose.codeCollapse.name')}`"
        :class="ui.trigger({ class: props.ui?.trigger })"
        :ui="{ leadingIcon: ui.triggerIcon({ class: props.ui?.triggerIcon }) }"
        @click="open = !open"
      />
    </div>
  </div>
</template>
