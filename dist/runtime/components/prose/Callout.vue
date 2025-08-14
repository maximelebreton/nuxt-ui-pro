<script>
import theme from "#build/ui-pro/prose/callout";
</script>

<script setup>
import { computed } from "vue";
import ULink from "@nuxt/ui/components/Link.vue";
import UIcon from "@nuxt/ui/components/Icon.vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
defineOptions({ inheritAttrs: false });
const props = defineProps({
  to: { type: null, required: false },
  target: { type: null, required: false },
  icon: { type: String, required: false },
  color: { type: null, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.callout || {} })({
  color: props.color,
  to: !!props.to
}));
const target = computed(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
</script>

<template>
  <div :class="ui.base({ class: props.class })">
    <ULink
      v-if="to"
      v-bind="{ to, target, ...$attrs }"
      class="focus:outline-none"
      tabindex="-1"
      raw
    >
      <span class="absolute inset-0" aria-hidden="true" />
    </ULink>

    <UIcon v-if="icon" :name="icon" :class="ui.icon({ class: props.ui?.icon })" />
    <UIcon v-if="!!to && target === '_blank'" :name="appConfig.ui.icons.external" :class="ui.externalIcon({ class: props.ui?.externalIcon })" />

    <slot mdc-unwrap="p" />
  </div>
</template>
