"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const main = () => {
    const files = ['area', 'capacity', 'characters', 'length', 'mass'];
    const menu = files
        .map((file, index) => `${index + 1} - ${file}`)
        .join('\n');
    console.log(menu);
    const fileToRun = readline_sync_1.default.questionInt('\nQual arquivo deseja abrir?\n');
    const fileIndex = files.findIndex((file) => file === files[fileToRun - 1]);
    if (fileIndex === -1)
        return console.log('Deu ruim');
    return require(`${__dirname}/${files[fileIndex]}`);
};
main();
