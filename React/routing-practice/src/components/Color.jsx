import React from 'react'
import {useParams} from 'react-router'

const Color = (props) => {
    const {varible, text, bg} = useParams();

    const isNotNumber = (testItem) => {
        if(isNaN(testItem)) {
            return `The word is: ${varible}`
        } else {
            return `The number is: ${varible}`
        }
    }

    const style = {
        color: text,
        backgroundColor: bg,
        padding: "10px"
    }

    return (
        <div>
            <h1 style={style}>{isNotNumber(varible)}</h1>
        </div>
    )
}

export default Color