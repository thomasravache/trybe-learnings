import React from 'react';

class PasswordInput extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return(
      <label htmlFor="">
        Password
        <input name="password" type="password" value={ value } onChange={ onChange } />
        {/* <div className='error'>{ this.validatePassword(value) }</div> */}
      </label>
    );
  }
}

export default PasswordInput;