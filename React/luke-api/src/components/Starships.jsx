import React, {useState, useEffect} from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import obiPic from '../pics/obi-wan.jpg'

const Starships = (props) => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [notFound, setNotFound] = useState(true);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
        .then((res) => {
            setData(res.data);
            setNotFound(false);
        })
        .catch((err) => {
            console.log("❌ Error:", err)
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
                <h3>Maker: {data.manufacturer}</h3>
                <h3>Crew: {data.crew}</h3>
                <h3>Passengers: {data.passengers}</h3>
                <h3>Hyperdrive Rating: {data.hyperdrive_rating}</h3>
            </div>
        )
    }
}

export default Starships