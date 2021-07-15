const { encode, decode } = require('./exercise02');

describe('Teste das funções encode e decode', () => {
  test('01 - encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('02 - as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toStrictEqual('12345');
  });
  test('03 - números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toStrictEqual('aeiou');
  });
  test('04 - as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('oi senhor')).toStrictEqual('43 s2nh4r');
  });
  test('05 - a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const testStringEncode = 'aeiou';
    expect(encode(testStringEncode).length).toStrictEqual(testStringEncode.length);
    const testStringDecode = '12345';
    expect(decode(testStringDecode).length).toStrictEqual(testStringDecode.length);
  });
});