import React from 'react';
import '../App.css';
import states from '../data';

class PersonalInfo extends React.Component {
  cityValidation() {

  }

  render() {
    const { onChangeFunction, value: { name, email, cpf, address, city, state, type } } = this.props;

    return(
      <fieldset className="personal-info">
        <legend>Dados pessoais</legend>
        <label htmlFor="">
          <span>Nome:</span> 
          <input className="input-name" type="text" name="name" maxLength="40" required value={ name } onChange={ onChangeFunction } />
        </label>
        <label htmlFor="">
          <span>E-mail: </span>
          <input type="email" name="email" maxLength="50" required value={ email } onChange={ onChangeFunction } />
        </label>
        <label htmlFor="">
          <span>CPF:</span> 
          <input type="text" name="cpf" maxLength="11" required value={ cpf } onChange={ onChangeFunction } />
        </label>
        <label htmlFor="">
          <span>Endereço:</span>
          <input type="text" maxLength="200" name="address" required value={ address } onChange={ onChangeFunction } />
        </label>
        <label htmlFor="">
          <span>Cidade:</span>
          <input type="text" name="city" maxLength="28" value={ city } onChange={ onChangeFunction } />
        </label>
        <label htmlFor="">
          <span>Estado:</span>
          <select name="state" id="" value={ state } onChange={ onChangeFunction }>
            <option value=""></option>
            { states.map(([sigla, stateName]) => <option key={ stateName } value={ stateName }>{ sigla }</option> ) }
          </select>
        </label>
        <div onChange={ onChangeFunction }>
          <span>Tipo:</span>
          <label htmlFor="casa" className="radio">
            <input type="radio" name="type" value="Casa" required id="casa" /><span>Casa</span>
          </label>
          <label htmlFor="apartamento" className="radio">
            <input type="radio" name="type" value="Apartamento" required id="apartamento" />Apartamento
          </label>
        </div>
      </fieldset>
    );
  };
}

export default PersonalInfo;