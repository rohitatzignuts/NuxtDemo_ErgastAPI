<script setup lang="ts">

const {data : response} = await useFetch('/api/races')
const races = toRaw(response.value.MRData.RaceTable.Races)

</script>

<template>
    <div>
        <MainHeading />
        <div class="text-white py-4">
            <div class="grid grid-cols-3 gap-4">
                <div v-for="race in races" :key="race.id">
                    <RaceCard :race="race"/>
                </div>
            </div>
        </div>
    </div>
</template>
