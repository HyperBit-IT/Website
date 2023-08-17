<template>
  <div :class="{hidden : !showBanner}"
       class="bg-indigo-600 relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p class="text-sm leading-6 text-white">
        <strong class="font-semibold">But what about the cookie banner? We don't track user data, so it's not
          necessary!</strong>
      </p>
    </div>
    <div class="flex flex-1 justify-end">
      <button class="-m-3 p-3 focus-visible:outline-offset-[-4px]" type="button" @click="showBanner = !showBanner">
        <span class="sr-only">Dismiss</span>
        <svg aria-hidden="true" class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <XIcon/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import XIcon from "~/components/icons/xIcon.vue";

export default {
  name: "EnCookieBanner",
  components: {XIcon},
  data() {
    return {
      showBanner: true
    }
  }
}
</script>

<style scoped>

</style>
