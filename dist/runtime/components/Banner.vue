<script>
import theme from "#build/ui-pro/banner";
</script>

<script setup>
import { computed, watch } from "vue";
import { Primitive } from "reka-ui";
import ULink from "@nuxt/ui/components/Link.vue";
import UContainer from "@nuxt/ui/components/Container.vue";
import UButton from "@nuxt/ui/components/Button.vue";
import { useHead, useAppConfig } from "#imports";
import { useLocalePro } from "../composables/useLocalePro";
import { tv } from "../utils/tv";
defineOptions({ inheritAttrs: false });
const props = defineProps({
  as: { type: null, required: false },
  id: { type: String, required: false },
  icon: { type: String, required: false },
  title: { type: String, required: false },
  actions: { type: Array, required: false },
  to: { type: null, required: false },
  target: { type: null, required: false },
  color: { type: null, required: false },
  close: { type: [Boolean, Object], required: false },
  closeIcon: { type: String, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const emits = defineEmits(["close"]);
const { t } = useLocalePro();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.banner || {} })({
  color: props.color,
  to: !!props.to
}));
const id = computed(() => `banner-${props.id || "1"}`);
watch(id, (newId) => {
  if (typeof document === "undefined" || typeof localStorage === "undefined") return;
  const isClosed = localStorage.getItem(newId) === "true";
  const htmlElement = document.querySelector("html");
  htmlElement?.classList.toggle("hide-banner", isClosed);
});
useHead({
  script: [{
    key: "prehydrate-template-banner",
    innerHTML: `
            if (localStorage.getItem('${id.value}') === 'true') {
              document.querySelector('html').classList.add('hide-banner')
            }`.replace(/\s+/g, " "),
    type: "text/javascript"
  }]
});
function onClose() {
  localStorage.setItem(id.value, "true");
  document.querySelector("html")?.classList.add("hide-banner");
  emits("close");
}
</script>

<template>
  <Primitive :as="as" class="banner" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <ULink
      v-if="to"
      :aria-label="title"
      v-bind="{ to, target, ...$attrs }"
      class="focus:outline-none"
      tabindex="-1"
      raw
    >
      <span class="absolute inset-0 " aria-hidden="true" />
    </ULink>

    <UContainer :class="ui.container({ class: props.ui?.container })">
      <div :class="ui.left({ class: props.ui?.left })" />

      <div :class="ui.center({ class: props.ui?.center })">
        <slot name="leading">
          <UIcon v-if="icon" :name="icon" :class="ui.icon({ class: props.ui?.icon })" />
        </slot>

        <div v-if="title || !!slots.title" :class="ui.title({ class: props.ui?.title })">
          <slot name="title">
            {{ title }}
          </slot>
        </div>

        <div v-if="actions?.length" :class="ui.actions({ class: props.ui?.actions })">
          <slot name="actions">
            <UButton v-for="(action, index) in actions" :key="index" color="neutral" size="xs" v-bind="action" />
          </slot>
        </div>
      </div>

      <div :class="ui.right({ class: props.ui?.right })">
        <slot name="close" :ui="ui">
          <UButton
            v-if="close"
            :icon="closeIcon || appConfig.ui.icons.close"
            size="md"
            color="neutral"
            variant="ghost"
            :aria-label="t('banner.close')"
            v-bind="typeof close === 'object' ? close : {}"
            :class="ui.close({ class: props.ui?.close })"
            @click="onClose"
          />
        </slot>
      </div>
    </UContainer>
  </Primitive>
</template>

<style scoped>
.hide-banner .banner{display:none}
</style>
