import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [allBoxes, setAllBoxes] = useState([]);

  const newBox = (addNewBox) => {
    setAllBoxes([
      ...allBoxes,
      addNewBox
    ])
  }

    return (
      <div className="App">
        <Form onNewBox={newBox}/>
        <Display boxes={allBoxes}/>
      </div>
    );
}

export default App;
