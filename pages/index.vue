<script setup lang="ts">
import debounce from 'debounce'
import type { Travel } from '~/types/travel'
import { columns } from '~/components/travels/columns'
import type { Booking } from '~/types/booking'

const API = '/api/travels'

const route = useRoute()
const router = useRouter()
const dataTableColumns = columns || []
const continent = ref(route.query.continent as string || 'all')
const search = ref<string>(route.query.search as string || '')
const selected = ref()
const isOpen = ref<boolean>(false)
const isEditing = ref<boolean>(false)
const getTravels = useGetTravels(continent, search)


const travels = ref<Travel[]>(await getTravels(true))

const travelsByDate = computed(() => travels.value.length
  ? [...travels.value].sort((a, b) => {
    if (a.departure > b.departure) return 1
    if (a.departure < b.departure) return -1
    return 0
  })
  : [])

const handleSelect = async (ev: string) => {
  continent.value = ev
  await router.push({ query: { ...router.currentRoute.value.query, continent: continent.value } })
  travels.value = await getTravels();
}

const handleSearch = debounce(async (ev: InputEvent) => {
  ev.preventDefault()
  await router.push({ query: { ...router.currentRoute.value.query, search: search.value } })
  travels.value = await getTravels();
}, 200)

const handleSubmit = async (values: Travel) => {
  let endpoint = API
  if (isEditing.value && values.id) endpoint = endpoint.concat(`/${values.id}`)

  await $fetch(endpoint, {
    method: isEditing.value ? 'PUT' : 'POST',
    body: { ...values },
  })

  isOpen.value = false
  travels.value = await getTravels();
}

const handleAddTravel = () => {
  selected.value = newTravel()
  isOpen.value = true
  isEditing.value = false
}

const handleEditTravel = (travel: Travel) => {
  selected.value = travel
  isOpen.value = true
  isEditing.value = true
}

const handleDeleteTravel = async ({ id }: Travel) => {
  await $fetch(`${API}/${id}`, {
    method: 'DELETE',
  })
  travels.value = await getTravels();
}

const handleBookitTravel = async (travel: Travel) => {
  try {
    const { id } = await $fetch<Booking>('/api/booking', {
      method: 'POST',
      body: { ...travel },
    })

    if (id) await navigateTo({ path: `/booking/new/${id}`, query: { step: 2 } })
  }
  catch (error) {
    createError({ statusMessage: 'Something went wrong' })
  }
}
</script>

<template>
  <div class="flex flex-col gap-8 ">
    <Menubar>
      <Input v-model="search" class=" col-span-6 md:col-span-3 lg:col-span-3"
        placeholder="Search by Destiny or country..." @input="handleSearch" />
      <TravelsFilterByContinent class="col-span-3 md:col-span-2 lg:col-span-2 w-full" :value="continent"
        @select="handleSelect" />
      <Button class="col-span-3 md:col-span-1" variant="secondary" @click="handleAddTravel">
        Add a Travel
      </Button>
      <Modal v-model="isOpen" title="Add a travel">
        <TravelsForm :travel="selected" @submit="handleSubmit" />
      </Modal>
    </Menubar>

    <TravelsDataTable :columns="dataTableColumns" :data="travelsByDate" @bookit="handleBookitTravel"
      @delete="handleDeleteTravel" @edit="handleEditTravel" />
  </div>
</template>
