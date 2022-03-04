type callbackFilter<T> = (value: T, index?: number, array?: T[]) => boolean;

const myFilter = <T>(array: T[], callback: callbackFilter<T>): T[] => {
  const meuArray: T[] = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      meuArray.push(array[i]);
    }
  };

  return meuArray;
};



console.log(myFilter<number>([1, 2, 3], (item) => item < 3));

console.log(myFilter<string>(['a', 'b', 'c'], (letter) => letter !== 'a'));
