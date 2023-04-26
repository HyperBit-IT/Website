<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl">
            <div class="mx-auto max-w-2xl lg:text-center">
                <p class="mt-10 text-xl font-semibold leading-8">
                    Ecco alcuni dei servizi che offriamo ai nostri clienti:
                </p>
            </div>
            <div class="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div v-for="feature in features" :key="feature.name" class="relative pl-16">
                        <dt class="text-base font-semibold leading-7 text-gray-900">
                            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true"/>
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

<script setup lang="ts">
import {ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon} from '@heroicons/vue/24/outline'

const features = [
    {
        name: 'Consulenza IT',
        description:
            'Consulenza personalizzata per aiutarti a scegliere le soluzioni IT giuste per il tuo business.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Hybrid Cloud (IaaS)',
        description:
            'Soluzioni di infrastruttura cloud flessibili e personalizzate per le tue esigenze.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Sviluppo di Applicazioni Web',
        description:
            'Progettiamo, sviluppiamo e manteniamo Applicazioni Web e Siti Web personalizzati.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Gestione di reti informatiche',
        description:
            'Offriamo servizi di gestione e manutenzione di reti informatiche per garantire un\'efficace funzionalità dei sistemi informatici.',
        icon: LockClosedIcon,
    },
]
</script>

<style scoped>

</style>
