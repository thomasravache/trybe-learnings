"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
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
console.log((0, exports.convert)(10000, 'm', 'km'));
