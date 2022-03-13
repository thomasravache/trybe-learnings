interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  public log(param: string): void {
    console.log('ConsoleLogger1', param);
  }
}

class ConsoleLogger2 implements Logger {
  public log(param: string): void {
    console.log('ConsoleLogger2', param);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: ConsoleLogger) {

  }

  save(key: string, value: string): void {
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
