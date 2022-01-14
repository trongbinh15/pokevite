import { defineComponent } from 'vue';

<template >
    <div class="relative max-h-full">
        <div class="flex flex-col mx-auto my-8 space-y-4">
            <h1 class="text-center">Evolution Chain</h1>
            <div class="select-none max-h-[400px] overflow-auto" v-if="hasData">
                <blocks-tree
                    :data="treeData"
                    :horizontal="true"
                    :collapsable="false"
                    :props="{ label: 'label', expand: 'expand', children: 'children', id: 'id' }"
                >
                    <template #node="{ data }">
                        <div class="cursor-pointer" @click="onSelect(data.id)">
                            <span>{{ data.label }}</span>
                            <br />
                            <img
                                v-lazy="{ src: getImageUrl(data.id), loading: spinner }"
                                class="w-[96px] h-[96px] mx-auto"
                            />
                        </div>
                    </template>
                </blocks-tree>
            </div>
            <div v-else class="text-center">Not found!</div>
        </div>

        <div
            class="flex items-center w-5 cursor-pointer select-none -left-10 animate-debounce-x"
            @click="gotoFirstPage"
        >&lt;&lt;</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getImageUrl, getEvolutionChain, TreeProp } from '../service/pokemon.service'
import spinner from '../assets/Spinner-1s-96px.gif'

// at this time beforeRouteEnter is not support setup script
export default defineComponent({
    data() {
        return {
            treeData: {} as TreeProp,
            spinner: spinner
        }
    },
    computed: {
        hasData(): boolean {
            return Object.keys(this.treeData).length > 0;
        },
    },
    methods: {
        onSelect(id: string) {
            this.$router.push(`/pokemon/${id}`);
        },
        getImageUrl(id: string) {
            return getImageUrl(id);
        },
        gotoFirstPage() {
            this.$router.push({ name: 'first' });
        }
    },
    beforeRouteEnter: async function (to, from, next) {
        const { name } = to.params;
        const data = await getEvolutionChain(name as string);
        next((vm: any) => {
            vm.treeData = data;
        });
    }
})
</script>

<style scoped>
.org-tree-container {
    border-radius: 0.5rem;
}
</style>