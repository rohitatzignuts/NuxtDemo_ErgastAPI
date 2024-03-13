<script setup lang="ts">
type Race = {
    round?: number,
    season?: number,
    Circuit?: {
        circuitName: string,
        location: {
            locality: string,
            country: string
        }
    },
    date?: string,
}

const props = defineProps<{
    race: Race
}>()

const dateFormat = useDateFormatter()
const formattedDate = dateFormat(props.race.date)
</script>

<template>
    <div class="border-t-4 border-r-4 p-4 rounded-lg hover:pt-2">
        <div id="when" class="flex justify-between align-top">
            <p>Round: {{ race.round }}</p>
            <p class="font-bold text-xl">{{ formattedDate }}</p>
        </div>
        <hr class="border-stone-400 my-4">
        <div id="where">
            <p class="font-medium text-2xl">{{ race.Circuit.Location.country }}</p>
            <p class="font-thin">{{ race.raceName }} {{ race.season }}</p>
        </div>
        <hr class=" border-stone-400 my-4">
        <NuxtLink :to="`races/${race.round}`">
            <img src="https://media.formula1.com/content/dam/fom-website/races/2024/race-listing/Pre-Season-Testing.jpg.transform/6col/image.jpg"
            class="object-cover rounded my-4"/>
        </NuxtLink>
    </div>
</template>