<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
const useIdFunction = () => useId()
</script>
<template>
  <div class="md:w-auto sm:w-full sm:m-0 m-auto">
    <NuxtLoadingIndicator />

    <ConfigProvider :use-id="useIdFunction">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ConfigProvider>
  </div>
</template>
