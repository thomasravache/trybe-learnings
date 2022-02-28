const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']; 

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

console.log(convert(10000, 'm', 'km'));
