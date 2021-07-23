import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ () => console.log('textinho qualquer') }>Meu Butão</button>
        <button onMouseOver={ () => console.log('textinho qualquer 1') }>Meu Butão 1</button>
        <button onDoubleClick={ () => console.log('textinho qualquer 2') }>Meu Butão 2</button>
      </div>
    );
  }
}

export default App;
