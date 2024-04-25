<script setup lang="ts">
import type { Travel } from '~/types/travel';
import { columns } from '~/components/travels/columns';
import debounce from 'debounce'

const route = useRoute()
const router = useRouter();
const dataTableColumns = columns || []
const continent = ref(route.query.continent as string || 'all')
const search = ref<string>(route.query.search as string || '')

const getTravels = async () => {
    const params = new URLSearchParams();

    if (continent.value.length) {
        params.append('continent', continent.value);
    }

    if (search.value.length) {
        params.append('search', search.value);
    }

    const api = `/api/travels${params.toString() ? `?${params}` : ''}`;

    return await useFetch<Travel[]>(api)
}

const { data } = await getTravels()
const travels = ref<Travel[]>(data!.value || [])

const travelsByDate = computed(() => travels.value.length ? travels.value?.sort((a, b) => {
    if (a.departure > b.departure) return 1
    if (a.departure < b.departure) return -1
    return 0
}) : [])

const contintents = [
    { value: 'all', label: 'Filter by Continent' },
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

const handleSearch = debounce(async (ev: InputEvent) => {
    ev.preventDefault();
    await router.push({ query: { ...router.currentRoute.value.query, search: search.value } });
    const { data } = await getTravels();
    travels.value = data!.value || [];
}, 200)
</script>

<template>
    <div class="flex flex-col gap-8">
        <h2 class="text-4xl font-extrabold font-sans text-lightning-yellow-600"> Search for a destiny!</h2>
        <div class="w-full items-center grid grid-cols-6 gap-4 sticky top-0 bg-scooter-50 z-10 p-2 ">

            <Input class=" col-span-6 md:col-span-4" placeholder="Search by Destiny or country..." v-model="search"
                @input="handleSearch" />
            <TravelsFilter class="col-start-2 col-span-4 md:col-span-1 w-full" :value="continent"
                placeholder="Filter by Continent" :items="contintents" @select="handleSelect" />
            <div class="col-start-2 col-span-4 md:col-span-1">
                <TravelsDrawer></TravelsDrawer>
            </div>
        </div>

        <TravelsDataTable :columns="dataTableColumns" :data="travelsByDate" />
    </div>

</template>
