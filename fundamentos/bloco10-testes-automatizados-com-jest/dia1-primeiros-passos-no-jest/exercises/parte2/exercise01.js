// Desafio 9
function encodeAlgorithm(stringIndex) {
  let letters = ['a', 'e', 'i', 'o', 'u'];
  let valueEncoded;

  for (let indexLetter = 0; indexLetter < letters.length; indexLetter += 1) {
    if (stringIndex === letters[indexLetter]) {
      valueEncoded = (indexLetter + 1).toString();
      break;
    } else {
      valueEncoded = '';
    }
  }

  return valueEncoded;
}

function encode(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let encoded = encodeAlgorithm(string[index]);

    newString += encoded;
    if (encoded === '') {
      newString += string[index];
    }
  }

  return newString;
}

function decodeAlgorithm(stringIndex) {
  let letters = ['a', 'e', 'i', 'o', 'u'];
  let valueDecoded;

  for (let indexLetter = 0; indexLetter < letters.length; indexLetter += 1) {
    if (stringIndex === (indexLetter + 1).toString()) {
      valueDecoded = letters[indexLetter];
      break;
    } else {
      valueDecoded = '';
    }
  }

  return valueDecoded;
}

function decode(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    let decoded = decodeAlgorithm(string[index]);

    newString += decoded;
    if (decoded === '') {
      newString += string[index];
    }
  }

  return newString;
}

module.exports = { encode, decode };