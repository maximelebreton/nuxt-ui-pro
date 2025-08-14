<script>
import theme from "#build/ui-pro/prose/accordion-item";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  label: { type: String, required: true },
  description: { type: String, required: false },
  class: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.accordionItem || {} }));
</script>

<template>
  <div :class="ui({ class: props.class })">
    <slot>
      {{ description }}
    </slot>
  </div>
</template>
