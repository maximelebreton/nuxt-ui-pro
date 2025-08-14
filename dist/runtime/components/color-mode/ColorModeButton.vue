<script>

</script>

<script setup>
import { computed } from "vue";
import UButton from "@nuxt/ui/components/Button.vue";
import { useColorMode, useAppConfig } from "#imports";
import { useLocalePro } from "../../composables/useLocalePro";
defineOptions({ inheritAttrs: false });
defineProps({
  color: { type: null, required: false, default: "neutral" },
  variant: { type: null, required: false, default: "ghost" }
});
defineSlots();
const { t } = useLocalePro();
const colorMode = useColorMode();
const appConfig = useAppConfig();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  }
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? appConfig.ui.icons.dark : appConfig.ui.icons.light"
      :color="color"
      :variant="variant"
      :aria-label="isDark ? t('colorMode.switchToLight') : t('colorMode.switchToDark')"
      v-bind="$attrs"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <slot name="fallback">
        <div class="size-8" />
      </slot>
    </template>
  </ClientOnly>
</template>
