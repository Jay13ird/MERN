import './App.css';
import React, {useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Error from './components/Error';

function App() {
  return (
    <div className='App'>
      <Form />

      <Routes>
        <Route path='/' />
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planets />} />
        <Route path='/starships/:id' element={<Starships />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
