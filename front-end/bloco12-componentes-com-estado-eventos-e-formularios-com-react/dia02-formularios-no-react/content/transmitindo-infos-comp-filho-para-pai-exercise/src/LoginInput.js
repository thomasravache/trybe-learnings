import React from 'react';

class LoginInput extends React.Component {
  emailValidate(login) {
    const isValid = login.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    
    if(!isValid || login.length === 0) {
      return (
        <ul>
          <li>E-mail inválido.</li>
        </ul>
      );
    }
    return '';
  }

  render() {
    const { value, onChange } = this.props;

    return(
      <label htmlFor="">
        Login
        <input type="text" name="login" value={ value } onChange={ onChange } />
        <div className="error">{ this.emailValidate(value) }</div>
      </label>
    );
  }
}

export default LoginInput;