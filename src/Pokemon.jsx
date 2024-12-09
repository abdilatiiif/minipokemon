export default function Pokemon() {
  return (
    <div className="pokemon--container">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pokemon"
      />
      <div className="pokemon--info">
        <div className="pokemon--name--id">
          <h3>Name: Pickachu</h3>
          <span>ID: #0025</span>
        </div>
        <p>Height: 0.6 meter</p>
        <p>Abilities: electric</p>
        <p>category: bit rat/mouse</p>
      </div>
    </div>
  );
}
