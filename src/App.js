import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://vishalash.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-react"
        >
          Learn Testing
        </a>
      </header>
    </div>
  );
}

export default App;
