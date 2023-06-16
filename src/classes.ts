// const button = document.querySelector("button")!;
// const num1 = document.getElementById("num1")! as HTMLInputElement;
// const num2 = document.getElementById("num2")! as HTMLInputElement;
// const num3 = document.getElementById("num3")! as HTMLInputElement;

// function add(num1: number, num2: number, num3: number) {
//   return num1 + num2 + num3;
// }

// button.addEventListener("click", function () {
//   console.log(add(+num1.value, +num2.value, +num3.value));
// });

// const hobbies: string[] = [
//   "hiking",
//   "swimming",
//   "dancing",
//   "reading",
//   "running",
// ];

// const person = {
//   firstName: "Lisis",
//   age: 29,
//   petName: "Baco",
// };

// const [hobbie1, hobbie2, ...restOfHobbies] = hobbies;
// console.log(hobbie1, hobbie2);
// console.log(restOfHobbies);

// const { firstName: userName, age } = person;
// console.log(userName, age);

// creating new classes

abstract class Department {
  // public name: string;
  // private employees: string[] = []; // by adding "private", we make this property only accessible/changeble through the established method  declared withing this class declaration.
  // private id: string;
  protected employees: string[] = []; // changing from private to protected allows us to have access to this property inside other classes that inherited this one, but still makes it not accessible from outside these classes.
  static fiscalYear = 2023;
  static createEmployee(name: string) {
    return { name: name };
  }
  constructor(public name: string, protected id: string) {
    console.log(Department.fiscalYear); // this is how you access static properties from INSIDE the class
  }

  abstract describe(this: Department): void; // we have to declare this method like this, because it's functionality/return value will be defined inside the classes that are inherited by this one.

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// const delivery = new Department("Delivery", "d1"); // when we use the Department class, the constructor function is called and it takes a string as a parameter.
// console.log(delivery);

// delivery.addEmployee("Lisis");
// delivery.addEmployee("Cecile");

// delivery.describe();
// delivery.printEmployeesInfo();

// const orders = new Department("Orders", "d2");
// orders.describe();
// console.log(orders);

// const ordersCopy = { name: "Dummy", describe: orders.describe };
// ordersCopy.describe();

// const employee1 = new Department("Employees", "d3");
// employee1.addEmployee("Lisis");

// inheritance: create a new class that inherits all the properties from another already existing class and new properties and methods that can be added to the new class

class AccountingDepartment extends Department {
  private lastReport: string;

  describe() {
    console.log("IT department - accounting " + this.id);
  }

  public get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No recent reports");
  }

  public set mostRecentReport(value: string) {
    if (value) {
      this.addReport(value);
    } else {
      throw new Error("Please insert valid value!");
    }
  }

  constructor(id: string, private reports: string[]) {
    super("id", "02"); // super() calls the constructor of the base class, in this case Department. It has to be called before defining a new methods for this class.
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }

  addEmployee(employee: string) {
    if (employee === "Lisis") {
      return;
    } else {
      this.employees.push(employee);
    }
  }
}

/////////////////////////////// getters and setters

// get makes the reading of a private property possible from outside the class definition
// set makes the setting of a new property possible from outside the class definition

const accounting = new AccountingDepartment("ac", []);

accounting.addReport("nothing to state...");
accounting.mostRecentReport = "New report"; // setting
accounting.mostRecentReport = "Another New report";
accounting.printReport();
accounting.describe();
// accounting.addEmployee("Lisis");
// accounting.addEmployee("Manu");
// accounting.printEmployeesInfo();
// console.log(accounting.mostRecentReport); //getting - not working(?)

///////////////////////// static methods and properties:
// with static methods we can add methods to our classes that don't need the initialization of the class with the New keyword before. We can access it directly by dot noation on the object, like so:

const newEmployee = Department.createEmployee("Jasmeen");
console.log(newEmployee, Department.fiscalYear);

/////////////////////////// ABSTRACT CLASSES ///////////////////
// with adding the keyword "abstract" in front of any method inside our classes, we allow these methods to be overriten by other classes that is build on this main class. For this to be able, we need to turn the main Class into abstract as well, which then allows it to only be initiated by the inherited classes.
// the "abstract" method MUST then be implemented in any other initialized class that is based on the abstract class
