import React, {useState, useEffect} from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import obiPic from '../pics/obi-wan.jpg'

const Planets = (props) => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [notFound, setNotFound] = useState(true);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((res) => {
            setData(res.data);
            setNotFound(false);
        })
        .catch((err) => {
            console.log("❌ Error:", err);
            setNotFound(true);
        })
    }, [id])
    
    if(notFound === true) {
        return (
            <div>
                <img src={obiPic} alt="obi-wan" />
                <p>These aren't the droids you're looking for!</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>{data.name}</h1>
                <h3>Climate: {data.climate}</h3>
                <h3>Terrain: {data.terrain}</h3>
                <h3>Surface Water: {data.surface_water}</h3>
                <h3>Population: {data.population}</h3>
            </div>
        )
    }
}

export default Planets