import readlineSync from 'readline-sync';

const unidades: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const valor = readlineSync.questionFloat('Informe o valor a ser convertido\n');
const unidadeBase = readlineSync.question('Informe a unidade base\n');
const unidadeDeConversao = readlineSync.question('Informa a unidade de conversão\n');

export const convert = (valor: number, unidadeBase: string, unidadeDeConversao: string): string => {
  try {
    if (!unidades.includes(unidadeBase) || !unidades.includes(unidadeDeConversao))
      throw new Error ('A unidade informada não existe');

    const indexUnidadeDeConversao = unidades.indexOf(unidadeDeConversao);
    const indexUnidadeBase = unidades.indexOf(unidadeBase);
    const expoente = indexUnidadeDeConversao - indexUnidadeBase;

    const resultado = valor * Math.pow(10, expoente);

    return `${resultado}${unidadeDeConversao}`;
  } catch (e: any) {
    return e.message;
  }
};

console.log(convert(valor, unidadeBase, unidadeDeConversao));
