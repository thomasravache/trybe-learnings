class Flute {
  constructor(public name: string) {  }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Musician {
  constructor(public name: string, public flute: Flute) {  }

  public play() {
    this.flute.play();
    console.log(`"${this.name}" é quem está comandando a emissão de melodias`);
  }
}

const musician = new Musician('Thomas', new Flute('minha flauta'));
musician.play();
