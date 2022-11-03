import React, {useState} from 'react'
import axios from 'axios'

const AxiosPokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    
    const getPokemon = (() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((res) => {
            console.log(res)
            setPokemon(res.data.results)
        })
        .catch((err) => console.log("❌ Error:", err))
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

export default AxiosPokemon