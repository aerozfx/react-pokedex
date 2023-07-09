import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import { PokemonContext } from "./context/pokemonContext";
import 'normalize.css';
import './styles/styles.scss'
import Header from"./components/Header"
import Main from"./components/Main"

function App() {
  const [pokemons, setPokemons] = useState([])
  const updatePokemons = (newPokemon) => setPokemons([...pokemons, newPokemon])

  const data = {
    pokemons,
    updatePokemons
  }
  return (
    <> 
      <BrowserRouter>
          <Header />
          <PokemonContext.Provider value={data} >
            <Main />
          </PokemonContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
