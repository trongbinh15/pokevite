<template >
    <div>Evolution Chain</div>
</template>

<script lang="ts" setup>import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

onMounted(async () => {
    const { name } = route.params;
    console.log('name:', name)
    await load(name as string);
})


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
        console.log('evoChainData:', evoChainData.chain)

        return evoChainData;
    } catch (error) {
        return null;
    }
}
</script>