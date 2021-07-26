import React from 'react';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };

    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { login, password } = this.state;

    return(
      <div>
        <h1>Formzin</h1>
        <form action="">
          <LoginInput value={ login } onChange={ this.handlerChange }/>
          <PasswordInput value={ password } onChange={ this.handlerChange }/>
        </form>
      </div>
    );
  }
}

export default Form;