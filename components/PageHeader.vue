<template>
  <nav class="bg-white border-t border-gray-200 px-4 lg:px-6 py-2.5">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a class="flex items-center" href="https://hyperbit.it">
        <img alt="HyperBit Logo"
             class="mr-3 h-6 sm:h-9" src="https://general-hyperbit-0.eu-central-1.linodeobjects.com/HyperBit_Dark_Logo.svg"/>
      </a>
      <div class="flex items-center lg:order-2">
        <a class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
           href="https://wip.hyperbit.it">Log in
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
      <div id="mobile-menu-2" :class="{hidden : !showMenu}" class=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <nuxt-link @click="showMenu = !showMenu" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
               href="/">Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link @click="showMenu = !showMenu" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
               href="/contacts">Contatti</nuxt-link>
          </li>
          <li>
            <nuxt-link @click="showMenu = !showMenu" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
               href="/privacy-policy">Privacy Policy</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data(){
    return {
      showMenu: false
    }
  },
  name: "page-header",
}
</script>

<style scoped>

</style>
