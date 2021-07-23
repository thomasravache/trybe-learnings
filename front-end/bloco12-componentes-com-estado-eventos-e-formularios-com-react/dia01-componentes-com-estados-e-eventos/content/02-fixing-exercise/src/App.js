import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <button onClick={ this.handleClick }>Meu butão</button>
    );
  }
}

export default App;
