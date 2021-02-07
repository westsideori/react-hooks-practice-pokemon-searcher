import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const pokeList = pokemon.map((poke) => {
    return (
        <PokemonCard key={poke.id} pokemon={poke} />
    )
  })

  // console.log("in Collection",{pokeArray})


  return (
    <Card.Group itemsPerRow={6}>
      {pokeList}
    </Card.Group>
  );
}

export default PokemonCollection;
