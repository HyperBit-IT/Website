<template>
    <div class="bg-white sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Il nostro stack tecnologico</h2>
            <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <nuxt-link href="https://rockylinux.org/it/">
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" alt="Rocky Linux" width="290" height="83" src="/rocky-logo-small.svg"/>
                </nuxt-link>
                <nuxt-link href="https://kotlinlang.org/">
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" alt="Kotlin" width="290" height="83" src="/kotlin-logo.svg"/>
                </nuxt-link>
                <nuxt-link href="https://nuxt.com/">
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" alt="Nuxt JS" width="290" height="83"  src="/nuxt-logo-green-dark.svg"/>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Partners"
}
</script>

<style scoped>

</style>
