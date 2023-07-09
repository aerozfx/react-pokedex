
import { v4 } from "uuid";
import { useContext } from "react";
import { PokemonContext } from "../../../../context/pokemonContext";
import Card from "./Card/Card"
const ListaPokemon = () => {

  let {pokemons} = useContext(PokemonContext)
  return (
    <>
      { pokemons.length ?
        pokemons.map((poke) => <Card key={v4()} data={poke}/>) : 
        <p>La pokedex está vacía</p>
      }
    </>
  );
};

export default ListaPokemon;
