import React, {useState} from 'react'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    
    const getPokemon = (() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokemon(response.results)
            })
            .catch(err => {
                console.log("❌ Error:", err)
            })
    })

    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <ul>
                {pokemon.map((poke, i) => 
                    <li key={i}> 
                        {poke.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Pokemon