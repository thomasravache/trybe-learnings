import { Months } from './1enum';
import { Seasons } from './2enum';

// ./index.ts

import { exit } from "process";
import readline from "readline-sync";

const monthsNames = Object.values(Months).
    map(item => item);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

if (choiceMonth === -1) {
    console.log("Saindo!");
    exit();
}

const seasonsSouth = {
    [Seasons.Autumn]: [Months.March, Months.April, Months.May, Months.June],
    [Seasons.Winter]: [Months.June, Months.July, Months.August, Months.September],
    [Seasons.Spring]: [Months.September, Months.October, Months.November, Months.December],
    [Seasons.Summer]: [Months.December, Months.January, Months.February, Months.March],
}
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsNorth = {
    [Seasons.Spring]: seasonsSouth[Seasons.Autumn],
    [Seasons.Summer]: seasonsSouth[Seasons.Winter],
    [Seasons.Autumn]: seasonsSouth[Seasons.Spring],
    [Seasons.Winter]: seasonsSouth[Seasons.Summer],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

if (choiceHemisphere === -1) {
    console.log("Saindo!");
    exit();
}

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar

    if (months.includes(month)) console.log(seasons);
});