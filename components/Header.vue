<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';

const isDesktop = ref(false);
const showMenu = ref(false);
const isMounted = ref(false);

onMounted(() => {
    isDesktop.value = useMediaQuery('(min-width: 768px)').value;
    isMounted.value = true
})

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};
</script>
<template>
    <header class="border-b border-b-fuzzy-wuzzy-brown-400 px-8 py-4 shadow-sm backdrop-blur-xl sticky top-0 z-50">
        <nav class="grid grid-cols-12 ">
            <Logo class="col-span-2" />
            <div
                class="h-full w-full sm:items-end sm:justify-end col-start-12 sm:col-span-2 flex sm:flex-col md:flex-row md:items-center md:col-start-4 md:col-span-6 md:justify-center">
                <template v-if="isMounted && !isDesktop">

                    <button @click="toggleMenu" class="focus:outline-none">
                        <span class="burger-bar"></span>
                        <span class="burger-bar"></span>
                        <span class="burger-bar"></span>
                    </button>

                    <!-- Desktop Navigation Links -->

                </template>
                <template v-if="isMounted && isDesktop">
                    <!-- Mobile Burger Button -->
                    <div class="inline-flex gap-x-6 col-start-4 col-span-6 justify-center h-full w-full items-center">
                        <NuxtLink :to="'/'" active-class="text-lightning-yellow-500"
                            class="hover:text-lightning-yellow-500 font-semibold transition-colors">Travel
                        </NuxtLink>
                        <NuxtLink active-class="text-lightning-yellow-500" :to="'/booking'"
                            class="hover:text-lightning-yellow-500 font-semibold transition-colors">Booking
                        </NuxtLink>
                    </div>
                </template>
            </div>
        </nav>
        <!-- Mobile Navigation Menu -->
        <div v-if="isMounted && !isDesktop && showMenu"
            class="p-4 absolute top-full left-0 right-0 bg-scooter-200 border-t-fuzzy-wuzzy-brown-600 z-50">
            <NuxtLink :to="'/'" active-class="text-lightning-yellow-500"
                class="block hover:text-lightning-yellow-500 font-semibold transition-colors">Travel</NuxtLink>
            <NuxtLink active-class="text-lightning-yellow-500" :to="'/booking'"
                class="block hover:text-lightning-yellow-500 font-semibold transition-colors">Booking</NuxtLink>
        </div>
    </header>
</template>
<style scoped>
.burger-bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s;
    background-color: #333;
}
</style>