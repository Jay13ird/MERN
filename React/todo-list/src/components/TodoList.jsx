import React from 'react'
import './styles.css'

const TodoList = (props) => {

    return (
        <div>
            {props.todoList.map((item, i) =>
                <div key={i} className="showList">
                    <p className={item.complete === true ? "completed" : "notCompleted"}>{item.text}</p>
                    <input type="checkbox" checked={item.complete} onChange={() => props.changeItem(i)}/>
                    <button onClick={() => props.removeItem(i)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default TodoList