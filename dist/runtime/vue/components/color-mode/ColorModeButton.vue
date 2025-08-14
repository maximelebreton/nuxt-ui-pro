<script>

</script>

<script setup>
import { computed } from "vue";
import UButton from "@nuxt/ui/components/Button.vue";
import { useAppConfig, useColorMode } from "#imports";
import { useLocalePro } from "../../../composables/useLocalePro";
defineProps({
  color: { type: null, required: false, default: "neutral" },
  variant: { type: null, required: false, default: "ghost" }
});
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
  <UButton
    :icon="isDark ? appConfig.ui.icons.dark : appConfig.ui.icons.light"
    :color="color"
    :variant="variant"
    :aria-label="isDark ? t('colorMode.switchToLight') : t('colorMode.switchToDark')"
    @click="isDark = !isDark"
  />
</template>
