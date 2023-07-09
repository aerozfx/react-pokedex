import RadarChart from "../Pokedex/ListaPokemon/Card/RadarChart/RadarChart";

const Detail = ({data}) => {
  return (
  <section className="detail">
    <aside className="detail-info">
      <p className="detail-name">{data.name}</p>
      <article className="detail-image">
        <img src={data.image} alt={data.name} />
      </article>
    </aside>
    <section className="detail-poke">
      <p>ID: {data.id}</p>
      <p>NOMBRE: {data.name}</p>
      {
        data.typeOne && data.typeTwo !== "undefined" ? 
         <p>
          TIPO:
          <span className={`type ${data.typeOne}`}>{data.typeOne}</span>
          <span className={`type ${data.typeTwo}`}>{data.typeTwo}</span>
        </p>
        :
        <p>
          TIPO: 
          <span className={`type ${data.typeOne}`}>{data.typeOne}</span>
        </p>
      }
      <figure className="chart">
        <p>STATS:</p>
        <RadarChart data={data.stats}/>
      </figure>
    </section>
  </section>);
};

export default Detail;
