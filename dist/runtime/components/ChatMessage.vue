<script>
import theme from "#build/ui-pro/chat-message";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import UButton from "@nuxt/ui/components/Button.vue";
import UTooltip from "@nuxt/ui/components/Tooltip.vue";
import UAvatar from "@nuxt/ui/components/Avatar.vue";
import UIcon from "@nuxt/ui/components/Icon.vue";
import { omit } from "@nuxt/ui/utils";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false, default: "article" },
  icon: { type: String, required: false },
  avatar: { type: Object, required: false },
  variant: { type: null, required: false },
  side: { type: null, required: false },
  actions: { type: Array, required: false },
  compact: { type: Boolean, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false },
  id: { type: String, required: true },
  createdAt: { type: Date, required: false },
  content: { type: String, required: true },
  reasoning: { type: String, required: false },
  experimental_attachments: { type: Array, required: false },
  role: { type: String, required: true },
  data: { type: [null, String, Number, Boolean, Object, Array], required: false },
  annotations: { type: null, required: false },
  toolInvocations: { type: Array, required: false },
  parts: { type: Array, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.chatMessage || {} })({
  variant: props.variant,
  side: props.side,
  leading: !!props.icon || !!props.avatar || !!slots.leading,
  actions: !!props.actions || !!slots.actions,
  compact: props.compact
}));
</script>

<template>
  <Primitive :as="as" :data-role="role" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div :class="ui.container({ class: props.ui?.container })">
      <div v-if="icon || avatar || !!slots.leading" :class="ui.leading({ class: props.ui?.leading })">
        <slot name="leading" :avatar="avatar">
          <UIcon v-if="icon" :name="icon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
          <UAvatar v-else-if="avatar" :size="props.ui?.leadingAvatarSize || ui.leadingAvatarSize()" v-bind="avatar" :class="ui.leadingAvatar({ class: props.ui?.leadingAvatar })" />
        </slot>
      </div>

      <div v-if="content || !!slots.content" :class="ui.content({ class: props.ui?.content })">
        <slot
          name="content"
          :content="content"
          :reasoning="reasoning"
          :experimental_attachments="experimental_attachments"
          :annotations="annotations"
          :tool-invocations="toolInvocations"
          :parts="parts"
        >
          {{ content }}
        </slot>
      </div>

      <div v-if="actions || !!slots.actions" :class="ui.actions({ class: props.ui?.actions })">
        <slot name="actions" :actions="actions">
          <UTooltip v-for="(action, index) in actions" :key="index" :text="action.label">
            <UButton
              size="sm"
              color="neutral"
              variant="ghost"
              v-bind="omit(action, ['onClick'])"
              :label="undefined"
              @click="typeof action.onClick === 'function' ? action.onClick($event, props) : void 0"
            />
          </UTooltip>
        </slot>
      </div>
    </div>
  </Primitive>
</template>
