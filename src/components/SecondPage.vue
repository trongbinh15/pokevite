<template >
    <div class="relative max-h-full">
        <div class="flex flex-col mx-auto my-8 space-y-4">
            <h1 class="text-center">Evolution Chain</h1>
            <div class="select-none max-h-[400px] overflow-auto" v-if="hasData">
                <blocks-tree
                    :data="treeData"
                    :horizontal="true"
                    :collapsable="false"
                    :props="{ label: 'label', expand: 'expand', children: 'children', id: 'id' }"
                >
                    <template #node="{ data }">
                        <div class="cursor-pointer" @click="onSelect(data.id)">
                            <span>{{ data.label }}</span>
                            <br />
                            <img :src="getImageUrl(data.id)" />
                        </div>
                    </template>
                </blocks-tree>
            </div>
            <div v-else class="text-center">Not found!</div>
        </div>

        <div
            class="flex items-center w-5 cursor-pointer select-none -left-10 animate-debounce-x"
            @click="gotoFirstPage"
        >&lt;&lt;</div>
    </div>
</template>

<script lang="ts" setup>import { computed, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

type TreeProp = {
    label: string;
    children: TreeProp;
    id: string;
    expand: boolean;
    isBaby: boolean;
};

const treeData = reactive({});

const hasData = computed(() => Object.keys(treeData).length > 0);

onMounted(async () => {
    const { name } = route.params;
    await load(name as string);
})

function getImageUrl(id: string) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

async function load(name: string) {
    try {

        const species = await fetch(
            "https://pokeapi.co/api/v2/pokemon-species/" + name
        );

        const speciesData = await species.json();

        const evoChain = await fetch(
            speciesData.evolution_chain.url
        );

        const evoChainData = await evoChain.json();

        const data = retrieveData(evoChainData.chain);
        Object.assign(treeData, data);

    } catch (error) {
        Object.assign(treeData, {});
    }
}

function retrieveData(data: any): TreeProp {
    const obj = Object.assign({}, {
        label: data.species.name,
        id: data.species.url.split('/')[6],
        isBaby: data.is_baby,
        expand: false,
        children: data.evolves_to.map((x: any) => retrieveData(x))
    });

    return obj;
}

function onSelect(name: string) {
    router.push(`/pokemon/${name}`);
}

function gotoFirstPage() {
    router.push({ name: 'first' })
}
</script>

<style scoped>
.org-tree-container {
    border-radius: 0.5rem;
}
</style>