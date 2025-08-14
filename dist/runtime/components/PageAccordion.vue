<script>
import theme from "#build/ui-pro/page-accordion";
</script>

<script setup>
import { computed } from "vue";
import UAccordion from "@nuxt/ui/components/Accordion.vue";
import { omit } from "@nuxt/ui/utils";
import { useAppConfig } from "#imports";
import { transformUI } from "../utils";
import { tv } from "../utils/tv";
const props = defineProps({
  type: { type: null, required: false, default: "multiple" },
  class: { type: null, required: false },
  ui: { type: void 0, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageAccordion || {} })());
</script>

<template>
  <UAccordion :type="type" :unmount-on-hide="false" :class="ui.base({ class: [props.ui?.base, props.class] })" :ui="transformUI(omit(ui, ['base']), props.ui)">
    <template v-for="(_, name) in slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </UAccordion>
</template>
