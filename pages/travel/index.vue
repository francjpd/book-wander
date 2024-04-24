<script setup lang="ts">
import type { Travel } from '~/types/travel';
import { columns } from '~/components/travels/columns';

const route = useRoute()
const router = useRouter();
const continent = ref(route.query.continent as string)
const getTravels = async () => await useFetch<Travel[]>(continent?.value?.length ? '/api/travels?continent=' + continent.value : '/api/travels')
const { data } = await getTravels()
const travels = ref<Travel[]>(data!.value || [])

const travelsByDate = computed(() => {
    return travels.value?.sort((a, b) => {
        if (a.departure > b.departure) return 1
        if (a.departure < b.departure) return -1
        return 0
    })
})

const contintents = [
    { value: 'Asia', label: 'Asia' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Europe', label: 'Europe' },
    { value: 'North America', label: 'North America' },
    { value: 'South America', label: 'South America' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Antartica', label: 'Antartica' },
]

const handleSelect = async (ev: string) => {
    continent.value = ev;
    await router.push({ query: { ...router.currentRoute.value.query, continent: continent.value } });
    const { data } = await getTravels();
    travels.value = data!.value || [];
}
</script>

<template>
    <div class="flex flex-col gap-8">
        <h2 class="text-4xl font-extrabold font-sans text-lightning-yellow-600"> Search for a destiny!</h2>
        <div class="w-auto justify-between inline-flex sticky top-0 bg-scooter-50 z-10 p-2">

            <TravelsFilter :value="continent" placeholder="Filter by Continent" :items="contintents"
                @select="handleSelect" />

            <Button class="text-gray-900 font-semibold bg-lightning-yellow-500 hover:bg-lightning-yellow-600">Add another travel</Button>
        </div>

        <TravelsDataTable :columns="columns" :data="travelsByDate" />
    </div>

</template>
