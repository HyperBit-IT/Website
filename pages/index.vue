<template>
  <section>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
                class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span class="text-gray-600">
                    Inviaci un messaggio!
                      <a href="https://wa.me/message/AN5DQU53PIQQH1" class="font-semibold text-indigo-600">
                      <span class="absolute inset-0" aria-hidden="true"/>
                      Premi qua <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
            </div>
          </div>
          <div>
            <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              Home
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
              Benvenuto sul nostro sito!
            </p>
            <p class=" text-lg leading-8 text-gray-600 sm:text-center">
              Qua potrai trovare informazioni su di noi, i nostri servizi ed i nostri contatti
            </p>
            <div class="mt-8 flex gap-x-4 sm:justify-center">
              <CustomButton>
              </CustomButton>
            </div>
          </div>
          <TwoByTwoGrid/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
