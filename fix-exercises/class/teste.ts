//Criando interface e tipo com generics

interface MinhaInterface<T> {
  prop1: T;
  prop2: T;
}

const minhaInterface: MinhaInterface<string> = {
  prop1: 'teste',
  prop2: 'oi',
};

type MeuType<T> = {
  prop1: T,
  prop2: T,
}

const meuType: MeuType<number> = {
  prop1: 1,
  prop2: 2,
};
