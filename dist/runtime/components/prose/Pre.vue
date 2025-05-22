<script>
import theme from "#build/ui-pro/prose/pre";
</script>

<script setup>
import { ref, computed } from "vue";
import { useClipboard } from "@vueuse/core";
import { useAppConfig } from "#imports";
import { useLocalePro } from "../../composables/useLocalePro";
import CodeIcon from "./CodeIcon.vue";
import { tv } from "../../utils/tv";
const props = defineProps({
  icon: { type: String, required: false },
  code: { type: String, required: false },
  language: { type: String, required: false },
  filename: { type: String, required: false },
  highlights: { type: Array, required: false },
  hideHeader: { type: Boolean, required: false },
  meta: { type: String, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const { t } = useLocalePro();
const clipboard = useClipboard();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.pre || {} })());
const copied = ref(false);
function copy() {
  clipboard.copy(props.code || "");
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2e3);
}
</script>

<template>
  <div :class="ui.root({ class: [props.ui?.root], filename: !!filename })">
    <div v-if="filename && !hideHeader" :class="ui.header({ class: props.ui?.header })">
      <CodeIcon :icon="icon" :filename="filename" :class="ui.icon({ class: props.ui?.icon })" />

      <span :class="ui.filename({ class: props.ui?.filename })">{{ filename }}</span>
    </div>

    <UButton
      :icon="copied ? appConfig.ui.icons.copyCheck : appConfig.ui.icons.copy"
      color="neutral"
      variant="outline"
      size="sm"
      :aria-label="t('prose.pre.copy')"
      :class="ui.copy({ class: props.ui?.copy })"
      tabindex="-1"
      @click="copy"
    />

    <pre :class="ui.base({ class: [props.class, props.ui?.base] })" v-bind="$attrs"><slot /></pre>
  </div>
</template>

<style>
.shiki span.line{display:block}.shiki span.line.highlight{margin:0 -16px;padding:0 16px;@apply bg-(--ui-bg-accented)/50}
</style>
