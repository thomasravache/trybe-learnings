class Employee {
  private static employeeCount = 0;

  constructor(public name: string) {
    Employee.addEmployee();
  }

  private static addEmployee() {
    this.employeeCount += 1;
  }

  static get employees() {
    return this.employeeCount;
  }
}

console.log(Employee.employees);
const employee1 = new Employee('Ronaldo');
console.log(Employee.employees);
const employee2 = new Employee('Jubileu');
console.log(Employee.employees);
