<template>
    <div class="flex items-center justify-around w-full my-3 select-none">
        <div
            @click="onPrev"
            class="cursor-pointer"
            :class="hasPrevImage ? 'visible' : 'invisible'"
        >&#60;</div>
        <div class="p-1 bg-white rounded-lg shadow-md">
            <img
                v-lazy="{ src: existImage[imageIndex], loading: spinner }"
                class="w-[96px] h-[96px] mx-auto"
            />
        </div>

        <div
            @click="onNext"
            class="cursor-pointer"
            :class="hasNextImage ? 'visible' : 'invisible'"
        >&#62;</div>
    </div>
</template>
<script lang="ts" setup>
import { computed, PropType, ref, watch } from 'vue';
import spinner from '../assets/Spinner-1s-96px.gif'

const prop = defineProps({
    sprites: {
        type: Object as PropType<{
            front_default: string;
            front_shiny: string;
            back_default: string;
            back_shiny: string;
        } | undefined>,
        required: true,
    }
})

const orderRule = [
    'front_default',
    'back_default',
    'front_shiny',
    'back_shiny',
];

function onNext() {
    imageIndex.value++;
};
function onPrev() {
    imageIndex.value--;
};

const existImage = computed(() => {
    if (!prop.sprites) {
        return [];
    }
    return Object.entries(prop.sprites).filter(item => item[1] !== null && typeof item[1] === 'string' && orderRule.includes(item[0])).sort((a, b) => {
        const indexA = orderRule.indexOf(a[0]);
        const indexB = orderRule.indexOf(b[0]);
        if (indexA === indexB) {
            return 0;
        }
        return indexA < indexB ? -1 : 1;
    }).map(item => item[1]);
});


const imageIndex = ref(0);
const hasNextImage = computed(() => imageIndex.value < existImage.value.length - 1);
const hasPrevImage = computed(() => imageIndex.value > 0);

watch(() => prop.sprites, async () => {
    imageIndex.value = 0;
});

</script>