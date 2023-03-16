<template>
    <div v-for="feature in features" :key="feature.hrefUrl"> 
        <a href="{{ hrefUrl }}"
        class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
    >
        {{ feature.text }}
        <span class="text-indigo-200" aria-hidden="true">
            &rarr;
        </span>
    </a>
    </div>
</template>

<script setup lang="ts">

const features = [
    {
        hrefUrl: "https://wa.me/message/AN5DQU53PIQQH1",
        text: "Contattaci su Whatsapp"
    },
    {
        hrefUrl: "mailto:mail@hyperbit.it",
        text: "Inviaci una email"
    },
]
</script>
