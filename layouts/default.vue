<template>
    <div>
        <header class="border-b-2 border-b-fuzzy-wuzzy-brown-400 px-8 py-4 shadow-sm">
            <nav>
                <Logo />
                <ul class="inline-flex gap-6">
                    <li>
                        <NuxtLink :to="'/booking'" class=""> Booking</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="'/'" class=""> Travel</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <section class=" p-8">
            <slot></slot>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>