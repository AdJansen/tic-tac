import './App.css';
import './MiniGame.js';
import MiniGame from './MiniGame.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tic TAc TOE!
        </p>
        <MiniGame/>
      </header>
    </div>
  );
}

export default App;
