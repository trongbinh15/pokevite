<template >
    <div class="flex items-center justify-center w-screen h-screen">
        <div
            class="flex flex-col text-sm bg-blue-300 font-light w-[400px] h-[400px] p-5 items-center space-y-3 rounded-sm shadow-lg"
        >
            <div class="text-lg">{{ displayName }}</div>
            <div>#{{ id }}</div>
            <div class="flex space-x-2">
                <div v-for="(item, index) in existImage" :key="index">
                    <img :src="item" />
                </div>
            </div>
            <!-- <swiper
                :slides-per-view="3"
                :space-between="50"
                :navigation="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide v-for="(item, index) in existImage" :key="index">
                    <img :src="item" />
                </swiper-slide>
            </swiper>-->
            <div class="flex flex-col space-y-3">
                <div>
                    <div class="text-gray-700">Height: {{ height }}</div>
                    <div class="text-gray-700">Weight: {{ weight }}</div>
                </div>
                <div class="flex items-center space-x-3">
                    <div class="text-gray-700">Types:</div>
                    <div class="space-x-2">
                        <span
                            class="p-1 font-mono text-white rounded-sm"
                            :class="item.type.name"
                            v-for="(item, index) in types"
                            :key="index"
                        >{{ item.type.name }}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            v-for="(item, index) in stats"
                            :key="index"
                            class="flex justify-between"
                        >
                            <span class="text-gray-700">{{ getStat(item.stat.name) }}</span>
                            <span>{{ item.base_stat }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, reactive, toRefs, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

type DataType = {
    name: string;
    sprites?: {
        front_default: string,
        front_shiny: string,
        back_default: string,
        back_shiny: string,
    }
    height: number;
    weight: number;
    id: string;
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
    name: '',
    sprites: {
        front_default: '',
        front_shiny: '',
        back_default: '',
        back_shiny: '',
    },
    height: 0,
    weight: 0,
    id: '',
    types: [],
    stats: []
} as DataType);

const { sprites, height, weight, id, types, stats } = toRefs(data);

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

function getStat(stat: string) {
    if (stat === 'hp') {
        return 'Hp';
    }
    if (stat === 'attack') {
        return 'Attack';
    }
    if (stat === 'defense') {
        return 'Defense';
    }
    if (stat === 'special-attack') {
        return 'Sp Atk';
    }
    if (stat === 'special-defense') {
        return 'Sp Def';
    }
    if (stat === 'speed') {
        return 'Speed';
    }
}
const onSwiper = (swiper: any) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};

const existImage = computed(() => {
    if (!sprites?.value) {
        return [];
    }
    return Object.values(sprites.value).filter(item => item !== null && typeof item === 'string');
});

const displayName = computed(() => {
    const text = route.params.name as string;
    return text.split('-').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
});

watch(() => route.params.name, async (name) => {
    const res = await load(name as string);
    console.log('res:', res)
    Object.assign(data, res);
}, { immediate: true })

</script>

<style scoped>
.electric {
    background-color: #ffd700;
}
.dark {
    background-color: #708090;
}
.steel {
    background-color: #b0c4de;
}
.psychic {
    background-color: #f85888;
}
.ice {
    background-color: #98df98;
}
.normal {
    background-color: #a8a878;
}
.fire {
    background-color: #ff4500;
}
.flying {
    background-color: #98f5ff;
}
.fighting {
    background-color: #c03028;
}
.bug {
    background-color: #a8b820;
}
.water {
    background-color: #6890f0;
}
.fairy {
    background-color: #ffaec9;
}
.dragon {
    background-color: #7038f8;
}
</style>