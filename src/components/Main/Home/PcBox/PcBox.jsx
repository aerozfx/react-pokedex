import React from "react";
import { v4 } from "uuid";
import { formatPokeJSON } from "../../../../utils/script";
const PcBox = ({info}) => {
  return (
    <>
    {
      info.map((ele, i )=> {
        let image = ele.data.sprites.versions["generation-viii"].icons["front_default"]
        let results = formatPokeJSON(ele)
        let {id, name, pokeStats, pokeTypes, image: pokeImage} = results
        return (
          <a key={v4()} href={`/pokemon/${id}?id=${id}&name=${name}&image=${pokeImage}&typeOne=${pokeTypes.types[0]}&typeTwo=${pokeTypes.types[1]}&stats=${JSON.stringify(pokeStats)}`} >
            <img src={image} key={i}/>
          </a>
        )
      })
    }
    </>
  );
};

export default PcBox;
