<script>
import theme from "#build/ui-pro/prose/ol";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  class: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.ol || {} }));
</script>

<template>
  <ol :class="ui({ class: props.class })">
    <slot />
  </ol>
</template>
