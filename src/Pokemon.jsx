/* eslint-disable react/prop-types */
export default function Pokemon(props) {
  console.log(props);

  return (
    <div className="pokemon--container">
      <img className="pokemon--img" src={props.image} alt="pokemon" />
      <div className="pokemon--info">
        <h3>Name: {props.name}</h3>
        <p>ID: {props.id}</p>
        <p>Height: {props.height} meter</p>
        <p>Abilities: {props.abilities}</p>
        <p>category: {props.category}</p>
      </div>
    </div>
  );
}
