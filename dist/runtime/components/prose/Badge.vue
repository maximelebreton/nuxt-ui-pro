<script>
import theme from "#build/ui-pro/prose/badge";
</script>

<script setup>
import { computed } from "vue";
import UBadge from "@nuxt/ui/components/Badge.vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  class: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.badge || {} }));
</script>

<template>
  <UBadge color="primary" variant="subtle" :class="ui({ class: props.class })">
    <slot mdc-unwrap="p" />
  </UBadge>
</template>
