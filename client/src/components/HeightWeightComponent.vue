<template>
    <div>
        <div class="text-gray-700">Height: {{ height }}</div>
        <div class="text-gray-700">Weight: {{ weight }}</div>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
})
</script>