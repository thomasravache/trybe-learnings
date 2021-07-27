import React from 'react';
import PersonalInfo from './PersonalInfo';
import LastJobData from './LastJobData';
import Buttons from './Buttons';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
    }

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <section>
        <h1>Meu formulário</h1>
        <form action="">
          <PersonalInfo onChangeFunction={ this.handleChange } value={ this.state } />
          <LastJobData />
          <Buttons />
        </form>
      </section>
    );
  }
}

export default Form;