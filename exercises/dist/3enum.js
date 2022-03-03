"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1enum_1 = require("./1enum");
const _2enum_1 = require("./2enum");
// ./index.ts
const process_1 = require("process");
const readline_sync_1 = __importDefault(require("readline-sync"));
const monthsNames = Object.values(_1enum_1.Months).
    map(item => item);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
if (choiceMonth === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const seasonsSouth = {
    [_2enum_1.Seasons.Autumn]: [_1enum_1.Months.March, _1enum_1.Months.April, _1enum_1.Months.May, _1enum_1.Months.June],
    [_2enum_1.Seasons.Winter]: [_1enum_1.Months.June, _1enum_1.Months.July, _1enum_1.Months.August, _1enum_1.Months.September],
    [_2enum_1.Seasons.Spring]: [_1enum_1.Months.September, _1enum_1.Months.October, _1enum_1.Months.November, _1enum_1.Months.December],
    [_2enum_1.Seasons.Summer]: [_1enum_1.Months.December, _1enum_1.Months.January, _1enum_1.Months.February, _1enum_1.Months.March],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [_2enum_1.Seasons.Spring]: seasonsSouth[_2enum_1.Seasons.Autumn],
    [_2enum_1.Seasons.Summer]: seasonsSouth[_2enum_1.Seasons.Winter],
    [_2enum_1.Seasons.Autumn]: seasonsSouth[_2enum_1.Seasons.Spring],
    [_2enum_1.Seasons.Winter]: seasonsSouth[_2enum_1.Seasons.Summer],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
if (choiceHemisphere === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const month = Object.values(_1enum_1.Months)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
