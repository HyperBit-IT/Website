<template xmlns="http://www.w3.org/1999/html">
  <it-page-header/>
  <it-cookie-banner/>
  <section>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-16 sm:pb-30">
        <div>
          <div>
            <h1 class="text-5xl font-bold tracking-tight sm:text-center sm:text-5xl">
              Soluzioni informatiche
              <br/>
              per il tuo Business
            </h1>
            <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
              Il nostro obiettivo è di aiutare le piccole e medie imprese a colmare il divario digitale
              attraverso soluzioni informatiche personalizzate e innovative.
            </p>
            <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
              Offriamo servizi di Consulenza IT, Hybrid Cloud (IaaS)
              e soluzioni informatiche personalizzate per le esigenze del tuo business.
            </p>
          </div>
          <div class="text-center mt-8">
            <it-custom-button/>
          </div>
          <div>
            <it-product-grid/>
            <it-partners/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <it-page-footer/>
</template>

<script>
import Partners from "~/components/it/Partners.vue";

export default {
  name: "index",
  components: {Partners}
}
</script>

<style scoped>

</style>
