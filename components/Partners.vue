<template>
    <div class="bg-white py-24 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">I nostri partner aziendali</h2>
            <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <nuxt-link href="https://www.linode.com/">
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/linode-partner.png" alt="Akamai" width="805" height="252"/>
                </nuxt-link>
                <nuxt-link href="https://www.aruba.it">
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/aruba-business.png" alt="Aruba Business" width="290" height="83" />
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
