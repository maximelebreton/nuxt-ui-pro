<script>
import theme from "#build/ui-pro/content/content-navigation";
</script>

<script setup>
import { computed } from "vue";
import { Primitive, AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent, useForwardPropsEmits } from "reka-ui";
import ULink from "@nuxt/ui/components/Link.vue";
import ULinkBase from "@nuxt/ui/components/LinkBase.vue";
import UBadge from "@nuxt/ui/components/Badge.vue";
import UIcon from "@nuxt/ui/components/Icon.vue";
import { pickLinkProps } from "@nuxt/ui/utils/link";
import { reactivePick, createReusableTemplate } from "@vueuse/core";
import { useRoute, useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
import { mapContentNavigationItem } from "../../utils/content";
import UContentNavigation from "./ContentNavigation.vue";
defineOptions({ inheritAttrs: false });
const props = defineProps({
  as: { type: null, required: false, default: "nav" },
  defaultOpen: { type: Boolean, required: false, default: void 0 },
  trailingIcon: { type: String, required: false },
  color: { type: null, required: false },
  variant: { type: null, required: false },
  highlight: { type: Boolean, required: false, default: false },
  highlightColor: { type: null, required: false },
  collapsible: { type: Boolean, required: false, default: true },
  level: { type: Number, required: false, default: 0 },
  navigation: { type: Array, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false },
  disabled: { type: Boolean, required: false },
  type: { type: String, required: false, default: "multiple" },
  unmountOnHide: { type: Boolean, required: false, default: true }
});
const emits = defineEmits(["update:modelValue"]);
const slots = defineSlots();
const rootProps = useForwardPropsEmits(reactivePick(props, "collapsible", "disabled", "type", "unmountOnHide"), emits);
const route = useRoute();
const appConfig = useAppConfig();
const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.contentNavigation || {} })({
  color: props.color,
  variant: props.variant,
  highlight: props.highlight,
  highlightColor: props.highlightColor || props.color
}));
const defaultValue = computed(() => {
  if (props.defaultOpen === false) {
    return void 0;
  }
  if (props.defaultOpen === void 0) {
    return props.type === "single" ? "0" : props.navigation?.map((link, index2) => link.defaultOpen !== false && String(index2)).filter(Boolean);
  }
  const index = props.navigation?.findIndex((link) => route.path.startsWith(link.path));
  const tyindex = index === -1 ? 0 : index;
  return props.type === "multiple" ? [String(tyindex)] : String(tyindex);
});
</script>

<template>
  <DefineLinkTemplate v-slot="{ link, active }">
    <slot name="link" :link="link" :active="active">
      <slot name="link-leading" :link="link" :active="active">
        <UIcon v-if="link.icon" :name="link.icon" :class="ui.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], active })" />
      </slot>

      <span v-if="link.title || !!slots['link-title']" :class="ui.linkTitle({ class: [props.ui?.linkTitle, link.ui?.linkTitle], active })">
        <slot name="link-title" :link="link" :active="active">
          {{ link.title }}
        </slot>

        <UIcon v-if="link.target === '_blank'" :name="appConfig.ui.icons.external" :class="ui.linkTitleExternalIcon({ class: [props.ui?.linkTitleExternalIcon, link.ui?.linkTitleExternalIcon], active })" />
      </span>

      <span v-if="link.badge || link.children?.length && !disabled || link.trailingIcon || !!slots['link-trailing']" :class="ui.linkTrailing({ class: [props.ui?.linkTrailing, link.ui?.linkTrailing] })">
        <slot name="link-trailing" :link="link" :active="active">
          <UBadge
            v-if="link.badge"
            color="neutral"
            variant="outline"
            :size="props.ui?.linkTrailingBadgeSize || ui.linkTrailingBadgeSize()"
            v-bind="typeof link.badge === 'string' || typeof link.badge === 'number' ? { label: link.badge } : link.badge"
            :class="ui.linkTrailingBadge({ class: props.ui?.linkTrailingBadge })"
          />
          <UIcon v-if="link.children?.length && !disabled" :name="link.trailingIcon || trailingIcon || appConfig.ui.icons.chevronDown" :class="ui.linkTrailingIcon({ class: [props.ui?.linkTrailingIcon, link.ui?.linkTrailingIcon] })" />
          <UIcon v-else-if="link.trailingIcon" :name="link.trailingIcon" :class="ui.linkTrailingIcon({ class: [props.ui?.linkTrailingIcon, link.ui?.linkTrailingIcon] })" />
        </slot>
      </span>
    </slot>
  </DefineLinkTemplate>

  <Primitive :as="as" v-bind="$attrs" :as-child="level > 0" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <AccordionRoot as="ul" v-bind="rootProps" :default-value="defaultValue" :class="level > 0 ? ui.listWithChildren({ class: props.ui?.listWithChildren }) : ui.list({ class: props.ui?.list })">
      <template v-for="(link, index) in navigation" :key="index">
        <AccordionItem v-if="link.children?.length" as="li" :class="ui.itemWithChildren({ class: [props.ui?.itemWithChildren, link.ui?.itemWithChildren], level: level > 0 })" :value="String(index)">
          <AccordionTrigger
            as="button"
            :class="[
  ui.link({ class: [props.ui?.link, link.ui?.link, link.class], active: link.active, disabled: !!link.disabled }),
  ui.trigger({ class: [props.ui?.trigger, link.ui?.trigger] })
]"
          >
            <ReuseLinkTemplate :link="link" :active="link.active" />
          </AccordionTrigger>

          <AccordionContent :class="ui.content({ class: [props.ui?.content, link.ui?.content] })">
            <UContentNavigation
              v-bind="rootProps"
              :navigation="link.children"
              :default-open="defaultOpen"
              :level="level + 1"
              :trailing-icon="trailingIcon"
              :color="color"
              :variant="variant"
              :highlight="highlight"
              :highlight-color="highlightColor"
              :ui="props.ui"
            >
              <template v-for="(_, name) in slots" #[name]="slotData">
                <slot :name="name" :link="slotData.link" :active="slotData.active" />
              </template>
            </UContentNavigation>
          </AccordionContent>
        </AccordionItem>

        <li v-else :class="ui.item({ class: [props.ui?.item, link.ui?.item], level: level > 0 })">
          <ULink v-slot="{ active, ...slotProps }" v-bind="pickLinkProps(mapContentNavigationItem(link))" custom>
            <ULinkBase v-bind="slotProps" :class="ui.link({ class: [props.ui?.link, link.ui?.link, link.class], active, disabled: !!link.disabled, level: level > 0 })">
              <ReuseLinkTemplate :link="link" :active="active" />
            </ULinkBase>
          </ULink>
        </li>
      </template>
    </AccordionRoot>
  </Primitive>
</template>
