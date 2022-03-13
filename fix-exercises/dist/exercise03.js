"use strict";
class ConsoleLogger {
    log(param) {
        console.log('ConsoleLogger1', param);
    }
}
class ConsoleLogger2 {
    log(param) {
        console.log('ConsoleLogger2', param);
    }
}
class ExampleDatabase {
    constructor(logger) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`${key} - ${value}`);
    }
}
const objLogger1 = new ConsoleLogger();
const objLogger2 = new ConsoleLogger2();
const objDb1 = new ExampleDatabase(objLogger1);
const objDb2 = new ExampleDatabase(objLogger2);
// const objDb3 = new ExampleDatabase();
objDb1.save('chave', 'salvando');
objDb2.save('chave2', 'salvando2');
// objDb3.save('maluco', 'beleza');
