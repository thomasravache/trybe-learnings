class Animal2 {
  constructor(private birthDate: Date) {  }
}

class Bird2 extends Animal2 {
  showBirthDate() {
    // console.log(this.birthDate); // Erro
  }
}

class Animal3 {
  constructor(protected birthDate: Date) {  }
}

class Bird3 extends Animal3 {
  showBirthDate() {
    console.log(this.birthDate); // Ok!
  }
}