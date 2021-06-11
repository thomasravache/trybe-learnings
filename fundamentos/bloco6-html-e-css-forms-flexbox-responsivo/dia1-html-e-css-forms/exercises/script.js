const stateArea = document.querySelector('#estados');
const dateField = document.querySelector('#data-inicio');
const form = document.querySelector('#formulario');
const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const curriculumResum = document.querySelector('#resumo-curriculo');
const position = document.querySelector('#cargo');
const positionDescription = document.querySelector('#descricao-cargo');
const initialDate = document.querySelector('#data-inicio');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetar');
const result = document.querySelector('#retorno');

function createStatesOptionDropDown() {
  let brazilStates = {
    states: [
      'Acre',
	    'Alagoas',
	    'Amapá',
	    'Amazonas',
	    'Bahia',
	    'Ceará',
	    'Distrito Federal',
	    'Espirito Santo',
	    'Goiás',
	    'Maranhão',
	    'Mato Grosso do Sul',
	    'Mato Grosso',
	    'Minas Gerais',
	    'Pará',
	    'Paraíba',
	    'Paraná',
	    'Pernambuco',
	    'Piauí',
	    'Rio de Janeiro',
	    'Rio Grande do Norte',
	    'Rio Grande do Sul',
	    'Rondônia',
	    'Roraima',
	    'Santa Catarina',
	    'São Paulo',
	    'Sergipe',
	    'Tocantins',
    ],
    initials: [ 
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    ]
  };

function isValidName(object) {
  object.error.push('Nome inválido');
  object.value.push(`Nome: ${nome.value}`);

  if (nome.value === '') {
    object.valid.push(false);
  } else {
    object.valid.push(true);
  }
}

function isValidEmail(object) {
  object.error.push('E-mail inválido');
  object.value.push(`E-mail: ${email.value}`);

  if (email.value === '') {
    object.valid.push(false);
  } else {
    object.valid.push(true);
  }
}

function isValidCPF(object) {
  object.error.push('CPF inválido');
  object.value.push(`CPF: ${cpf.value}`);

  if (cpf.value === '') {
    object.valid.push(false);
  } else {
    object.valid.push(true);
  }
}

function isValidAddress(object) {
  object.error.push('Endereço inválido');
  object.value.push(`Endereço: ${address.value}`);

  if (address.value === '') {
    object.valid.push(false);
  } else {
    object.valid.push(true);
  }
}

function isValidCity(object) {
  object.error.push('Cidade inválida');
  object.value.push(`Cidade: ${city.value}`);

  if (city.value === '') {
    object.valid.push(false);
  } else {
    object.valid.push(true);
  }
}

function isValidCurriculumResum(object) {
  object.error.push('Resumo inválido');
  object.value.push(`Resumo Currículo: ${curriculumResum.value}`);

  if (curriculumResum.value === '') {
    object.valid.push(false);
  } else {
    object.valid.push(true);
  }
}

function isValidPosition(object) {
  object.error.push('Cargo inválido');
  object.value.push(`Cargo: ${position.value}`);

  if (position.value === '') {
    object.valid.push(false);
  } else {
    object.valid.push(true);
  }
}

function isValidPositionDescription(object) {
  object.error.push('Descrição Cargo inválido');
  object.value.push(`Descrição Cargo: ${positionDescription.value}`);

  if (positionDescription.value === '') {
    object.valid.push(false);
  } else {
    object.valid.push(true);
  }
}

function isValidInitialDate(object) {
  object.error.push('Data de início inválida');
  object.value.push(`Data de início: ${initialDate.value}`);

  if (initialDate.value === '') {
    object.valid.push(false);
  } else {
    object.valid.push(true);
  }
}

function resultValidations() {
  let validations = {
    valid: [],
    error: [],
    value: [],
  }
  isValidName(validations);
  isValidEmail(validations);
  isValidCPF(validations);
  isValidAddress(validations);
  isValidCity(validations);
  isValidCurriculumResum(validations);
  isValidPosition(validations);
  isValidPositionDescription(validations);
  isValidInitialDate(validations);

  return validations;
}

function isAllValid() {
 let isValid = true;
 let validations = resultValidations();

  for (let index = 0; index < validations.valid.length; index += 1) {
    if (!validations.valid[index]) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

btnEnviar.addEventListener('click', function() {
  let allValid = isAllValid();
  let validations = resultValidations();
  result.innerHTML = '';
  
  if (allValid) {
    for (let index = 0; index < validations.value.length; index += 1) {
      if (validations.valid[index]){
        let paragraph = document.createElement('p');
        let createdParagraph = result.appendChild(paragraph);
        createdParagraph.innerHTML = validations.value[index];
        createdParagraph.style.color = 'green';
      }
    }
  } else {
    for (let index = 0; index < validations.value.length; index += 1) {
      if (!validations.valid[index]){
        let paragraph = document.createElement('p');
        let createdParagraph = result.appendChild(paragraph);
        createdParagraph.innerHTML = validations.error[index];
        createdParagraph.style.color = 'red';
      }
    }
  }
});

btnReset.addEventListener('click', function() {
  result.innerHTML = '';
});

dateField.addEventListener('keypress', function(event) {
  if (dateField.value.length == 2 || dateField.value.length == 5) {
    dateField.value += '/';
  }

  if (isNaN(parseInt(event.key))) {
    event.preventDefault();
  }
});

cpf.addEventListener('keypress', function(event) {
  if (cpf.value.length === 3 || cpf.value.length === 7) {
    cpf.value += '.'
  } else if (cpf.value.length === 11) {
    cpf.value += '-'
  }
  if (isNaN(parseInt(event.key))) {
    event.preventDefault();
  }
});

dateField.addEventListener('change', function() {
  let date = dateField.value.split('/');
  let day = parseInt(date[0],10);
  let month = parseInt(date[1],10);
  let year = parseInt(date[2],10);
  let invalidDay = (day <= 0 || day > 31);
  let invalidMonth = (month <= 0 || month > 12);
  let invalidYear = (year <= 0);
  let isEmpty = (dateField.value === '');

  if (invalidDay || invalidMonth || invalidYear || isEmpty) {
    dateField.value = ''
    alert('Informe a data corretamente');
  }
});

  for (let index in brazilStates.states) {
    let option = document.createElement('option');
    let state = stateArea.appendChild(option);

    if(brazilStates.states[index] === 'São Paulo') {
      state.selected = true;
    }

    state.innerHTML = brazilStates.states[index];
    state.value = brazilStates.initials[index];
    state.required = true;
  }

}

//Não deixa o form ser enviado para o servidor
form.addEventListener('submit', function(event) {
  event.preventDefault();
});

window.onload = function() {
  createStatesOptionDropDown();
}