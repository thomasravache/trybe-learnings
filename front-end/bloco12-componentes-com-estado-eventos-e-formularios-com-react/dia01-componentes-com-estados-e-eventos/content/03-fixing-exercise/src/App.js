import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btn01Click: 0,
      btn02Click: 0,
      btn03Click: 0,
    };
    this.btn01HandleClick = this.btn01HandleClick.bind(this);
    this.btn02HandleClick = this.btn02HandleClick.bind(this);
    this.btn03HandleClick = this.btn03HandleClick.bind(this);
  }

  btn01HandleClick() {
    this.setState((prevState, _props) => ({
      btn01Click: prevState.btn01Click + 1,
    }));
  }

  btn02HandleClick() {
    this.setState((prevState, _props) => ({
      btn02Click: prevState.btn02Click + 1,
    }));
  }

  btn03HandleClick() {
    this.setState((prevState, _props) => ({
      btn03Click: prevState.btn03Click + 1,
    }))
  }

  render() {
    return (
      <div>
        <button onClick={ this.btn01HandleClick }>{ this.state.btn01Click }</button>
        <button onClick={ this.btn02HandleClick }>{ this.state.btn02Click }</button>
        <button onClick={ this.btn03HandleClick }>{ this.state.btn03Click }</button>
      </div>
    );
  }
}

export default App;