import { Pizza } from './6pizza';

type CommonFlavors = 'Calabresa' | 'Frango' | 'Pepperoni';
type VegetarianFlavors = 'Marguerita' | 'Palmito' | 'Cogumelo';
type SweetFlavors = 'Nutella' | 'Goiabada com Queijo' | 'Marshmallow';
type saltySlices = 4 | 6 | 8;
type sweetSlices = 4;

interface CommonPizza extends Pizza {
  flavor: CommonFlavors;
  slices: saltySlices;
};

interface VegetarianPizza extends Pizza {
  flavor: VegetarianFlavors;
  slices: saltySlices;
};

interface SweetPizza extends Pizza {
  flavor: SweetFlavors;
  slices: sweetSlices;
};

const commonPizza1: CommonPizza = {
  flavor: 'Calabresa',
  slices: 4
};

const commonPizza2: CommonPizza = {
  flavor: 'Frango',
  slices: 6,
};

const commonPizza3: CommonPizza = {
  flavor: 'Pepperoni',
  slices: 8,
};

const vegetarianPizza1: VegetarianPizza = {
  flavor: 'Cogumelo',
  slices: 4,
}

const vegetarianPizza2: VegetarianPizza = {
  flavor: 'Marguerita',
  slices: 6,
};

const sweetPizza1: SweetPizza = {
  flavor: 'Goiabada com Queijo',
  slices: 4,
};
