type sumOfTwo = {
  a: number;
  b: number;
};

const sum = (object: sumOfTwo): number => object.a + object.b;

console.log(sum({ a: 1, b: 2 }));
