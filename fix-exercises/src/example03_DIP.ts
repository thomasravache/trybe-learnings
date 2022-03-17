interface Instrument {
  name: string;
  play(): void;
}

class Flute implements Instrument {
  constructor(public name: string) {  }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) {  }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) {  }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class Musician {
  constructor(public name: string, public instrument: Instrument = new Flute('flautinha')) {  }

  public play() {
    this.instrument.play();
    console.log(`"${this.name}" é quem está comandando a emissão dos sons`);
  }
}

const musician = new Musician('Thomas');
const musician2 = new Musician('Zé', new Drums('baterinha'));
const musician3 = new Musician('Arlindo', new Guitar('Stratocaster'));
musician.play();
musician2.play();
musician3.play();
