<script>
import theme from "#build/ui-pro/prose/kbd";
</script>

<script setup>
import { computed } from "vue";
import UKbd from "@nuxt/ui/components/Kbd.vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  value: { type: String, required: true },
  class: { type: null, required: false }
});
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.kbd || {} }));
</script>

<template>
  <UKbd :value="value" :class="ui({ class: props.class })" />
</template>
