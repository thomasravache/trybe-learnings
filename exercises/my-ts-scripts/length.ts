import readlineSync from 'readline-sync';

const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']; 

const valor = readlineSync.questionFloat('Informe o valor a ser convertido\n');
const unidadeBase = readlineSync.question('Informe a unidade base\n');
const unidadeDeConversao = readlineSync.question('Informa a unidade de conversão\n');

export const convert = (valor: number, unidadeBase: string, unidadeDeConversao: string): string => {
  try {
    if (!units.includes(unidadeBase) || !units.includes(unidadeDeConversao))
      throw new Error('A unidade informada não existe');
    
    const indexUnidadeDeConversao = units.indexOf(unidadeDeConversao);
    const indexUnidadeBase = units.indexOf(unidadeBase);
    const expoente = indexUnidadeDeConversao - indexUnidadeBase;
  
    const resultado = valor * Math.pow(10, expoente);
  
    return `${resultado}${unidadeDeConversao}`;
  } catch (e: any) {
    return e.message;
  }
};

console.log(convert(valor, unidadeBase, unidadeDeConversao));
