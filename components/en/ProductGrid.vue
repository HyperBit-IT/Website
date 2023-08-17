<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="mt-10 text-xl font-semibold leading-8">
          Here are some of the services we offer to our clients:
        </p>
      </div>
      <div class="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <component :is="feature.icon" aria-hidden="true" class="h-6 w-6 text-white"/>
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon} from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'IT Consulting',
    description:
        'Personalized consulting to help you choose the right it solutions for your business.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Hybrid Cloud (IaaS)',
    description:
        'Flexible cloud infrastructure solutions tailored to your needs.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Web Application Development',
    description:
        'We design, develop and maintain custom Web Applications and Web Sites.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Computer network management',
    description:
        'We offer computer network management and maintenance services to ensure effective functionality of computer systems.',
    icon: LockClosedIcon,
  },
]
</script>

<style scoped>

</style>
