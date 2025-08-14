<script>
import theme from "#build/ui-pro/prose/h3";
</script>

<script setup>
import { computed } from "vue";
import UIcon from "@nuxt/ui/components/Icon.vue";
import { useRuntimeConfig, useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  id: { type: String, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const { headings } = useRuntimeConfig().public?.mdc || {};
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.h3 || {} })());
const generate = computed(() => props.id && typeof headings?.anchorLinks === "object" && headings.anchorLinks.h3);
</script>

<template>
  <h3 :id="id" :class="ui.base({ class: props.class })">
    <a v-if="id && generate" :href="`#${id}`" :class="ui.link({ class: props.ui?.link })">
      <span :class="ui.leading({ class: props.ui?.leading })">
        <UIcon :name="appConfig.ui.icons.hash" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
      </span>

      <slot />
    </a>
    <slot v-else />
  </h3>
</template>
