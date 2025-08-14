<script>
import theme from "#build/ui-pro/dashboard-sidebar-collapse";
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
const { sidebarCollapsed, collapseSidebar } = useDashboard({ sidebarCollapsed: ref(false), collapseSidebar: () => {
} });
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.dashboardSidebarCollapse || {} }));
</script>

<template>
  <UButton
    v-bind="rootProps"
    :aria-label="sidebarCollapsed ? t('dashboardSidebarCollapse.expand') : t('dashboardSidebarCollapse.collapse')"
    :icon="sidebarCollapsed ? appConfig.ui.icons.panelOpen : appConfig.ui.icons.panelClose"
    :class="ui({ class: props.class, side: props.side })"
    @click="collapseSidebar?.(!sidebarCollapsed)"
  />
</template>
