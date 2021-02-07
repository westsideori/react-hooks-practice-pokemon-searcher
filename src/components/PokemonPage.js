import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then(resp => resp.json())
      .then((pokeArray) => {
        setPokemon(pokeArray)
      })
  }, [])


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemon={pokemon}/>
    </Container>
  );
}

export default PokemonPage;
