<script lang="ts" setup>
const route = useRoute();
const round = ref(route.params.round);

const { data: response } = await useFetch(`/api/${round.value}`);
const raceData = toRaw(response.value.MRData.RaceTable.Races[0]);

const dateFormat = useDateFormatter()

</script>

<template>
    <div>
        <div id="header" class="relative z-0">
            <img class="object-cover block" src="https://placehold.co/1600X350/FFF/FFF" />
            <p class="absolute inset-0 flex items-center justify-center text-stone-500 z-10 text-5xl font-medium">
                {{ raceData.raceName }} {{ raceData.season }}
            </p>
        </div>
        <div id="schedule" class="text-white mt-4">
            <hr class="border-stone-400 my-4">
            <p class="text-4xl">Race Weekend</p>
            <h4 class="leading-5 mt-2 mb-8 tracking-wide">{{ raceData.raceName }} {{ raceData.season }}</h4>
            <p class="py-2">Track Times</p>
            <section class="border my-4 p-4">
                <div>
                    <ul>
                        <li class="flex flex-row my-4">
                            <div class="basis-1/4">
                                <p class="text-2xl">{{ dateFormat(raceData.date) }}</p>
                            </div>
                            <div class="basis-3/4">
                                <p class="text-2xl mb-2">Race</p>
                                <span>{{raceData.time}}</span>
                            </div>
                        </li>
                        <hr class="border-stone-400 my-4">
                        <li class="flex flex-row my-4">
                            <div class="basis-1/4">
                                <p class="text-2xl">{{ dateFormat(raceData.Qualifying.date) }}</p>
                            </div>
                            <div class="basis-3/4">
                                <p class="text-2xl mb-2">Qualifying</p>
                                <span>{{raceData.Qualifying.time}}</span>
                            </div>
                        </li>
                        <hr class="border-stone-400 my-4">
                        <li class="flex flex-row my-4">
                            <div class="basis-1/4">
                                <p class="text-2xl">{{ dateFormat(raceData.ThirdPractice.date) }}</p>
                            </div>
                            <div class="basis-3/4">
                                <p class="text-2xl mb-2">Practice 3</p>
                                <span>{{raceData.ThirdPractice.time}}</span>
                            </div>
                        </li>
                        <hr class="border-stone-400 my-4">
                        <li class="flex flex-row my-4">
                            <div class="basis-1/4">
                                <p class="text-2xl">{{ dateFormat(raceData.SecondPractice.date) }}</p>
                            </div>
                            <div class="basis-3/4">
                                <p class="text-2xl mb-2">Practice 2</p>
                                <span>{{raceData.SecondPractice.time}}</span>
                            </div>
                        </li>
                        <hr class="border-stone-400 my-4">
                        <li class="flex flex-row my-4">
                            <div class="basis-1/4">
                                <p class="text-2xl">{{ dateFormat(raceData.FirstPractice.date) }}</p>
                            </div>
                            <div class="basis-3/4">
                                <p class="text-2xl mb-2">Practice 1</p>
                                <span>{{raceData.FirstPractice.time}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>
