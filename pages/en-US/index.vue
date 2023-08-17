<template xmlns="http://www.w3.org/1999/html">
  <en-page-header/>
  <en-cookie-banner/>
  <section>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-16 sm:pb-30">
        <div>
          <div>
            <h1 class="text-5xl font-bold tracking-tight sm:text-center sm:text-5xl">
              IT Solutions
              <br/>
              for your business
            </h1>
            <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
              Our goal is to help small and medium-sized enterprises bridge the digital divide
              through customized and innovative IT solutions.
            </p>
            <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
              We offer IT Consulting services, Hybrid Cloud (IaaS)
              and IT solutions tailored to your business needs.
            </p>
          </div>
          <div class="text-center mt-8">
            <en-custom-button/>
          </div>
          <div>
            <en-product-grid/>
            <en-partners/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <en-page-footer/>
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
