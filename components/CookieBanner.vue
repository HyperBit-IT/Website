<template>
    <div :class="{hidden : !showBanner}" class="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1" @click="showBanner = !showBanner">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p class="text-sm leading-6 text-gray-900">
                <strong class="font-semibold">Ma il banner dei cookie? Non tracciamo i dati degli utenti, quindi non è
                    necessario!</strong>
            </p>
        </div>
        <div class="flex flex-1 justify-end">
        </div>
    </div>
</template>

<script>
export default {
    name: "CookieBanner",
    data(){
        return {
            showBanner: true
        }
    }
}
</script>

<style scoped>

</style>
