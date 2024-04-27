<template>
    <header class="border-b border-b-fuzzy-wuzzy-brown-400 px-8 py-4 shadow-sm backdrop-blur-xl sticky top-0 z-50">
        <nav class="grid grid-cols-12 ">
            <Logo class="col-span-2" />
            <div class="inline-flex gap-6 col-start-4 col-span-6 justify-center h-full w-full items-center">
                <NuxtLink :to="'/booking'" class=" hover:text-lightning-yellow-500 font-semibold transition-colors"> Booking</NuxtLink>
                <NuxtLink :to="'/'" class=" hover:text-lightning-yellow-500 font-semibold transition-colors"> Travel</NuxtLink>
            </div>
        </nav>
    </header>
</template>