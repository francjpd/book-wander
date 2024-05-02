<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isDesktop = ref(false)
const showMenu = ref(false)
const isMounted = ref(false)

onMounted(() => {
  isDesktop.value = useMediaQuery('(min-width: 768px)').value
  isMounted.value = true
})

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <header
    class="border-b border-b-fuzzy-wuzzy-brown-400 px-8 py-4 shadow-sm backdrop-blur-xl md:sticky md:top-0 z-50 relative"
  >
    <nav class="grid grid-cols-12 ">
      <Logo class="col-span-2" />
      <div
        class="flex h-full w-full items-center justify-center col-span-2 col-start-11 flex-col md:flex-row md:items-center md:col-start-4 md:col-span-6 md:justify-center"
      >
        <template v-if="isMounted && !isDesktop">
          <button
            class="focus:outline-none"
            @click="toggleMenu"
          >
            <span class="burger-bar" />
            <span class="burger-bar" />
            <span class="burger-bar" />
          </button>

          <!-- Desktop Navigation Links -->
        </template>
        <template v-if="isMounted && isDesktop">
          <!-- Mobile Burger Button -->
          <div class="inline-flex gap-x-6 col-start-4 col-span-6 justify-center h-full w-full items-center">
            <NuxtLink
              :to="'/'"
              active-class="text-lightning-yellow-500"
              class="hover:text-lightning-yellow-500 font-semibold transition-colors"
            >Travel
            </NuxtLink>
            <NuxtLink
              active-class="text-lightning-yellow-500"
              :to="'/booking'"
              class="hover:text-lightning-yellow-500 font-semibold transition-colors"
            >Booking
            </NuxtLink>
          </div>
        </template>
      </div>
    </nav>
    <!-- Mobile Navigation Menu -->
    <div
      v-if="isMounted && !isDesktop && showMenu"
      class="p-4 absolute top-full  left-0 right-0 bg-scooter-200 border-t-fuzzy-wuzzy-brown-600 z-50 flex flex-col items-start"
    >
      <Button
        variant="ghost"
        @click="toggleMenu"
      >
        <NuxtLink
          :to="'/'"
          active-class="text-lightning-yellow-600"
          class="block hover:text-lightning-yellow-600 font-semibold transition-colors"
        >Travel</NuxtLink>
      </Button>
      <Button
        variant="ghost"
        @click="toggleMenu"
      >
        <NuxtLink
          active-class="text-lightning-yellow-600"
          :to="'/booking'"
          class="block hover:text-lightning-yellow-600 font-semibold transition-colors"
        >Booking</NuxtLink>
      </Button>
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
