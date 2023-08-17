<template xmlns="http://www.w3.org/1999/html">
  <de-page-header/>
  <de-cookie-banner/>
  <section>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-16 sm:pb-30">
        <div>
          <div>
            <h1 class="text-5xl font-bold tracking-tight sm:text-center sm:text-5xl">
              IT-Lösungen
              <br/>
              für Ihr Unternehmen
            </h1>
            <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
              Unser Ziel ist es, kleinen und mittleren Unternehmen zu helfen, die digitale Kluft zu überwinden durch maßgeschneiderte und innovative IT-Lösungen anzubieten.            </p>
            <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
              Wir bieten IT-Beratungsdienste, Hybrid Cloud (IaaS) und maßgeschneiderte IT-Lösungen für Ihre Geschäftsanforderungen.
            </p>
          </div>
          <div class="text-center mt-8">
            <de-custom-button/>
          </div>
          <div>
            <de-product-grid/>
            <de-partners/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <de-page-footer/>
</template>

<script>
import Partners from "~/components/de/Partners.vue";

export default {
  name: "index",
  components: {Partners}
}
</script>

<style scoped>

</style>
