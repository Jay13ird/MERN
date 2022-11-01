import React, {useState} from 'react'

const Form = (props) => {
    // const [newBox, setNewBox] = useState([]);
    const [newColor, setNewColor] = useState("");
    const [newSize, setNewSize] = useState(50);

    const createBox = (e) => {
        e.preventDefault();
        // setNewBox([{
        //     width: "100px",
        //     height: "100px",
        //     margin: "20px",
        //     backgroundColor: newColor
        // }]);
        const newBox = {
            width: newSize + "px",
            height: newSize + "px",
            margin: "20px",
            backgroundColor: newColor
        }
        props.onNewBox(newBox);
        setNewColor("");
        setNewSize(50);
    }
    
    return (
        <div>
            <form onSubmit={createBox}>
                <label>Color: </label>
                <input type="text" onChange={(e) => setNewColor(e.target.value)} value={newColor}/>
                <input type="number" onChange={(e) => setNewSize(e.target.value)} value={newSize}/>
                <button>Add Box</button>
            </form>
        </div>
    )
}

export default Form