<script>
import theme from "#build/ui-pro/dashboard-panel";
</script>

<script setup>
import { computed, useId, toRef } from "vue";
import { useAppConfig } from "#imports";
import { useResizable } from "../composables/useResizable";
import { useDashboard } from "../utils/dashboard";
import { tv } from "../utils/tv";
const props = defineProps({
  class: { type: null, required: false },
  ui: { type: null, required: false },
  id: { type: String, required: false },
  minSize: { type: Number, required: false, default: 15 },
  maxSize: { type: Number, required: false },
  defaultSize: { type: Number, required: false },
  resizable: { type: Boolean, required: false, default: false }
});
defineSlots();
const appConfig = useAppConfig();
const dashboardContext = useDashboard({ storageKey: "dashboard", unit: "%" });
const id = `${dashboardContext.storageKey}-panel-${props.id || useId()}`;
const { el, size, isDragging, onMouseDown, onTouchStart } = useResizable(id, toRef(() => ({ ...dashboardContext, ...props })));
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.dashboardPanel || {} })({
  size: !!size.value
}));
</script>

<template>
  <div
    :id="id"
    ref="el"
    :data-dragging="isDragging"
    :class="ui.root({ class: [props.class, props.ui?.root] })"
    :style="[size ? { '--width': `${size}${dashboardContext.unit}` } : void 0]"
  >
    <slot>
      <slot name="header" />

      <div :class="ui.body({ class: props.ui?.body })">
        <slot name="body" />
      </div>

      <slot name="footer" />
    </slot>
  </div>

  <slot name="resize-handle" :on-mouse-down="onMouseDown" :on-touch-start="onTouchStart">
    <UDashboardResizeHandle
      v-if="resizable"
      :aria-controls="id"
      :class="ui.handle({ class: props.ui?.handle })"
      @mousedown="onMouseDown"
      @touchstart="onTouchStart"
    />
  </slot>
</template>
