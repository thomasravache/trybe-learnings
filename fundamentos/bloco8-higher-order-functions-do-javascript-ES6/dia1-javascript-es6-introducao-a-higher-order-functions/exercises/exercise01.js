const treatName = (name) => {
  const splitedName = name.split(' ');
  const treatedName = splitedName.join('_').toLowerCase();
  return treatedName;
}

const contractedPerson = (name) => {
  const treatedName = treatName(name);

  return {
    name: `${name}`,
    email: `${treatedName}@trybe.com`
  }
};

const newEmployees = (person, name1, name2, name3) => {
  const employees = {
    id1: person(name1), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: person(name2), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: person(name3), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }

  return employees;
};

const employees = newEmployees(contractedPerson, 'Pedro Guerra', 'Luiza Drumond', 'Carla Paiva');

console.log(employees);
