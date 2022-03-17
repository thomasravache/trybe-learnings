class Flute {
  constructor(public name: string) {  }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Musician {
  private _flute: Flute;

  constructor(public name: string) {
    this._flute = new Flute('minha flauta');
  }

  public play() {
    this._flute.play();
    console.log(`"${this.name}" é quem está comandando a emissão de melodias`);
  }
}

const musician = new Musician('Thomas');
musician.play();
