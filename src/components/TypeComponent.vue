<template>
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
</template>
<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
    types: {
        type: Array as PropType<{
            type: {
                name: string
            }
        }[]>,
        required: true,
    },
})
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
.ground {
    background-color: #e0c068;
}
.rock {
    background-color: #a890f0;
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
.poison {
    background-color: #a040a0;
}
.grass {
    background-color: #78c850;
}
.ghost {
    background-color: #705898;
}
</style>