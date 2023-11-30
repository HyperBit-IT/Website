<template>
  <HBHeader/>
    <nuxt-page />
  <HBFooter/>
</template>

<script lang="ts" setup>
import HBHeader from "~/components/templates/HBHeader.vue";
import HBFooter from "~/components/templates/HBFooter.vue";
const route = useRoute()
</script>
