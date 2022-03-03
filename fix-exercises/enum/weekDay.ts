enum weekDays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const segundaFeira: weekDays = weekDays.Monday;
const tercaFeira = weekDays[2];

console.log(segundaFeira);
console.log(tercaFeira);
