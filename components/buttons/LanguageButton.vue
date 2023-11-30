<script setup>
const locales = [{
  name: '🇬🇧 English',
  value: 'en'
}, {
  name: '🇮🇹 Italiano',
  value: 'it',
}, {
  name: '🇩🇪 Deutsch',
  value: 'de'
}]
</script>
<template>
  <USelect v-model="$i18n.locale" :options="locales" option-attribute="name"/>
</template>
