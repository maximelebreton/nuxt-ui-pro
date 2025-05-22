<script>
import theme from "#build/ui-pro/error";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { clearError, useAppConfig } from "#imports";
import { useLocalePro } from "../composables/useLocalePro";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false, default: "main" },
  error: { type: Object, required: false },
  redirect: { type: String, required: false, default: "/" },
  clear: { type: [Boolean, Object], required: false, default: true },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const { t } = useLocalePro();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.error || {} })());
function handleError() {
  clearError({ redirect: props.redirect });
}
</script>

<template>
  <Primitive :as="as" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <p :class="ui.statusCode({ class: props.ui?.statusCode })">
      {{ props.error?.statusCode }}
    </p>
    <h1 v-if="props.error?.statusMessage" :class="ui.statusMessage({ class: props.ui?.statusMessage })">
      {{ props.error.statusMessage }}
    </h1>
    <p v-if="props.error?.message && props.error.message !== props.error.statusMessage" :class="ui.message({ class: props.ui?.message })">
      {{ props.error?.message }}
    </p>
    <div :class="ui.links({ class: props.ui?.links })">
      <UButton
        v-if="clear"
        size="lg"
        color="primary"
        variant="solid"
        :label="t('error.clear')"
        v-bind="typeof clear === 'object' ? clear : {}"
        @click="handleError"
      />
    </div>
  </Primitive>
</template>
