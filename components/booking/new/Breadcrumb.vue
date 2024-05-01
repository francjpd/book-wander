<script setup lang="ts">
import { Slash } from 'lucide-vue-next'

const booking = useBookingState()
const props = defineProps<{ step?: string }>()
</script>

<template>
  <div>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <NuxtLink
            :to="`?step=1`"
            :class="`text-md ${props.step === '1' ? 'text-lightning-yellow-600 font-medium' : 'font-light'}`"
          >
            Travel
          </NuxtLink>
        </BreadcrumbItem>
        <template v-if="booking?.travel.name">
          <BreadcrumbSeparator class="text-fuzzy-wuzzy-brown-700">
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <NuxtLink
              :to="`?step=2`"
              :class="`text-md ${props.step === '2' ? 'text-lightning-yellow-600 font-medium' : 'font-light'}`"
            >
              Customer
            </NuxtLink>
          </BreadcrumbItem>
        </template>
        <template v-if="booking?.customer?.name.length">
          <BreadcrumbSeparator class="text-fuzzy-wuzzy-brown-700">
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <NuxtLink
              :to="`?step=3`"
              :class="`text-md ${props.step === '3' ? 'text-lightning-yellow-600 font-medium' : 'font-light'}`"
            >
              Payment
            </NuxtLink>
          </BreadcrumbItem>
        </template>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
</template>
