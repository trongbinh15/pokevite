<template >
    <ul class="flex flex-col items-start w-full p-4 space-y-2 cursor-pointer highlight">
        <li @click="onClick(index)" v-for="(item, index) in highlight" :key="index" v-html="item"></li>
    </ul>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
const prop = defineProps({
    highlight: {
        type: Array as PropType<string[]>,
        required: true,
    },
    results: {
        type: Array as PropType<string[]>,
        required: true,
    },
});

const emit = defineEmits(['onSelect']);

function onClick(index: number) {
    emit('onSelect', prop.results[index]);
}

</script>
<style scoped>
.highlight :deep(b) {
    color: blue;
}
</style>