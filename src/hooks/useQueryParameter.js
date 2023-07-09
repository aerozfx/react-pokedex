import { useLocation } from "react-router-dom";

const useQueryParameter = () => {
  // Desestructuración de la propiedad del objeto "location" que devuelve el Hook useLocation
  const { search } = useLocation();
  // Creamos el objeto URLSearchParams con la query que viene de useLocation, lo que nos permite acceder al método get
  // para obtener cada query introducida en la URL
  let url = new URLSearchParams(search);
  let data = {};
  data.id = +url.get("id");
  data.name = url.get("name");
  data.image = url.get("image");
  data.typeOne = url.get("typeOne");
  data.typeTwo = url.get("typeTwo");
  data.stats = JSON.parse(url.get("stats"));
  return data;
};

export default useQueryParameter;
