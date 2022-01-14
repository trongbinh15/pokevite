<template >
    <div class="flex items-center justify-center w-screen h-screen">
        <div
            class="flex flex-col items-center p-5 text-sm font-light bg-blue-300 rounded-sm shadow-lg w-fit h-fit"
        >
            <Navigation :id="id" />
            <div class="text-lg">{{ displayName }}</div>
            <div>#{{ id }}</div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, reactive, toRefs, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navigation from './Navigation.vue';

const route = useRoute()

type DataType = {
    name: string;
    id: number;
}

const data = reactive({
    name: '',
    id: 0,
} as DataType);

const { id, name } = toRefs(data);

const displayName = computed(() => {
    const text = name.value as string;
    return text.split('-').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
});


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

watch(() => route.params.name, async (name) => {
    if (name) {
        const res = await load(name as string);
        Object.assign(data, res);
    }
}, { immediate: true })

</script>

