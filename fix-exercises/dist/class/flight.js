"use strict";
class Flight {
    constructor(ticketNumber, passengerName, from, to) {
        this.ticketNumber = ticketNumber;
        this.passengerName = passengerName;
        this.from = from;
        this.to = to;
    }
    create() {
        console.log(`Voo criado com sucesso. \n De: ${this.from} \n Para: ${this.to}`);
    }
    info() {
        console.log(`
    Número do ticket: ${this.ticketNumber}\n
    Nome do passageiro: ${this.passengerName}\n
    De: ${this.from}\n
    Para: ${this.to}`);
    }
}
const flight = new Flight(1234, 'Thomas', 'Brasil', 'Alemanha');
flight.create();
flight.info();
