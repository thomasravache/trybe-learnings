import React from 'react';

class LoginInput extends React.Component {
  render() {
    const { login, onChange } = this.props;

    return(
      <label htmlFor="">
        Login
        <input type="text" name="login" value={ login } onChange={ onChange } />
      </label>
    );
  }
}

export default LoginInput;