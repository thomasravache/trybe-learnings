"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const valor = readline_sync_1.default.questionFloat('Informe o valor a ser convertido\n');
const unidadeBase = readline_sync_1.default.question('Informe a unidade base\n');
const unidadeDeConversao = readline_sync_1.default.question('Informa a unidade de conversão\n');
const convert = (valor, unidadeBase, unidadeDeConversao) => {
    try {
        if (!units.includes(unidadeBase) || !units.includes(unidadeDeConversao))
            throw new Error('A unidade informada não existe');
        const indexUnidadeDeConversao = units.indexOf(unidadeDeConversao);
        const indexUnidadeBase = units.indexOf(unidadeBase);
        const expoente = indexUnidadeDeConversao - indexUnidadeBase;
        const resultado = valor * Math.pow(10, expoente);
        return `${resultado}${unidadeDeConversao}`;
    }
    catch (e) {
        return e.message;
    }
};
exports.convert = convert;
console.log((0, exports.convert)(valor, unidadeBase, unidadeDeConversao));
