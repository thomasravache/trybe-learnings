import React from 'react';

class PasswordInput extends React.Component {
  validatePassword(passwordValue) {
    const isValid = passwordValue.match(/(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/);

    if(!isValid || passwordValue.length === 0) {
      return (
        <ul>
          <li>The string must contain at least 1 lowercase alphabetical character.</li>
          <li>The string must contain at least 1 uppercase alphabetical character.</li>
          <li>The string must contain at least 1 numeric character.</li>
          <li>The string must contain at least one special character.</li>
          <li>The string must be eight characters or longer.</li>
        </ul>
      );
    }
    return '';
  }

  render() {
    const { value, onChange } = this.props;

    return(
      <label htmlFor="">
        Password
        <input name="password" type="password" value={ value } onChange={ onChange } />
        <div className='error'>{ this.validatePassword(value) }</div>
      </label>
    );
  }
}

export default PasswordInput;