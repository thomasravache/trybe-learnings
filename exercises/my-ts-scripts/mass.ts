const unidades: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

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

console.log(convert(1000, 'mg', 'g'));
