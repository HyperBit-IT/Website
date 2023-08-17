<template>
  <div>
    <NuxtLayout>
      <page-header/>
      <cookie-banner/>
      <NuxtPage/>
      <page-footer/>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>
