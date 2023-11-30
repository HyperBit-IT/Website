<template>
  <SnippetsCookieConsent/>
  <section>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-16 sm:pb-30">
        <div>
          <div>
            <h1 class="text-5xl font-bold tracking-tight sm:text-center sm:text-5xl">
              {{ $t('main1') }}
              <br/>
              {{ $t('main2') }}
            </h1>
            <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
              {{ $t('main3') }}
            </p>
            <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
              {{ $t('main4') }}
            </p>
          </div>
          <div class="text-center mt-8">
            <UButton size="xl" to="mailto:mail@hyperbit.it" target="_blank">{{ $t('main5') }}</UButton>
          </div>
          <div>
            <div class="bg-white">
              <div class="mx-auto max-w-7xl">
                <div class="mx-auto max-w-2xl lg:text-center">
                  <p class="mt-10 text-xl font-semibold leading-8">
                    {{ $t('main6') }}
                  </p>
                </div>
                <div class="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
                  <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <component :is="FingerPrintIcon" aria-hidden="true" class="h-6 w-6 text-white"/>
                        </div>
                        {{ $t('main7') }}
                      </dt>
                      <dd class="mt-2 text-base leading-7 text-gray-600">{{ $t('main8') }}</dd>
                    </div>
                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <component :is="CloudArrowUpIcon" aria-hidden="true" class="h-6 w-6 text-white"/>
                        </div>
                        {{ $t('main9') }}
                      </dt>
                      <dd class="mt-2 text-base leading-7 text-gray-600">{{ $t('main10') }}</dd>
                    </div>
                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <component :is="ArrowPathIcon" aria-hidden="true" class="h-6 w-6 text-white"/>
                        </div>
                        {{ $t('main11') }}
                      </dt>
                      <dd class="mt-2 text-base leading-7 text-gray-600">{{ $t('main12') }}</dd>
                    </div>
                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <component :is="LockClosedIcon" aria-hidden="true" class="h-6 w-6 text-white"/>
                        </div>
                        {{ $t('main13') }}
                      </dt>
                      <dd class="mt-2 text-base leading-7 text-gray-600">{{ $t('main14') }}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <Partners/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon} from '@heroicons/vue/24/outline'
import Partners from "~/components/templates/Partners.vue";

export default {
  name: "index",
  methods: {LockClosedIcon, ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon},
  components: {Partners},
}
</script>

<style scoped>

</style>

<style scoped>

</style>
