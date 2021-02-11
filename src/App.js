import './App.css';
import testdata from './testdata.js';

function App() {

  const lukemat = testdata.map(item => {
    return <div>{item.lukema}</div>
  });

  return (
    <div className="App">
      <header className="App-header">
      
          {lukemat}

      </header>
    </div>
  );
}

export default App;
