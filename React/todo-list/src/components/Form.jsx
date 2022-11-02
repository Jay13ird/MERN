import React, { useState } from 'react'


const Form = (props) => {
    
    const [newText, setNewText] = useState("");

    const addListItem = (e) => {
        e.preventDefault();
        const newListItem = {
            text: newText,
            complete: false
        }
        props.onNewListItem(newListItem)
        setNewText("");
    }

    return (
        <div>
            <form onSubmit={addListItem}>
                <input type="text" onChange={(e) => setNewText(e.target.value)} value={newText} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form