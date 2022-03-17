class Flute {
  constructor(public name: string) {  }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Musician {
  constructor(public name: string, public flute: Flute = new Flute('minha flauta')) {  }

  public play() {
    this.flute.play();
    console.log(`"${this.name}" é quem está comandando a emissão de melodias`);
  }
}

const musician = new Musician('Thomas');
musician.play();
