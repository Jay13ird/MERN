import React from 'react'

const Display = (props) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {props.boxes.map((box, i) => 
                <p key={i} style={box}></p>
            )}
        </div>
    )
}

export default Display