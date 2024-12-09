import Pokemon from "./Pokemon";
import data from "./data";

function App() {
  console.log(data.id);

  const pokemons = data.map((p) => <Pokemon key={p.id} {...p} />);

  return <div className="container">{pokemons}</div>;
}

export default App;
