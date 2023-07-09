import { useCallback, useState, useEffect, useContext } from "react";
import debounce from "just-debounce-it";
import axios from "axios";
import { formatPokeJSON } from "../../../../utils/script";
import { PokemonContext } from "../../../../context/pokemonContext";
import {BsSearch} from "react-icons/bs"

const Search = () => {
  let {pokemons, updatePokemons} = useContext(PokemonContext)
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    if(search === "") return  
    // Esto debería ser un estado a parte?¿?¿?¿¿?¿
    let pokeName = pokemons.map((poke) => poke.name)
    let pokeId = pokemons.map((poke) => poke.id)
    if(pokeName.includes(search) || pokeId.includes(+search)) return 

    const getPokemons = async (search) => {
      let pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${search}`)
      return formatPokeJSON(pokemon)
    }
    getPokemons(search).then(data => {
      updatePokemons(data)
    })

  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(e.target.pokemon.value)
    e.target.pokemon.value = ""
  }
  const handleInput = (e) => {
    e.preventDefault()
    handleDebounce(e.target.value)
  }
  const handleDebounce = useCallback(debounce(setSearch, 2000), [setSearch])

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="search-form">
        <input type="text" name="pokemon" onInput={handleInput}/>
        <button><BsSearch /></button>
      </form>
    </>
  );
};

export default Search;
