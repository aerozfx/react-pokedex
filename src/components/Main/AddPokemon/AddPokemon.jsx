import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { PokemonContext } from "../../../context/pokemonContext";


const AddPokemon = () => {
  const {updatePokemons} = useContext(PokemonContext)
  const {handleSubmit, register, formState: {errors}, } = useForm();

  const onSubmit = (data) => {
    let obj = {}
    const {typeOne, typeTwo, name, id, image} = data
    obj = {name, id: +id, image}
    obj.pokeTypes = {types: [typeOne, typeTwo]}
    obj.pokeStats = []
    updatePokemons(obj)
  }
  return (
    <section className="form-add">
      <h2>Añadir un pokémon</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">
          <p>ID:</p>
          <input className={errors.id?.type === "required" ? "input-error" : ""} 
            {...register("id", {required: true})}
            id="id" placeholder="Ex. 324"
          />
          {errors.id?.type === "required" && <p className="error">El campo ID es requerido</p>}
        </label>
        <label htmlFor="name">
          <p>Name:</p>
          <input
            className={errors.id?.type === "required" ? "input-error" : ""}
            placeholder="Ex. Pikachumon"
            {...register("name", {required: true, minLength: 3})}
            id="name"
          />
          {errors.name?.type === "required" && <p className="error">El campo nombre es requerido</p>}
          {errors.name?.type === "minLength" && <p className="error">Debe tener más de 3 caracteres</p>}
        </label>
        <label htmlFor="image">
          <p>Image:</p>
          <input
            className={errors.id?.type === "required" ? "input-error" : ""}
            placeholder="Ex. https://www.gatitos.com"
            {...register("image", {required: true})} 
            id="image"
          />
          {errors.image?.type === "required" && <p className="error">Una imagen es requerida</p>}
        </label>
        <label htmlFor="type-one">
          <p>First type:</p>
          <select
            className={errors.id?.type === "required" ? "input-error" : ""} 
            id="type-one" {...register("typeOne",           
            {validate:
              (value, formValues) => value !== formValues.typeTwo})}>
          <option value="bug">bug</option>
            <option value="dark">dark</option>
            <option value="dragon">dragon</option>
            <option value="electric">electric</option>
            <option value="fairy">fairy</option>
            <option value="fighting">fighting</option>
            <option value="fire">fire</option>
            <option value="flying">flying</option>
            <option value="ghost">ghost</option>
            <option value="grass">grass</option>
            <option value="ground">ground</option>
            <option value="ice">ice</option>
            <option value="normal">normal</option>
            <option value="poison">poison</option>
            <option value="psychic">psychic</option>
            <option value="rock">rock</option>
            <option value="steel">steel</option>
            <option value="water">water</option>
          </select>
          {errors.typeOne?.type === "required" && <p className="error">El primer tipo es obligatorio</p>}
        </label>
        <label htmlFor="type-two">
          <p>Second type:</p>
          <select 
            className={errors.id?.type === "required" ? "input-error" : ""} 
            id="type-two" {...register("typeTwo", 
            {validate:
              (value, formValues) => value !== formValues.typeOne
              })}>
            <option value="bug">bug</option>
            <option value="dark">dark</option>
            <option value="dragon">dragon</option>
            <option value="electric">electric</option>
            <option value="fairy">fairy</option>
            <option value="fighting">fighting</option>
            <option value="fire">fire</option>
            <option value="flying">flying</option>
            <option value="ghost">ghost</option>
            <option value="grass">grass</option>
            <option value="ground">ground</option>
            <option value="ice">ice</option>
            <option value="normal">normal</option>
            <option value="poison">poison</option>
            <option value="psychic">psychic</option>
            <option value="rock">rock</option>
            <option value="steel">steel</option>
            <option value="water">water</option>
          </select>
        {(errors.typeTwo?.type === "validate" || errors.typeOne?.type === "validate") && <p className="error">Deben ser distintos tipos</p>}
       </label>
        <button>Enviar</button>
      </form>
    </section >
  );
};

export default AddPokemon;
