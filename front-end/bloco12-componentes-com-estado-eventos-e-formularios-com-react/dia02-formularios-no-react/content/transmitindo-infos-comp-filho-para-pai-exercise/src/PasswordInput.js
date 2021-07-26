import React from 'react';

class PasswordInput extends React.Component {
  render() {
    const { password, onChange } = this.props;

    return(
      <label htmlFor="">
        Password
        <input name="password" type="password" value={ password } onChange={ onChange } />
      </label>
    );
  }
}

export default PasswordInput;