import './App.css';

function App() {

  const isGreen = true;

  return (
    <div className="App">
      <h1 style={{ color: isGreen ? "Green" : "red" }}> This has colour</h1>
      {isGreen && <button>This is a button</button>}
    </div>
  );
}

export default App;
