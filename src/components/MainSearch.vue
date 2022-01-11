<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const searchText = ref('');
const emit = defineEmits(['onSearch']);
watchEffect(() => {
    emit('onSearch', searchText.value);
});
</script>
<template>
    <div class="flex space-x-2 justify-start my-3 mx-auto items-center">
        <div>Search:</div>
        <input
            v-model="searchText"
            type="text"
            class="p-2 border-none rounded-sm focus:outline-none"
        />
    </div>
</template>

