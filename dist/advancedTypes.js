"use strict";
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
