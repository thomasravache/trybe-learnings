import React from 'react';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';
import ShowErrors from './ShowErrors';
import ShowSuccess from './ShowSuccess';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      formularioComErros: true,
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerErrors = this.handlerErrors.bind(this);
  }

  handlerErrors() {
    const { login, password } = this.state;
    
    const errors = [
      !login.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
      !password.match(/(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)
    ];

    const formOk = errors.every((error) => error === false);

    this.setState({
      formularioComErros: !formOk,
    })

  }

  handlerChange(event) {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value,
    }, () => this.handlerErrors());
  }

  render() {
    const { login, password, formularioComErros } = this.state;

    return(
      <div>
        <h1>Formzin</h1>
        <form action="">
          <LoginInput value={ login } onChange={ this.handlerChange }/>
          <PasswordInput value={ password } onChange={ this.handlerChange }/>
        </form>
          { formularioComErros ? <ShowErrors /> : <ShowSuccess /> }
      </div>
    );
  }
}

export default Form;