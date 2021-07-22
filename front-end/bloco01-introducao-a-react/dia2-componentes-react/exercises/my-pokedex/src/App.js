import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return(
      <main>
        <Pokedex pokemons={pokemons}/>
      </main>
    );
  }
}

export default App;
