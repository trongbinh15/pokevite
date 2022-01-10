<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import MainPokeView from './components/MainPokeView.vue';
import MainSearch from './components/MainSearch.vue';
import { useStore } from './store/store';

const store = useStore();

const searchResults = ref([] as string[]);
const html = ref('');

const { pokeNames } = storeToRefs(store);

const onSearch = (value: string) => {
  if (value.length > 0) {
    const { results, highlights } = store.findPokemonByName(value);
    if (results.length > 0) {
      searchResults.value = results.map(p => p.target);
      html.value = highlights.slice(0, 10).map(h => `<li>${h}</li>`).join('');
    }
    else {
      searchResults.value = [];
      html.value = 'Not found!';
    }
  } else {
    searchResults.value = pokeNames.value;
    html.value = '';
  }
}

onMounted(async () => {
  await store.getPokemon();
})

</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div
      class="flex flex-col text-sm bg-blue-300 font-light w-[400px] h-[400px] p-5 items-center space-y-3 rounded-sm shadow-lg"
    >
      <MainSearch @on-search="onSearch" />
      <ul class="highlight flex-col flex items-start w-full p-4" v-html="html"></ul>
      <MainPokeView />
    </div>
  </div>
</template>

<style>
body {
  font-family: "SuperLegendBoy";
}
</style>
<style scoped>
.highlight :deep(b) {
  color: blue;
}
</style>
