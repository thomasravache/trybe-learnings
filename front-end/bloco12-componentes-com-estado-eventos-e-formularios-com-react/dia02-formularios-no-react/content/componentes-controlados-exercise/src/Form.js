import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: '',
      input: '',
      textarea: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      textarea: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">
            <select name="" id="">
              <option value="">Teste 1</option>
              <option value="">Teste 2</option>
              <option value="">Teste 3</option>
            </select>
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
          <label htmlFor="">
            <textarea name="" onChange={ this.handleChange } value={ this.state.textarea } id="" cols="30" rows="10"></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
