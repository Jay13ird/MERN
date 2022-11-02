import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './components/styles.css'

function App() {
  const [todoList, setTodoList] = useState([
    {
      text: "test 1",
      complete: false
    },
    {
      text: "test 2",
      complete: true
    }
  ]);

  const addListItem = (newListItem) => {
    setTodoList([
      ...todoList,
      newListItem
    ])
  }

  const updateItem = (i) => {
    const updateTodoList = [...todoList]
    if(updateTodoList[i].complete === false) {
      updateTodoList[i].complete = true
    } else {
      updateTodoList[i].complete = false
    }
    setTodoList(updateTodoList)
  }

  const deleteItem = (i) => {
    const deletedItem = todoList.filter((item, itemIdx) => {
      if(i !== itemIdx){
        return true
      } else {
        return false
      }
    })
    setTodoList(deletedItem)
  }

  return (
    <div className='container'>
      <Form onNewListItem={addListItem}/>
      <TodoList todoList={todoList} changeItem={updateItem} removeItem={deleteItem}/>
    </div>
  );
}

export default App;
