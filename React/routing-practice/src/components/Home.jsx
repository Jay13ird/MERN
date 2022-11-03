import '../App.css';
import React from 'react'
import { useParams } from "react-router";

const Home = (props) => {
    const {varible} = useParams();

    const isNotNumber = (testItem) => {
        if(isNaN(testItem)) {
            return `The word is: ${varible}`
        } else {
            return `The number is: ${varible}`
        }
    }

    return (
        <div>
            {varible
            ? <h1>{isNotNumber(varible)}</h1>
            : <h1>Welcome</h1>
            }
        </div>
    )
}

export default Home