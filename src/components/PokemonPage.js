import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
 
  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then(resp => resp.json())
      .then((pokeArray) => {
        setPokemon(pokeArray)
      })
  }, [])
  

  const filteredPokemon = pokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(search.toLowerCase())
  })

  const handleAdd = (newPokemon) => {
    setPokemon([...pokemon, newPokemon])
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAdd={handleAdd} />
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
