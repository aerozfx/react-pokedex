import Search from "./Search/Search";
import ListaPokemon from "./ListaPokemon/ListaPokemon";

const Pokedex = () => {
  return (
    <>
      <section className="pokedex">
        <Search />
        <article className="pokedex-items">
          <ListaPokemon /> 
        </article>
      </section>
    </>
  );
};

export default Pokedex;
