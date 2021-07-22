import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon, key } = this.props;

    return(
      <section className="card" key={key}>
        <div>
          <p>{pokemon.name}</p>
          <p>Type: {pokemon.type}</p>
          <p>Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      </section>
    );
  }
}

export default Pokemon;