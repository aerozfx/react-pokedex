import { useEffect, useState } from "react";
import axios from "axios";
import PcBox from "./PcBox";
const Home = () => {
  const [initialPokemons, setInitialPokemons] = useState([])
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const getInitialPokemons = async () => {
      let pokemon = await axios("https://pokeapi.co/api/v2/pokemon?limit=151")
      let {results} = pokemon.data
      return results.map(ele => ele.url)
    }
    getInitialPokemons().then(data => {
      let promises = data.map(ele => axios(ele))
      Promise.all(promises).then(data => {
        let newArray = []
        let auxArray = []
        let counter = data.length
        for(let i = 0; i < data.length; i++){
          if(auxArray.length < 20){
            auxArray.push(data[i])
          }
          if(auxArray.length === 20) {
            counter -= 20
            newArray.push(auxArray)
            auxArray = []
          } else if(counter === 1){
            newArray.push([data[i]])
          }
        }
        setInitialPokemons([...newArray])
      })
    })
  }, [])
  const nextPokemons = () => {
    index === initialPokemons.length - 1 ? setIndex(0) : setIndex(index + 1)
  }
  const prevPokemons = () => {
    index === 0 ? setIndex(initialPokemons.length - 1) : setIndex(index - 1)
  }
  return ( 
    <section className="poke-box">
      <section className="poke-head">
        <img src="images/button-left.png" onClick={prevPokemons} />
        <h2>Pokédex</h2>
        <img src="images/button-right.png" onClick={nextPokemons} />
      </section>
      <section className="poke-grid-container">
        <section className="poke-grid-items">
          {initialPokemons.length > 0 ? <PcBox info={initialPokemons[index]}/>
            : 
          <img src="images/gif-busqueda.gif" alt="gif busqueda" />}
        </section>
      </section>
    </section>
  );
};

export default Home;
