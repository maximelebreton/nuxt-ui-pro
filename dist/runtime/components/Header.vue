<script>
import theme from "#build/ui-pro/header";
</script>

<script setup>
import { computed, watch, toRef } from "vue";
import { Primitive } from "reka-ui";
import { defu } from "defu";
import { createReusableTemplate } from "@vueuse/core";
import UButton from "@nuxt/ui/components/Button.vue";
import ULink from "@nuxt/ui/components/Link.vue";
import UContainer from "@nuxt/ui/components/Container.vue";
import USlideover from "@nuxt/ui/components/Slideover.vue";
import UModal from "@nuxt/ui/components/Modal.vue";
import UDrawer from "@nuxt/ui/components/Drawer.vue";
import { useAppConfig, useRoute } from "#imports";
import { useLocalePro } from "../composables/useLocalePro";
import { getSlotChildrenText } from "../utils";
import { tv } from "../utils/tv";
defineOptions({ inheritAttrs: false });
const props = defineProps({
  as: { type: null, required: false, default: "header" },
  title: { type: String, required: false, default: "Nuxt UI Pro" },
  to: { type: String, required: false, default: "/" },
  mode: { type: null, required: false, default: "modal" },
  menu: { type: null, required: false },
  toggle: { type: [Boolean, Object], required: false, default: true },
  toggleSide: { type: String, required: false, default: "right" },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const open = defineModel("open", { type: Boolean, ...{ default: false } });
const route = useRoute();
const { t } = useLocalePro();
const appConfig = useAppConfig();
const [DefineLeftTemplate, ReuseLeftTemplate] = createReusableTemplate();
const [DefineRightTemplate, ReuseRightTemplate] = createReusableTemplate();
const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
const ariaLabel = computed(() => {
  const slotText = slots.title && getSlotChildrenText(slots.title());
  return (slotText || props.title || "Nuxt UI Pro").trim();
});
watch(() => route.fullPath, () => {
  open.value = false;
});
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.header || {} })());
const Menu = computed(() => ({
  slideover: USlideover,
  modal: UModal,
  drawer: UDrawer
})[props.mode]);
const menuProps = toRef(() => defu(props.menu, {
  content: {
    onOpenAutoFocus: (e) => e.preventDefault()
  }
}, props.mode === "modal" ? { fullscreen: true, transition: false } : {}));
function toggleOpen() {
  open.value = !open.value;
}
</script>

<template>
  <DefineToggleTemplate>
    <slot name="toggle" :open="open" :toggle="toggleOpen">
      <UButton
        v-if="toggle"
        color="neutral"
        variant="ghost"
        :aria-label="open ? t('header.close') : t('header.open')"
        :icon="open ? appConfig.ui.icons.close : appConfig.ui.icons.menu"
        v-bind="typeof toggle === 'object' ? toggle : {}"
        :class="ui.toggle({ class: props.ui?.toggle, toggleSide })"
        @click="toggleOpen"
      />
    </slot>
  </DefineToggleTemplate>

  <DefineLeftTemplate>
    <div :class="ui.left({ class: props.ui?.left })">
      <ReuseToggleTemplate v-if="toggleSide === 'left'" />

      <slot name="left">
        <ULink :to="to" :aria-label="ariaLabel" :class="ui.title({ class: props.ui?.title })">
          <slot name="title">
            {{ title }}
          </slot>
        </ULink>
      </slot>
    </div>
  </DefineLeftTemplate>

  <DefineRightTemplate>
    <div :class="ui.right({ class: props.ui?.right })">
      <slot name="right" />

      <ReuseToggleTemplate v-if="toggleSide === 'right'" />
    </div>
  </DefineRightTemplate>

  <Primitive :as="as" v-bind="$attrs" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <slot name="top" />

    <UContainer :class="ui.container({ class: props.ui?.container })">
      <ReuseLeftTemplate />

      <div :class="ui.center({ class: props.ui?.center })">
        <slot />
      </div>

      <ReuseRightTemplate />
    </UContainer>

    <slot name="bottom" />
  </Primitive>

  <Menu
    v-model:open="open"
    :title="t('header.title')"
    :description="t('header.description')"
    v-bind="menuProps"
    :ui="{
  overlay: ui.overlay({ class: props.ui?.overlay }),
  content: ui.content({ class: props.ui?.content })
}"
  >
    <template #content>
      <slot name="content">
        <div v-if="mode !== 'drawer'" :class="ui.header({ class: props.ui?.header })">
          <ReuseLeftTemplate />

          <ReuseRightTemplate />
        </div>

        <div :class="ui.body({ class: props.ui?.body })">
          <slot name="body" />
        </div>
      </slot>
    </template>
  </Menu>
</template>
