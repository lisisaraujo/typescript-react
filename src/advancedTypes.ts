// intersecting types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // we can combine types

const e1: ElevatedEmployee = {
  name: "Lisis",
  privileges: ["create-search", "delete data", "add data"],
  startDate: new Date(),
};

console.log(e1);

// intersecting interfaces: works the same

interface Admin2 {
  name: string;
  privileges: string[];
}

interface Employee2 {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee2 extends Admin2, Employee2 {} // we can combine types

const e12: ElevatedEmployee = {
  name: "Lisis",
  privileges: ["create-search", "delete data", "add data"],
  startDate: new Date(),
};

console.log(e1);
console.log(e12);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//////////////////// type Guards

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add(2, 5));

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Leil", startDate: new Date() });

class Car {
  drive() {
    console.log("diving...");
  }
}

class Truck {
  drive() {
    console.log(`Driving a Truck`);
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function printVehicleInfo(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(2000);
  }
}

printVehicleInfo(v1);
printVehicleInfo(v2);

/////////////// Discriminated Unions //////////////

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log(`moving at speed ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//////// INDEX PROPERTIES ////////////////////

// we create a flexible interface so that we can re-use it for different error containers. The number of properties is irrelevant
interface ErrorContainer {
  // example: email: "Not a valid email" or "username: "Must start with a character""
  [prop: string]: string;
}

// this error bag is build based on the previous interface we created
const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
  age: "Must be a number!",
};
