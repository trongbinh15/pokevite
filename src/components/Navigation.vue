<template>
    <div class="flex justify-around w-full mb-3 select-none">
        <div class="w-[100px] text-left cursor-pointer" @click="onPrev">#{{ prevId }}</div>
        <div class="cursor-pointer" @click="onBack">Search</div>
        <div class="w-[100px] text-right cursor-pointer" @click="onNext">#{{ nextId }}</div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const prop = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

const router = useRouter()
const nextId = computed(() => {
    const value = prop.id + 1;
    return value.toString();
});

const prevId = computed(() => {
    const value = prop.id - 1;
    return value.toString();
});

function onNext() {
    router.push(`/pokemon/${nextId.value}`);
}
function onPrev() {
    router.push(`/pokemon/${prevId.value}`);
}
function onBack() {
    router.push('/');
}
</script>