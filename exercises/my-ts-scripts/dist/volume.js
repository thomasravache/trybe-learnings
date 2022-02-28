"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const unidades = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
const convert = (valor, unidadeBase, unidadeDeConversao) => {
    try {
        if (!unidades.includes(unidadeBase) || !unidades.includes(unidadeDeConversao))
            throw new Error('A unidade informada não existe');
        const indexUnidadeDeConversao = unidades.indexOf(unidadeDeConversao);
        const indexUnidadeBase = unidades.indexOf(unidadeBase);
        const expoente = indexUnidadeDeConversao - indexUnidadeBase;
        const resultado = valor * Math.pow(10, expoente);
        return `${resultado}${unidadeDeConversao}`;
    }
    catch (e) {
        return e.message;
    }
};
exports.convert = convert;
console.log((0, exports.convert)(1000, 'm³', 'km³'));
