<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Soluzioni tecnologiche innovative per il tuo business</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Scopri come la nostra flessibilità, l'impegno per la filosofia Open-Source, l'accesso alla tecnologia all'avanguardia e la massima attenzione alla sicurezza possono fare la differenza per la tua azienda.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="feature in features" :key="feature.name" class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
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
  import { AdjustmentsVerticalIcon, ArrowPathIcon, CodeBracketIcon, CpuChipIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      name: 'Open-Source',
      description:
        'La nostra azienda crede fermamente nella filosofia Open-Source, motivo per cui rendiamo pubblici tutti i nostri progetti per favorire la collaborazione e lo sviluppo condiviso.',
      icon: CodeBracketIcon,
    },
    {
      name: 'Flessibilità',
      description:
        'Siamo pronti ad evolverci insieme alle tue esigenze, personalizzando i nostri servizi per adattarli alle tue sfide e ai tuoi obiettivi specifici.',
      icon: AdjustmentsVerticalIcon,
    },
    {
      name: 'Hardware ',
      description:
        'Grazie alla partnership con Akamai, abbiamo accesso alla tecnologia più avanzata e stabile per garantire un Accordo di Livello di Servizio del 99.99% e prestazioni di alta qualità.',
      icon: CpuChipIcon,
    },
    {
      name: 'Sicurezza avanzata',
      description:
        'La sicurezza è la nostra massima priorità. Tutti i nostri server sono costantemente aggiornati con le ultime patch di sicurezza, firewall e protezione anti-DDoS per garantire la massima protezione contro eventuali minacce.',
      icon: LockClosedIcon,
    },
  ]
</script>