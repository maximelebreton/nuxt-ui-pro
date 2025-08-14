<script>
import theme from "#build/ui-pro/footer-columns";
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
  class: { type: null, required: false },
  columns: { type: Array, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.footerColumns || {} })());
</script>

<template>
  <Primitive :as="as" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div v-if="!!slots.left" :class="ui.left({ class: props.ui?.left })">
      <slot name="left" />
    </div>

    <div v-if="!!slots.default || columns?.length" :class="ui.center({ class: props.ui?.center })">
      <slot>
        <div v-for="(column, index) in columns" :key="index">
          <h3 :class="ui.label({ class: props.ui?.label })">
            <slot name="column-label" :column="column">
              {{ column.label }}
            </slot>
          </h3>

          <ul :class="ui.list({ class: props.ui?.list })">
            <li v-for="(link, linkIndex) in column.children" :key="linkIndex" :class="ui.item({ class: [props.ui?.item, link.ui?.item] })">
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
        </div>
      </slot>
    </div>

    <div v-if="!!slots.right" :class="ui.right({ class: props.ui?.right })">
      <slot name="right" />
    </div>
  </Primitive>
</template>
