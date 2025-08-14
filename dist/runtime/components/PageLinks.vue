<script>
import theme from "#build/ui-pro/page-links";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import ULink from "@nuxt/ui/components/Link.vue";
import ULinkBase from "@nuxt/ui/components/LinkBase.vue";
import UIcon from "@nuxt/ui/components/Icon.vue";
import { pickLinkProps } from "@nuxt/ui/utils/link";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false, default: "nav" },
  title: { type: String, required: false },
  links: { type: Array, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageLinks || {} })());
</script>

<template>
  <Primitive :as="as" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <p v-if="title || !!slots.title" :class="ui.title({ class: props.ui?.title })">
      <slot name="title">
        {{ title }}
      </slot>
    </p>

    <ul :class="ui.list({ class: props.ui?.list })">
      <li v-for="(link, index) in links" :key="index" :class="ui.item({ class: [props.ui?.item, link.ui?.item] })">
        <ULink v-slot="{ active, ...slotProps }" v-bind="pickLinkProps(link)" custom>
          <ULinkBase v-bind="slotProps" :class="ui.link({ class: [props.ui?.link, link.ui?.link, link.class], active })">
            <slot name="link" :link="link" :active="active">
              <slot name="link-leading" :link="link" :active="active">
                <UIcon v-if="link.icon" :name="link.icon" :class="ui.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], active })" />
              </slot>

              <span v-if="link.label || !!slots['link-label']" :class="ui.linkLabel({ class: [props.ui?.linkLabel, link.ui?.linkLabel], active })">
                <slot name="link-label" :link="link" :active="active">
                  {{ link.label }}
                </slot>

                <UIcon v-if="link.target === '_blank'" :name="appConfig.ui.icons.external" :class="ui.linkLabelExternalIcon({ class: [props.ui?.linkLabelExternalIcon, link.ui?.linkLabelExternalIcon], active })" />
              </span>

              <slot name="link-trailing" :link="link" :active="active" />
            </slot>
          </ULinkBase>
        </ULink>
      </li>
    </ul>
  </Primitive>
</template>
