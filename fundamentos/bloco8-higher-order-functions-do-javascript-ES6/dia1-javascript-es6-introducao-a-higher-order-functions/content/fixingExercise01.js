// Ao chamar a função doingThings:
const doingThings = (func) => console.log(func());

const wakeUp = () => `Acordando!!`;
const breakFast = () => `Bora tomar café!!`;
const sleep = () => `Partiu dormir!!`;

doingThings(wakeUp);
doingThings(breakFast);
doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!