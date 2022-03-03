type slice = 4 | 6 | 8;

interface Pizza {
  _flavor: string;
  _slices: slice;
};

class Pizza {
  constructor(flavor: string, slices: slice) {
    this._flavor = flavor;
    this._slices = slices;
  }
};

const pizza1 = new Pizza('Calabresa', 8);
const pizza2 = new Pizza('Marguerita', 6);
const pizza3 = new Pizza('Nutella', 4);
