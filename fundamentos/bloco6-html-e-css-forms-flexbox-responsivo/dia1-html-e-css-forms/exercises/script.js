const stateArea = document.querySelector('#estados');
const dateField = document.querySelector('#data-inicio');

dateField.addEventListener('keypress', function(event) {
  if (dateField.value.length == 2 || dateField.value.length == 5) {
    dateField.value += '/';
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
  let invalidDay = (day <= 0 || day > 31 || isNaN(day));
  let invalidMonth = (month <= 0 || month > 12) || isNaN(month);
  let invalidYear = (year <= 0);
  let isEmpty = (dateField.value === '' || isNaN(year));

  if (invalidDay || invalidMonth || invalidYear || isEmpty) {
    dateField.value = ''
    alert('Informe a data corretamente');
  }

});

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

window.onload = function() {
  createStatesOptionDropDown();
}