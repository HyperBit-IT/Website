<template>
  <nav class="bg-white border-t border-gray-200 px-4 lg:px-4 py-2.5">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a class="flex items-center" href="https://hyperbit.it">
        <img alt="HyperBit Logo"
             class="mr-3 h-6 sm:h-9"
             src="/HyperBit_Dark_Logo.svg"/>
      </a>
      <div class="flex items-center lg:order-2">
        <a class="font-medium rounded-lg text-sm focus:outline-none">
          <LanguageButton/>
        </a>
        <button aria-controls="mobile-menu-2" aria-expanded="false"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                data-collapse-toggle="mobile-menu-2" type="button" @click="showMenu = !showMenu">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  fill-rule="evenodd"></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fill-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div id="mobile-menu-2" :class="{hidden : !showMenu}"
           class=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
        <ul class="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <nuxt-link
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                href="/"
                @click="showMenu = !showMenu">{{ $t('home') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                href="/contacts"
                @click="showMenu = !showMenu">{{ $t('contacts') }}
            </nuxt-link>
          </li>
          <!-- To be coded, sorry guys
          <li>
            <nuxt-link
                class="block py-1 pr-2 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                href="/AboutUs"
                @click="showMenu = !showMenu">{{ $t('people') }}
            </nuxt-link>
          </li>
          -->
          <li>
            <nuxt-link
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                href="/privacy-policy"
                @click="showMenu = !showMenu">{{ $t('privacypolicy') }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>

import LanguageButton from "~/components/buttons/LanguageButton.vue";
import PopOver from "~/components/snippets/PopOver.vue";

export default {
  components: {PopOver, LanguageButton},
  data() {
    return {
      showMenu: false
    }
  },
  name: "page-header",
}
</script>

<style scoped>

</style>
