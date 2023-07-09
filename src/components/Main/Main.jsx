import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import AddPokemon from "./AddPokemon"
import Pokedex from "./Pokedex"
import Detail from "./Detail"
import useQueryParameter from "../../hooks/useQueryParameter"

const Main = () => {
  let data = useQueryParameter()
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/new" element={<AddPokemon />} />
        <Route path="/search" element={<Pokedex />} />
        <Route path="/pokemon/:pokeId" element={<Detail data={data}/>} />
      </Routes>
    </main>
  );
};

export default Main;
