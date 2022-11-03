import './App.css';
import Home from './components/Home';
import Color from './components/Color';
import Error from './components/Error';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:varible' element={<Home />} />
        <Route path='/:varible/:text/:bg' element={<Color />} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
