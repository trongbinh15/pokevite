<template >
    <div class="w-[300px] relative">
        <ImageViewer :sprites="sprites" />
        <div class="flex flex-col my-8 mx-auto space-y-4 w-[150px]">
            <HeightWeightComponent :height="height" :weight="weight" />
            <TypeComponent :types="types" />
            <StatComponent :stats="stats" />
        </div>
        <div
            class="absolute inset-y-0 flex items-center cursor-pointer select-none -right-3 animate-debounce-x"
            @click="gotoSecondPage"
        >&gt;&gt;</div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import HeightWeightComponent from './HeightWeightComponent.vue';
import ImageViewer from './ImageViewer.vue';
import StatComponent from './StatComponent.vue';
import TypeComponent from './TypeComponent.vue';

const route = useRoute()
const router = useRouter()

type DataType = {
    sprites?: {
        front_default: string,
        front_shiny: string,
        back_default: string,
        back_shiny: string,
    }
    height: number;
    weight: number;
    types: {
        type: {
            name: string
        }
    }[],
    stats: {
        base_stat: number,
        stat: {
            name: string
        }
    }[],

}

const data = reactive({
    sprites: {
        front_default: '',
        front_shiny: '',
        back_default: '',
        back_shiny: '',
    },
    height: 0,
    weight: 0,
    types: [],
    stats: []
} as DataType);

const { sprites, height, weight, types, stats } = toRefs(data);

async function load(name: string) {
    try {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + name
        );
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}


function gotoSecondPage() {
    router.push({ name: 'second' })
}

watch(() => route.params.name, async (name) => {
    const res = await load(name as string);
    Object.assign(data, res);
}, { immediate: true })
</script>

