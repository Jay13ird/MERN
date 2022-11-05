import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import axios from 'axios'
import obiPic from '../pics/obi-wan.jpg'

const People = (props) => {
    const {id} = useParams();
    const [personData, setPersonData] = useState([]);
    const [worldData, setWorldData] = useState([]);
    const [notFound, setNotFound] = useState(true);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((res) => {
            setPersonData(res.data);
            setNotFound(false);
        })
        .catch((err) => {
            console.log("❌ Error:", err)
            setNotFound(true);
        })
    }, [id])

    useEffect(() => {
        axios.get(`${personData.homeworld}`)
        .then((res) => {
            setWorldData(res.data);
        })
        .catch((err) => {
            console.log("❌ Error:", err)
        })
    }, [personData])

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
                <h1>{personData.name}</h1>
                <h3>Height: {personData.height} cm</h3>
                <h3>Mass: {personData.mass} kg</h3>
                <h3>Hair Color: {personData.hair_color}</h3>
                <h3>Skin Color: {personData.skin_color}</h3>
                <h3><Link to={`/${personData.homeworld.substring(22, personData.homeworld.length)}`}>{worldData.name}</Link></h3>
            </div>
        )
    }
}

export default People