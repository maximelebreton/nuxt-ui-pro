<script>
import theme from "#build/ui-pro/prose/img";
</script>

<script setup>
import { computed } from "vue";
import { withTrailingSlash, withLeadingSlash, joinURL } from "ufo";
import { useRuntimeConfig, useAppConfig } from "#imports";
import ImageComponent from "#build/ui-image-component";
import { tv } from "../../utils/tv";
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  class: { type: null, required: false }
});
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.img || {} }));
const refinedSrc = computed(() => {
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
    if (_base !== "/" && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src);
    }
  }
  return props.src;
});
</script>

<template>
  <component
    :is="ImageComponent"
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :class="ui({ class: props.class })"
  />
</template>
