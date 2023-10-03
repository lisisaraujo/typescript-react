"use strict";
var _a;
const e1 = {
    name: "Lisis",
    privileges: ["create-search", "delete data", "add data"],
    startDate: new Date(),
};
console.log(e1);
const e12 = {
    name: "Lisis",
    privileges: ["create-search", "delete data", "add data"],
    startDate: new Date(),
};
console.log(e1);
console.log(e12);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Lis", " Araujo");
result.split(" ");
console.log(result);
console.log(add(2, 5));
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log(`Loading cargo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function printVehicleInfo(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(2000);
    }
}
printVehicleInfo(v1);
printVehicleInfo(v2);
function moveAnimal(animal) {
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
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
    age: "Must be a number!",
};
const fecthedUserData = {
    id: "u1",
    name: "Lisis",
    job: {
        title: "CEO",
        description: "My own company",
    },
};
console.log((_a = fecthedUserData === null || fecthedUserData === void 0 ? void 0 : fecthedUserData.job) === null || _a === void 0 ? void 0 : _a.description);
const userInput = undefined;
const userInput2 = "";
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
const storedData2 = userInput2 !== null && userInput2 !== void 0 ? userInput2 : "DEFAULT";
console.log(storedData2);
