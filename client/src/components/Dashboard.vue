<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../store/store';
import MainPokeView from './MainPokeView.vue';
import MainSearch from './MainSearch.vue';

const store = useStore();
const router = useRouter();

const searchResults = ref([] as string[]);
const htmlHighlight = ref([] as string[]);

const { pokeNames } = storeToRefs(store);

const onSearch = (value: string) => {
  if (value.length > 0) {
    const { results, highlights } = store.findPokemonByName(value);
    if (results.length > 0) {
      searchResults.value = results.slice(0, 10).map(p => p.target);
      htmlHighlight.value = highlights.slice(0, 10).map(h => h ?? '');
    }
    else {
      searchResults.value = [];
      htmlHighlight.value = [];
    }
  } else {
    searchResults.value = pokeNames.value;
    htmlHighlight.value = [];
  }
}

function onSelect(name: string) {
  router.push(`/pokemon/${name}`);
}

onMounted(async () => {
  await store.getAllPokemon();
})

</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div
      class="flex flex-col text-sm bg-blue-300 font-light w-[400px] h-[400px] p-5 items-center space-y-3 rounded-sm shadow-lg"
    >
      <MainSearch @on-search="onSearch" />
      <MainPokeView :highlight="htmlHighlight" :results="searchResults" @on-select="onSelect" />
    </div>
  </div>
</template>

