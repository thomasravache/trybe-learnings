class House {
  address: string;
  value: number;
  constructionDate: Date;

  constructor(address: string, value: number, constructionDate: Date) {
    this.address = address;
    this.value = value;
    this.constructionDate = constructionDate;
  }

  mostrarInfo(): void {
    console.log(`${this.address} - R$${this.value} - ${this.constructionDate}`);
  }
}

const minhaHouse = new House('Rua dos alfeneiros, n 4', 10000, new Date('2022-10-02'));

minhaHouse.mostrarInfo();
