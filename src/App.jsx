import "./App.css";
import shops from "./data/shops";

const App = () => (
  <div className="App">
    <h1>A list of {shops.length} electonics shops</h1>
    {shops.map((i) => (
      <div className="div-link">
        <a
          key={i.name}
          href={i.link}
          title={i.name}
          target="_blank"
          rel="noreferrer"
          className="App-link"
        >
          {i.name}
        </a>
      </div>
    ))}
  </div>
);

export default App;
