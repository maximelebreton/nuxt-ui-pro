<script>
import theme from "#build/ui-pro/prose/icon";
</script>

<script setup>
import { computed } from "vue";
import UIcon from "@nuxt/ui/components/Icon.vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  name: { type: String, required: true },
  class: { type: null, required: false }
});
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.icon || {} }));
</script>

<template>
  <UIcon :name="name" :class="ui({ class: props.class })" />
</template>
