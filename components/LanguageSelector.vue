<template>
<Popover class="relative">
<PopoverButton class="text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 block py-1 pr-4 pl-3 ">
  <p> 🗣️ </p>
  <ChevronDownIcon/>
</PopoverButton>

<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
  <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-2">
    <div class="flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-3 shadow-lg ring-1 ring-gray-900/5">
      <div class="p-4">
        <div v-for="item in languages" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div>
            <nuxt-link :to="item.href" class="font-semibold text-gray-900">
              {{ item.name }}
              <span class="absolute inset-0" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </PopoverPanel>
</transition>
</Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'


const languages = [
  { name: '🇮🇹 Italiano', href: '/it-IT/'},
  { name: '🇩🇪 Deutsch', href: '/de-DE/'},
  { name: '🇬🇧 English', href: '/en-US/'},
]
</script>
