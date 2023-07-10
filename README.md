# Pokedex - React

Proyecto con la temática de Pokemon realizado con React.

Esta aplicación es una pequeña pokedex, en la que el usuario, puede buscar un pokemon en contreto, y acceder a los detalles del mismo. En la sección `Add Pokemon`, el usuario puede añadir un pokemon con un `nombre`, `imagen` o `tipos` personalizados.

En la sección `Pokedex` se podrá buscar un Pokemon en específico, ya sea por `id` o por `name`.

Esta aplicación no tiene persistencia de datos, por lo que al recargar, se perderán los Pokemon creados y los Pokemon buscados en la sección `Pokedex`.

## Table of contents

- [Vista principal](#vista-principal)
  - [El objetivo](#objetivo)
  - [Capturas de pantalla](#captura-de-pantalla)
  - [Links](#links)
- [Proceso](#proceso)
  - [Tecnologías](#tecnologías)
  - [Aprendizaje](#aprendizaje)
  - [A mejorar](#a-mejorar)
  - [Recursos - Librerías](#recursos---librerías)
- [Author](#author)
- [Iniciar el proyecto](#iniciar-el-proyecto)

## Vista principal

### El objetivo

Los usuarios podrán:

- Al iniciar la aplicación, se muestran los primeros 151 Pokemon, y cada uno tiene un `a` que redirige a la vista `Detail` de cada Pokemon
- Consultar un Pokemon especifico, ya sea por `id` o por `nombre`
- Crear sus Pokemon personalizados. El formulario de creación tiene validaciones, tanto para los tipos, ya que no pueden ser iguales, como para los campos, ya que son requeridos. En caso de error, muestra los distintos errores dentro de la UI.

### Screenshot

![](./screenshot.jpg)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- [Repositorio](https://github.com/aerozfx/react-pokedex)
- [Demo](https://cheerful-centaur-2fe317.netlify.app/)

## Proceso

### Tecnologías

- HTML5 semántico
- Sass - SCSS
- Flexbox
- Uso de `mixins` y `variables` de `SASS`
- Estrategia de desarrollo siguiendo el principio `mobile-first`
- [React](https://reactjs.org/) - Librería de JavaScript
- [Sass](https://sass-lang.com/documentation/variables/) - Estilos con sass

### Aprendizaje

Durante este proyecto he reforzado conceptos, como el uso de `useEffect`, o `useContext`. Reconociendo las situaciones en las que su uso es necesario.
Por otro lado, también he aprendido a idenficar cuando es necesario un `custom hook`. En este proyecto, he creado uno `useQueryParameters`. Para poder separar las distintas queries introducidas por URL.

```javascript
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
```

### A mejorar

Debido a la deadline de este proyecto, no he podido añadir todas las funcionalidades que me hubieran gustado.
En este caso, me hubiera gustado añadir un login, para que el usuario o usuaria añada los Pokemon que considere a una sección de `Favoritos`
También me hubiera gustado ultimar los detalles del diseño responsive. Añadir la pantalla de GameBoy al iniciar la aplicación.

### Recursos - Librerías

- [ChartJS](https://www.chartjs.org/) - Librería de gráficos en React
- [ReactIcons](https://react-icons.github.io/react-icons/) - Librería de Icons SVG, con infinidad de iconos de alta calidad.
- [UUID](https://www.npmjs.com/package/uuid) - Librería para generar `keys` únicas
- [SASS](https://sass-lang.com/documentation/variables/) - CSS con superpoderes
- [React-hook-form](https://react-hook-form.com/) - customHook usado para controlar el formulario de la sección `Add Pokemon`
- [Axios](https://axios-http.com/es/) - Librería encargada de hacer las peticiones HTTP
- [Just-debounce](https://www.npmjs.com/package/just-debounce-it) - Evita la ejecución de la petición HTTP al escribir. Solo permite la ejecución tras pasar 3 segundos sin introducir ningún input.

## Author

- GitHub - [@aerozfx](https://github.com/aerozfx)

## Iniciar el proyecto

Para iniciar este proyecto, lo primero es necesario instalar las dependencias del mismo.

```console
npm install
```

Una vez las dependencias hayan sido instaladas, podemos acceder al `modo desarrollador` con el siguiente comando:

```console
npm run dev
```

Este comando levantará nuestra aplicación en un entorno local
En caso de querer llevar esta aplicación a `producción` debemos ejecutar este comando:

```console
npm run build
```

Este comando lo que hará es condensar todos nuestros `componentes`, `ficheros`, y todos nuestros `assets` que estén en la carpeta `/public` y sintentizarlos en un solo fichero.
Es importante tener en cuenta la optimización de nuestros `assets`.
