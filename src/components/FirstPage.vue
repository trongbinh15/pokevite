<template >
    <div class="w-[300px] relative">
        <ImageViewer :sprites="pokemonData.sprites" />
        <div class="flex flex-col my-8 mx-auto space-y-4 w-[150px]">
            <HeightWeightComponent :height="pokemonData.height" :weight="pokemonData.weight" />
            <TypeComponent :types="pokemonData.types" />
            <StatComponent :stats="pokemonData.stats" />
        </div>
        <div
            v-if="!loading"
            class="absolute inset-y-0 flex items-center cursor-pointer select-none -right-3 animate-debounce-x"
            @click="gotoSecondPage"
        >&gt;&gt;</div>
        <div
            v-else
            class="absolute inset-y-0 flex items-center w-8 cursor-pointer select-none -right-3"
        >
            <img :src="spinner" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import spinner from '../assets/Spinner-1s-96px.gif'
import { loadImage } from '../service/helper';
import { getPokemonInfo } from '../service/pokemon.service'
import HeightWeightComponent from './HeightWeightComponent.vue';
import ImageViewer from './ImageViewer.vue';
import StatComponent from './StatComponent.vue';
import TypeComponent from './TypeComponent.vue';


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

export default defineComponent({
    data: () => ({
        spinner: spinner,
        pokemonData: {} as DataType,
        loading: false,
    }),
    components: {
        HeightWeightComponent,
        ImageViewer,
        StatComponent,
        TypeComponent,
    },
    methods: {
        gotoSecondPage() {
            this.$router.push({ name: 'second' })
            this.loading = true;
        },
    },
    async beforeRouteEnter(to, from, next) {
        const { name } = to.params;
        const data = await getPokemonInfo(name as string);

        const defaultImage = data.sprites.front_default;
        await loadImage(defaultImage);
        next((vm: any) => {
            vm.pokemonData = data;
        });
    },
    async beforeRouteUpdate(to, from, next) {
        const { name } = to.params;
        const data = await getPokemonInfo(name as string);

        const defaultImage = data.sprites.front_default;
        await loadImage(defaultImage);
        this.pokemonData = data;
        next();
    },
}
)
</script>
