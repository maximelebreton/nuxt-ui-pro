<script>
import theme from "#build/ui-pro/auth-form";
</script>

<script setup>
import { reactive, ref, computed, useTemplateRef } from "vue";
import { Primitive } from "reka-ui";
import { omit } from "@nuxt/ui/utils";
import { useAppConfig } from "#imports";
import { useLocalePro } from "../composables/useLocalePro";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false },
  icon: { type: String, required: false },
  title: { type: String, required: false },
  description: { type: String, required: false },
  fields: { type: Array, required: false },
  providers: { type: Array, required: false },
  separator: { type: null, required: false, default: "or" },
  submit: { type: null, required: false },
  schema: { type: null, required: false },
  validate: { type: null, required: false },
  validateOn: { type: null, required: false },
  validateOnInputDelay: { type: null, required: false },
  disabled: { type: null, required: false },
  loading: { type: null, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const state = reactive((props.fields || []).reduce((acc, field) => {
  if (field.name) {
    acc[field.name] = field.defaultValue;
  }
  return acc;
}, {}));
const emits = defineEmits(["submit"]);
const slots = defineSlots();
const { t } = useLocalePro();
const appConfig = useAppConfig();
const formRef = useTemplateRef("formRef");
const passwordVisibility = ref(false);
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.authForm || {} })());
defineExpose({
  formRef
});
</script>

<template>
  <Primitive :as="as" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <div v-if="icon || !!slots.icon || (title || !!slots.title) || (description || !!slots.description) || !!slots.header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header">
        <div v-if="icon || !!slots.leading" :class="ui.leading({ class: props.ui?.leading })">
          <slot name="leading">
            <UIcon v-if="icon" :name="icon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
          </slot>
        </div>

        <div v-if="title || !!slots.title" :class="ui.title({ class: props.ui?.title })">
          <slot name="title">
            {{ title }}
          </slot>
        </div>

        <div v-if="description || !!slots.description" :class="ui.description({ class: props.ui?.description })">
          <slot name="description">
            {{ description }}
          </slot>
        </div>
      </slot>
    </div>

    <div :class="ui.body({ class: props.ui?.body })">
      <div v-if="providers?.length" :class="ui.providers({ class: props.ui?.providers })">
        <UButton
          v-for="(provider, index) in providers"
          :key="index"
          block
          color="neutral"
          variant="subtle"
          v-bind="provider"
        />
      </div>

      <USeparator
        v-if="providers?.length && fields?.length"
        v-bind="typeof separator === 'object' ? separator : { label: separator }"
        :class="ui.separator({ class: props.ui?.separator })"
      />

      <UForm
        v-if="fields?.length"
        ref="formRef"
        :state="state"
        :schema="schema"
        :validate="validate"
        :validate-on="validateOn"
        :class="ui.form({ class: props.ui?.form })"
        :disabled="disabled"
        @submit="emits('submit', $event)"
      >
        <UFormField
          v-for="field in fields"
          :key="field.name"
          :label="field.type === 'checkbox' ? '' : field.label ?? ''"
          :description="field.description"
          :help="field.help"
          :hint="field.hint"
          :name="field.name"
          :size="field.size"
          :required="field.required"
        >
          <slot :name="`${field.name}-field`" v-bind="{ state, field }">
            <UCheckbox v-if="field.type === 'checkbox'" v-model="state[field.name]" v-bind="omit(field, ['description', 'help', 'hint', 'size'])" />
            <USelectMenu v-else-if="field.type === 'select'" v-model="state[field.name]" v-bind="omit(field, ['description', 'help', 'hint', 'size'])" />
            <UInput
              v-else-if="field.type === 'password'"
              v-model="state[field.name]"
              :type="passwordVisibility ? 'text' : 'password'"
              v-bind="omit(field, ['label', 'description', 'help', 'hint', 'size', 'type', 'required', 'defaultValue'])"
              :ui="{ root: 'w-full' }"
            >
              <template #trailing>
                <UButton
                  color="neutral"
                  variant="link"
                  size="sm"
                  :icon="passwordVisibility ? appConfig.ui.icons.eyeOff : appConfig.ui.icons.eye"
                  :aria-label="passwordVisibility ? t('authForm.hidePassword') : t('authForm.showPassword')"
                  :aria-pressed="passwordVisibility"
                  aria-controls="password"
                  @click="passwordVisibility = !passwordVisibility"
                />
              </template>
            </UInput>
            <UInput
              v-else
              v-model="state[field.name]"
              v-bind="omit(field, ['label', 'description', 'help', 'hint', 'size', 'required', 'defaultValue'])"
              :ui="{ root: 'w-full' }"
            />
          </slot>

          <template v-if="!!slots[`${field.name}-label`]" #label>
            <slot :name="`${field.name}-label`" />
          </template>
          <template v-if="!!slots[`${field.name}-description`]" #description>
            <slot :name="`${field.name}-description`" />
          </template>
          <template v-if="!!slots[`${field.name}-hint`]" #hint>
            <slot :name="`${field.name}-hint`" />
          </template>
          <template v-if="!!slots[`${field.name}-help`]" #help>
            <slot :name="`${field.name}-help`" />
          </template>
          <template v-if="!!slots[`${field.name}-error`]" #error>
            <slot :name="`${field.name}-error`" />
          </template>
        </UFormField>

        <slot v-if="!!slots.validation" name="validation" />

        <UButton
          type="submit"
          :label="t('authForm.submit')"
          block
          :loading="loading"
          v-bind="submit"
        />
      </UForm>
    </div>

    <div v-if="!!slots.footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" />
    </div>
  </Primitive>
</template>
