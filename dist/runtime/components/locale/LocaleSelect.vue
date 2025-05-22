<script>

</script>

<script setup>
defineProps({
  locales: { type: Array, required: false }
});
const modelValue = defineModel({ type: String });
function getEmojiFlag(locale) {
  const languageToCountry = {
    ar: "sa",
    // Arabic -> Saudi Arabia
    bn: "bd",
    // Bengali -> Bangladesh
    ca: "es",
    // Catalan -> Spain
    ckb: "iq",
    // Central Kurdish -> Iraq
    cs: "cz",
    // Czech -> Czech Republic (note: modern country code is actually 'cz')
    da: "dk",
    // Danish -> Denmark
    el: "gr",
    // Greek -> Greece
    en: "gb",
    // English -> Great Britain
    et: "ee",
    // Estonian -> Estonia
    he: "il",
    // Hebrew -> Israel
    hi: "in",
    // Hindi -> India
    hy: "am",
    // Armenian -> Armenia
    ja: "jp",
    // Japanese -> Japan
    km: "kh",
    // Khmer -> Cambodia
    ko: "kr",
    // Korean -> South Korea
    nb: "no",
    // Norwegian Bokmål -> Norway
    sv: "se",
    // Swedish -> Sweden
    uk: "ua",
    // Ukrainian -> Ukraine
    ur: "pk",
    // Urdu -> Pakistan
    vi: "vn"
    // Vietnamese -> Vietnam
  };
  const baseLanguage = locale.split("-")[0]?.toLowerCase() || locale;
  const countryCode = languageToCountry[baseLanguage] || locale.replace(/^.*-/, "").slice(0, 2);
  return countryCode.toUpperCase().split("").map((char) => String.fromCodePoint(127397 + char.charCodeAt(0))).join("");
}
</script>

<template>
  <USelectMenu
    v-model="modelValue"
    :search-input="false"
    value-key="code"
    label-key="name"
    :items="locales"
  >
    <template #leading>
      <span v-if="modelValue" class="size-5 text-center">
        {{ getEmojiFlag(modelValue) }}
      </span>
    </template>

    <template #item-leading="{ item }">
      <span class="size-5 text-center">
        {{ getEmojiFlag(item.code) }}
      </span>
    </template>
  </USelectMenu>
</template>
