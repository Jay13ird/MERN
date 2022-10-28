import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Rick" lastName="Sanchez" age={70} hairColor="Light Blue"/>
      <PersonCard firstName="Morty" lastName="Smith" age={15} hairColor="Brown"/>
      <PersonCard firstName="Summer" lastName="Smith" age={17} hairColor="Red"/>
      <PersonCard firstName="Beth" lastName="Smith" age={34} hairColor="Blonde"/>
    </div>
  );
}

export default App;
