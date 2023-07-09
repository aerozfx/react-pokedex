export const formatPokeJSON = (obj) => {
  const { sprites, stats, types, name, id } = obj.data;
  const { front_default: image } = sprites.other["official-artwork"];
  const pokeStats = stats.map((stat) => {
    let initialStat = stat["base_stat"];
    let { name } = stat["stat"];
    return { name, stat: initialStat };
  });
  const pokeType = types.map((type) => type.type.name);
  const pokeTypes = { types: [...pokeType] };
  return { name, image, pokeStats, pokeTypes, id };
};

export const typeIcons = {
  bug: "/svg/poke-types/bug.svg",
  dark: "/svg/poke-types/dark.svg",
  dragon: "/svg/poke-types/dragon.svg",
  electric: "/svg/poke-types/electric.svg",
  fairy: "/svg/poke-types/fairy.svg",
  fighting: "/svg/poke-types/fighting.svg",
  fire: "/svg/poke-types/fire.svg",
  flying: "/svg/poke-types/flying.svg",
  ghost: "/svg/poke-types/ghost.svg",
  grass: "/svg/poke-types/grass.svg",
  ground: "/svg/poke-types/ground.svg",
  ice: "/svg/poke-types/ice.svg",
  normal: "/svg/poke-types/normal.svg",
  poison: "/svg/poke-types/poison.svg",
  psychic: "/svg/poke-types/psychic.svg",
  rock: "/svg/poke-types/rock.svg",
  steel: "/svg/poke-types/steel.svg",
  water: "/svg/poke-types/water.svg",
};
