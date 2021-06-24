const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arrayWithNames) => {
  return arrayWithNames.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters(names));