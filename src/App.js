import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Doe" age={25} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Doe" age={23} hairColor="Red" />
      <PersonCard firstName="Mike" lastName="Smith" age={50} hairColor="Black" />
      <PersonCard firstName="Some" lastName="Guy" age={35} hairColor="Blonde" />
    </div>
  );
}

export default App;
