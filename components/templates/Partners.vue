<template>
  <div class="bg-white py-24 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">{{ $t('partners') }}</h2>
      <div class="mx-auto mt-8 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <nuxt-link href="https://www.linode.com/">
          <img alt="Akamai Solutions Partner" class="col-span-2 max-h-12.5 w-full object-contain lg:col-span-1"
               height="126" src="/Akamai-Partner-Logo.png" width="403"/>
        </nuxt-link>
        <nuxt-link href="https://www.wildix.com">
          <img alt="Wildix Gold Partner" class="col-span-2 max-h-12.5 w-full object-contain lg:col-span-1"
               height="356" src="/Wildix_Partner-Gold.png" width="1182"/>
        </nuxt-link>
        <nuxt-link href="https://www.microsoft.com">
          <img alt="Microsoft Partner" class="col-span-2 max-h-12.5 w-full object-contain lg:col-span-1"
               height="262" src="/Microsoft-Partner.png" width="400"/>
        </nuxt-link>
      </div>
      <center>
        <div class="mx-auto mt-8 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <nuxt-link href="https://www.redhat.com">
            <img alt="RedHat Partner Ready"
                 class="col-span-2 max-h-12.5 w-full object-contain lg:col-span-1" height="290"
                 src="/Logo-Red_Hat-Standard-RGB.png" width="1226"/>
          </nuxt-link>
          <nuxt-link href="https://www.aruba.it">
            <img alt="Aruba Business Partner" class="col-span-2 max-h-12.5 w-full object-contain lg:col-span-1"
                 height="83" src="/aruba-business.png" width="290"/>
          </nuxt-link>
          <nuxt-link href="https://www.suse.com">
            <img alt="SUSE Sapphire Partner"
                 class="col-span-2 max-h-12.5 w-full object-contain lg:col-span-1" height="3000"
                 src="/SUSE_Logo-hor_L_Green-pos_sRGB.png" width="9000"/>
          </nuxt-link>
        </div>
      </center>
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
