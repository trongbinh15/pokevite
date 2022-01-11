<template>
    <div>
        <div v-for="(item, index) in stats" :key="index" class="flex justify-between">
            <span class="text-gray-700">{{ getStat(item.stat.name) }}</span>
            <span>{{ item.base_stat }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
defineProps({
    stats: {
        type: Array as PropType<{
            base_stat: number,
            stat: {
                name: string
            }
        }[]>,
        required: true,
    }
})

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
</script>