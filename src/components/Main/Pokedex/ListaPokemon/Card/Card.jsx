import RadarChart from "./RadarChart";
import { v4 } from "uuid";
import { typeIcons } from "../../../../../utils/script";

const Card = ({data}) => {
  let {pokeStats, pokeTypes} = data
  return (
    <article className="poke-card">
      <p className="poke-name">{data.name}</p>
      <a href={`/pokemon/${data.id}?id=${data.id}&name=${data.name}&image=${data.image}&typeOne=${pokeTypes.types[0]}&typeTwo=${pokeTypes.types[1]}&stats=${JSON.stringify(pokeStats)}`}>Visitar</a>
      <img src={data.image} alt={data.name} className="poke-image"/>
      <section className="poke-types">
        {pokeTypes?.types.map((type) => (
        <article className={`type ${type}`} key={v4()}>
          <img src={typeIcons[type]} alt={type}/>
        </article>))}
      </section>
    </article>
  );
};

export default Card;
