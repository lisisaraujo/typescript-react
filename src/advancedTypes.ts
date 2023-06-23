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
printVehicleInfo(v2)
