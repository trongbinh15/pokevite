export type TreeProp = {
  label: string;
  children: TreeProp;
  id: string;
  expand: boolean;
  isLoaded: boolean;
  isBaby: boolean;
};

function retrieveData(data: any): TreeProp {
  const obj = Object.assign(
    {},
    {
      label: data.species.name,
      id: data.species.url.split("/")[6],
      isBaby: data.is_baby,
      expand: false,
      isLoaded: false,
      children: data.evolves_to.map((x: any) => retrieveData(x)),
    }
  );

  return obj;
}
export async function getEvolutionChain(name: string) {
  try {
    const species = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species/" + name
    );

    const speciesData = await species.json();

    const evoChain = await fetch(speciesData.evolution_chain.url);

    const evoChainData = await evoChain.json();

    return retrieveData(evoChainData.chain);
  } catch (error) {
    return null;
  }
}

export async function getPokemonInfo(name: string) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export function getImageUrl(id: string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
