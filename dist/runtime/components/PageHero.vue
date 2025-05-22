<script>
import theme from "#build/ui-pro/page-hero";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false },
  headline: { type: String, required: false },
  title: { type: String, required: false },
  description: { type: String, required: false },
  links: { type: Array, required: false },
  orientation: { type: null, required: false, default: "vertical" },
  reverse: { type: Boolean, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageHero || {} })({
  orientation: props.orientation,
  reverse: props.reverse,
  title: !!props.title || !!slots.title
}));
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <slot name="top" />

    <UContainer :class="ui.container({ class: props.ui?.container })">
      <div :class="ui.wrapper({ class: props.ui?.wrapper })">
        <div v-if="headline || !!slots.headline" :class="ui.headline({ class: props.ui?.headline, headline: !slots.headline })">
          <slot name="headline">
            {{ headline }}
          </slot>
        </div>

        <h1 v-if="title || !!slots.title" :class="ui.title({ class: props.ui?.title })">
          <slot name="title">
            {{ title }}
          </slot>
        </h1>

        <div v-if="description || !!slots.description" :class="ui.description({ class: props.ui?.description })">
          <slot name="description">
            {{ description }}
          </slot>
        </div>

        <div v-if="links?.length || !!slots.links" :class="ui.links({ class: props.ui?.links })">
          <slot name="links">
            <UButton v-for="(link, index) in links" :key="index" size="xl" v-bind="link" />
          </slot>
        </div>
      </div>

      <slot v-if="!!slots.default" />
      <div v-else-if="orientation === 'horizontal'" class="hidden lg:block" />
    </UContainer>

    <slot name="bottom" />
  </Primitive>
</template>
