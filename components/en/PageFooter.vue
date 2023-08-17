<template>
  <footer
      class="bottom left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
    <div class="text-sm text-gray-500">
      <a class="hover:underline" href="https://hyperbit.it/">HyperBit SRLs</a>
      <br>
      <a class="hover:underline" href="https://osm.org/go/0CvqspXp8?node=10309533819">Via Monte Cristallo 35, Pergine
        Valsugana (TN), Italy</a>
      <br>
      <a>P.Iva: IT02697330229 - REA: TN-243469</a>
      <br>
      <a>Share Capital: 600€</a>
    </div>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
      <li>
        <a class="mr-4 hover:underline md:mr-6 " href="https://status.hyperbit.it/">Status</a>
      </li>
      <li>
        <nuxt-link class="mr-4 hover:underline md:mr-6" href="/privacy-policy">Privacy Policy</nuxt-link>
      </li>
      <li>
        <a class="mr-4 hover:underline md:mr-6" href="https://github.com/HyperBit-IT">We &lt3 Open-Source</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "page-footer"
}
</script>

<style scoped>

</style>
