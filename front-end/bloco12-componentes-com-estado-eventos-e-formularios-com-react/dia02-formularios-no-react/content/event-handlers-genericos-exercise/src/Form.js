import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textField: '',
      textAreaField: '',
      selectField: '',
      checkboxField: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">
            <textarea value={ this.state.textAreaField } onChange={ this.handleChange } name="textAreaField" id="" cols="30" rows="10"></textarea>
          </label>
          <label htmlFor="">
            <input name="textField" value={ this.state.textField } onChange={ this.handleChange } type="text" />
          </label>
          <label htmlFor="">
            <select name="selectField" value={ this.state.selectField } onChange={ this.handleChange } id="">
              <option value="Teste 01">Teste 01</option>
              <option value="Teste 02">Teste 02</option>
              <option value="Teste 03">Teste 03</option>
            </select>
          </label>
          <label htmlFor="">
            <input type="checkbox" value={ this.state.checkboxField } onChange={ this.handleChange } name="checkboxField" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;