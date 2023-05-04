<template xmlns="http://www.w3.org/1999/html">
    <section>
        <div class="relative px-6 lg:px-8">
            <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-16 sm:pb-30">
                <div>
                    <div>
                        <h1 class="text-5xl font-bold tracking-tight sm:text-center sm:text-5xl">
                            Soluzioni informatiche
                            <br/>
                            per il tuo Business
                        </h1>
                        <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
                            Il nostro obiettivo è di aiutare le piccole e medie imprese a colmare il divario digitale
                            attraverso soluzioni informatiche personalizzate e innovative.
                        </p>
                        <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-center">
                            Offriamo servizi di Consulenza IT, Hybrid Cloud (IaaS)
                            e soluzioni informatiche personalizzate per le esigenze del tuo business.
                        </p>
                    </div>
                    <div class="text-center mt-8">
                        <custom-button/>
                    </div>
                    <div>
                        <!--<tech-stack/>-->
                        <product-grid/>
                        <partners/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductGrid from "~/components/ProductGrid.vue";
import Partners from "~/components/TechStack.vue";

export default {
    name: "index",
    components: {Partners, ProductGrid}
}
</script>

<style scoped>

</style>
