<template>
    <div :class="{hidden : !showBanner}" class="bg-indigo-600 relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p class="text-sm leading-6 text-white">
                <strong class="font-semibold">Ma il banner dei cookie? Non tracciamo i dati degli utenti, quindi non è
                    necessario!</strong>
            </p>
        </div>
        <div class="flex flex-1 justify-end">
            <button type="button" @click="showBanner = !showBanner" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                <span class="sr-only">Dismiss</span>
                <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <XIcon/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import XIcon from "~/components/icons/xIcon.vue";

export default {
    name: "CookieBanner",
    components: {XIcon},
    data(){
        return {
            showBanner: true
        }
    }
}
</script>

<style scoped>

</style>
