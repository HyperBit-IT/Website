<template>
  <SnippetsCookieConsent/>
  <div class="relative px-6 lg:px-8">
    <div class="mx-auto max-w-3xl pb-32 sm:pt-24 sm:pb-40">
      <div>
        <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
          {{ $t('contacts') }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
          {{ $t('contacts1') }} <a class="text-blue-600"
                                   href="https://www.openstreetmap.org/node/10309533819#map=19/46.06698/11.23658">{{
            $t('foot1')
          }}</a>
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
          {{ $t('contacts2') }}
          <a class="text-blue-600" href="mailto:mail@hyperbit.it">{{ $t('contacts3') }}</a>,
          <a class="text-blue-600" href="https://t.me/HyperBitIT">{{ $t('contacts4') }}</a>,
          <a class="text-blue-600" href="mailto:cert@pec.hyperbit.it">{{ $t('contacts5') }}</a>
          {{ $t('contacts6') }}
          <a class="text-blue-600" href="tel:+3904611819049"> 04611819049</a>.
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
          {{ $t('contacts7') }}
          <a class="text-blue-600" href="mailto:noc@hyperbit.it"> noc@hyperbit.it</a>
        </p>
        <div class="text-gray-600 text-justify sm:text-center">
          <br/>
          <iframe class="w-full h-72"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=11.234813332557678%2C46.066164900086726%2C11.238353848457336%2C46.06779696385379&amp;layer=mapnik&amp;marker=46.06698093800196%2C11.236583590507507">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contacts"
}
</script>

<style scoped>

</style>
