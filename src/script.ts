const button = document.querySelector("button")!;
const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const num3 = document.getElementById("num3")! as HTMLInputElement;

function add(num1: number, num2: number, num3: number) {
  return num1 + num2 + num3;
}

button.addEventListener("click", function () {
  console.log(add(+num1.value, +num2.value, +num3.value));
});

const hobbies: string[] = [
  "hiking",
  "swimming",
  "dancing",
  "reading",
  "running",
];

const person = {
  firstName: "Lisis",
  age: 29,
  petName: "Baco",
};

const [hobbie1, hobbie2, ...restOfHobbies] = hobbies;
console.log(hobbie1, hobbie2);
console.log(restOfHobbies);

const { firstName: userName, age } = person;
console.log(userName, age);

// creating new classes

class Department {
  // public name: string;
  private employees: string[] = []; // by adding "private", we make this property only accessible/changeble through the established method  declared withing this class declaration.
  // private id: string;

  constructor(public name: string, private id: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const delivery = new Department("Delivery", "d1"); // when we use the Department class, the constructor function is called and it takes a string as a parameter.
console.log(delivery);

delivery.addEmployee("Lisis");
delivery.addEmployee("Cecile");

delivery.describe();
delivery.printEmployeesInfo();

const orders = new Department("Orders", "d2");
orders.describe();
console.log(orders);

// const ordersCopy = { name: "Dummy", describe: orders.describe };
// ordersCopy.describe();

const employee1 = new Department("Employees", "d3");
employee1.addEmployee("Lisis");
