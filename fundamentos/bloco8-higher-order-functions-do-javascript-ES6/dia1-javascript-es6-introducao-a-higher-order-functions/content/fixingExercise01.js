// Ao chamar a função doingThings:
const doingThings = (func) => console.log(func());

const wakeUp = () => `Acordando!!`;



doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!