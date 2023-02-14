import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        name={"Smith, Sophia"}
        age={21}
        hair={"black"} />
      <Person
        name={"Rapinoe, Megan"}
        age={37}
        hair={"pink"} />
      <Person
        name={"Morgan, Alex"}
        age={33}
        hair={"brown"} />
      <Person
        name={"Sauerbrunn, Becky"}
        age={37}
        hair={"blond"} />
    </div>
  );
}

export default App;
