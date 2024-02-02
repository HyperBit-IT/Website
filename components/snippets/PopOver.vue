<template>
  <Popover>
    <PopoverButton @click="showPopover = !showPopover" class="inline-flex items-center leading-3 text-gray-700 focus:outline-none">
      <span>{{ $t('services') }}</span>
      <ChevronDownIcon class="h-5 w-4" :class="{hidden : showPopover}" aria-hidden="false" />
      <ChevronUpIcon class="h-5 w-4" :class="{hidden : !showPopover}" aria-hidden="false" />
    </PopoverButton>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div class="p-4">
            <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
              <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <component :is="CommandLineIcon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
              </div>
              <div>
                <a href="/Services/MSP" class="font-semibold text-gray-900">
                  {{ $t('services1') }}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{{ $t('services2') }}</p>
              </div>
            </div>
            <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
              <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <component :is="ServerStackIcon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
              </div>
              <div>
                <a href="/Services/Cloud" class="font-semibold text-gray-900">
                  {{ $t('services3') }}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{{ $t('services4') }}</p>
              </div>
            </div>
            <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
              <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <component :is="ChatBubbleLeftRightIcon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
              </div>
              <div>
                <a href="/Services/UCaaS" class="font-semibold text-gray-900">
                  {{ $t('services5') }}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{{ $t('services6') }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <a href="callto:+3904611819049" class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
              <component :is="PhoneIcon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              {{ $t('services7') }}
            </a>
            <a href="mailto:mail@hyperbit.it" class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
              <component :is="EnvelopeOpenIcon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              {{ $t('services8') }}
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { EnvelopeOpenIcon, PhoneIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/20/solid'
import { ChatBubbleLeftRightIcon, ServerStackIcon, CommandLineIcon } from '@heroicons/vue/24/outline'

let showPopover = false
</script>
