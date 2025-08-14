<script>

</script>

<script setup>
import { computed } from "vue";
import USelectMenu from "@nuxt/ui/components/SelectMenu.vue";
import { useAppConfig, useColorMode } from "#imports";
import { useLocalePro } from "../../../composables/useLocalePro";
defineOptions({ inheritAttrs: false });
defineProps({});
const { t } = useLocalePro();
const colorMode = useColorMode();
const appConfig = useAppConfig();
const items = computed(() => [
  { label: t("colorMode.system"), value: "system", icon: appConfig.ui.icons.system },
  { label: t("colorMode.light"), value: "light", icon: appConfig.ui.icons.light },
  { label: t("colorMode.dark"), value: "dark", icon: appConfig.ui.icons.dark }
]);
const preference = computed({
  get() {
    return items.value.find((option) => option.value === colorMode.preference) || items.value[0];
  },
  set(option) {
    colorMode.preference = option.value;
  }
});
</script>

<template>
  <USelectMenu
    v-model="preference"
    :icon="preference?.icon"
    :search-input="false"
    v-bind="$attrs"
    :items="items"
  />
</template>
