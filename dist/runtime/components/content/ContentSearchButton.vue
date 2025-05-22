<script>
import theme from "#build/ui-pro/content/content-search-button";
</script>

<script setup>
import { computed } from "vue";
import { useForwardProps } from "reka-ui";
import { reactivePick } from "@vueuse/core";
import { omit } from "@nuxt/ui/utils";
import { useAppConfig } from "#imports";
import { useContentSearch } from "../../composables/useContentSearch";
import { useLocalePro } from "../../composables/useLocalePro";
import { transformUI } from "../../utils";
import { tv } from "../../utils/tv";
const props = defineProps({
  icon: { type: String, required: false },
  label: { type: String, required: false },
  color: { type: null, required: false, default: "neutral" },
  variant: { type: null, required: false },
  size: { type: null, required: false },
  collapsed: { type: Boolean, required: false, default: true },
  kbds: { type: Array, required: false, default: () => ["meta", "k"] },
  ui: { type: void 0, required: false },
  class: { type: null, required: false }
});
const slots = defineSlots();
const proxySlots = omit(slots, ["trailing"]);
const rootProps = useForwardProps(reactivePick(props, "color", "size"));
const { t } = useLocalePro();
const { open } = useContentSearch();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.contentSearchButton || {} })());
</script>

<template>
  <UButton
    :icon="icon || appConfig.ui.icons.search"
    :label="label || t('contentSearchButton.label')"
    :variant="variant || (collapsed ? 'ghost' : 'outline')"
    v-bind="{
  ...rootProps,
  ...collapsed ? {
    'square': true,
    'label': void 0,
    'aria-label': label || t('contentSearchButton.label')
  } : {}
}"
    :class="ui.base({ class: [props.class, props.ui?.base] })"
    :ui="transformUI(ui, props.ui)"
    @click="open = true"
  >
    <template v-for="(_, name) in proxySlots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>

    <template v-if="!collapsed" #trailing>
      <div :class="ui.trailing({ class: props.ui?.trailing })">
        <slot name="trailing">
          <template v-if="kbds?.length">
            <UKbd v-for="(kbd, index) in kbds" :key="index" variant="subtle" v-bind="typeof kbd === 'string' ? { value: kbd } : kbd" />
          </template>
        </slot>
      </div>
    </template>
  </UButton>
</template>
