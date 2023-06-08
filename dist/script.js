"use strict";
const button = document.querySelector("button");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
button.addEventListener("click", function () {
    console.log(add(+num1.value, +num2.value, +num3.value));
});
const hobbies = [
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
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const delivery = new Department("Delivery", "d1");
console.log(delivery);
delivery.addEmployee("Lisis");
delivery.addEmployee("Cecile");
delivery.describe();
delivery.printEmployeesInfo();
const orders = new Department("Orders", "d2");
orders.describe();
console.log(orders);
const employee1 = new Department("Employees", "d3");
employee1.addEmployee("Lisis");
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No recent reports");
    }
    set mostRecentReport(value) {
        if (value) {
            this.addReport(value);
        }
        else {
            throw new Error("Please insert valid value!");
        }
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee === "Lisis") {
            return;
        }
        else {
            this.employees.push(employee);
        }
    }
}
const accounting = new AccountingDepartment("ac", []);
accounting.addReport("nothing to state...");
accounting.mostRecentReport = "New report";
accounting.mostRecentReport = "Another New report";
accounting.printReport();
console.log(accounting.mostRecentReport);
