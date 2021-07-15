const searchEmployee = require("./exerciseBonus");

require = ('./exerciseBonus');

describe('Executando testes', () => {
  test('retorna os resultados da busca pelo id', () => {
    expect(searchEmployee('4678-2', 'firstName')).toStrictEqual('Paul');
    expect(searchEmployee('1256-4', 'lastName')).toStrictEqual('Bezos');
    expect(searchEmployee('4456-4', 'specialities')).toStrictEqual(['Context API', 'RTL', 'Bootstrap']);
  });
  test('Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada"', () => {
    expect(searchEmployee('00-00', 'firstName')).toStrictEqual('ID não identificada');
  });
  test('Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível"', () => {
    expect(searchEmployee('4678-2', 'nome')).toStrictEqual('Informação indisponível');
  });
});