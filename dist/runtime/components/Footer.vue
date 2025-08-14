<script>
import theme from "#build/ui-pro/footer";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import UContainer from "@nuxt/ui/components/Container.vue";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false, default: "footer" },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.footer || {} })());
</script>

<template>
  <Primitive :as="as" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div v-if="!!slots.top" :class="ui.top({ class: props.ui?.top })">
      <slot name="top" />
    </div>

    <UContainer :class="ui.container({ class: props.ui?.container })">
      <div :class="ui.right({ class: props.ui?.right })">
        <slot name="right" />
      </div>

      <div :class="ui.center({ class: props.ui?.center })">
        <slot />
      </div>

      <div :class="ui.left({ class: props.ui?.left })">
        <slot name="left" />
      </div>
    </UContainer>

    <div v-if="!!slots.bottom" :class="ui.bottom({ class: props.ui?.bottom })">
      <slot name="bottom" />
    </div>
  </Primitive>
</template>
