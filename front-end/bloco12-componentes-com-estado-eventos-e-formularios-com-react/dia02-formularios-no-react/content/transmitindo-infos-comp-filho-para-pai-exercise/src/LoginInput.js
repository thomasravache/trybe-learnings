import React from 'react';

class LoginInput extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return(
      <label htmlFor="">
        Login
        <input type="text" name="login" value={ value } onChange={ onChange } />
      </label>
    );
  }
}

export default LoginInput;