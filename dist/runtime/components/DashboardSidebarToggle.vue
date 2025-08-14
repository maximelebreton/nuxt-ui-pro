<script>
import theme from "#build/ui-pro/dashboard-sidebar-toggle";
</script>

<script setup>
import { ref, computed } from "vue";
import { useForwardProps } from "reka-ui";
import { reactivePick } from "@vueuse/core";
import UButton from "@nuxt/ui/components/Button.vue";
import { useAppConfig } from "#imports";
import { useLocalePro } from "../composables/useLocalePro";
import { useDashboard } from "../utils/dashboard";
import { tv } from "../utils/tv";
const props = defineProps({
  side: { type: String, required: false, default: "left" },
  color: { type: null, required: false, default: "neutral" },
  variant: { type: null, required: false, default: "ghost" },
  class: { type: null, required: false }
});
const rootProps = useForwardProps(reactivePick(props, "color", "variant", "size"));
const { t } = useLocalePro();
const appConfig = useAppConfig();
const { sidebarOpen, toggleSidebar } = useDashboard({ sidebarOpen: ref(false), toggleSidebar: () => {
} });
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.dashboardSidebarToggle || {} }));
</script>

<template>
  <UButton
    v-bind="rootProps"
    :aria-label="sidebarOpen ? t('dashboardSidebarToggle.close') : t('dashboardSidebarToggle.open')"
    :icon="sidebarOpen ? appConfig.ui.icons.close : appConfig.ui.icons.menu"
    :class="ui({ class: props.class, side: props.side })"
    @click="toggleSidebar"
  />
</template>
