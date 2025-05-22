<script>
import theme from "#build/ui-pro/prose/li";
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
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.li || {} }));
</script>

<template>
  <li :class="ui({ class: props.class })">
    <slot />
  </li>
</template>
