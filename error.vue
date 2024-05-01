<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-3xl font-bold">
      {{ error.statusCode }}
    </p>
    <img
      src="/404.gif"
      class="object-cover h-full w-8/12 rounded-md relative left-24"
      alt=" John Travolta 404 meme"
    >
    <p class="mt-7 text-3xl">
      Oops.
    </p>
    <p class="mt-7">
      {{ error.message }}
    </p>
    <button
      class="btn my-7"
      @click="handleError"
    >
      Home
    </button>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>
