import { defineStore } from "pinia";
import fuzzysort from "fuzzysort";

type State = {
  pokeNames: string[];
};

export const useStore = defineStore({
  id: "main",
  state: () =>
    ({
      pokeNames: [],
    } as State),
  getters: {
    findPokemonByName: (state) => (name: string) => {
      const results = fuzzysort.go(name, state.pokeNames);
      const highlights = results.map((result) =>
        fuzzysort.highlight(result, "<b>", "</b>")
      );

      return { results, highlights };
    },
  },

  actions: {
    async getPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1181"
        );
        const data = await response.json();
        const names = data.results.map((pokemon: any) => pokemon.name);
        this.$state.pokeNames = names;
      } catch (error) {
        this.$state.pokeNames = [];
      }
    },
  },
});
