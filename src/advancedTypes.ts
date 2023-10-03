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

// Function Overloads: we declare all the possible combinations the function can take in and define what it will return before the function declaration. It serves as a function inftomation
// function information:
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
// function declaration:
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Lis", " Araujo");
result.split(" ");
console.log(result);

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

///// OPTIONAL CHAINING /////

const fecthedUserData = {
  id: "u1",
  name: "Lisis",
  job: {
    title: "CEO",
    description: "My own company",
  },
};

console.log(fecthedUserData?.job?.description); // here we check first if there is a job property in fecthedUserData. If so, we log job. Then we check again if there is "description" inside the job object. If so, we log that too.

///////////NULLISH COALESCING (??) ////
// by writting a double question mark, we check if the data type is NULL OR UNDEFINED. And if so, we define a default value to be replaced. In any other case, we return the actual defined value.

const userInput = undefined;
const userInput2 = "";

const storedData = userInput ?? "DEFAULT"; // is userInput null or undefined? if so, the value is "DEFAULT".
console.log(storedData);
const storedData2 = userInput2 ?? "DEFAULT"; // is sortedData2 null or undefined? if so, the value is "DEFAULT". In this case, even though an empty string is a falsy value, it is still not null or undefined, so the value is the empty string instead of "DEFAULT"
console.log(storedData2);
