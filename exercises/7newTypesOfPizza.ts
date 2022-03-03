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
