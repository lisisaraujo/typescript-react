"use strict";
class Department {
    static createEmployee(name) {
        return { name: name };
    }
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023;
class AccountingDepartment extends Department {
    describe() {
        console.log("IT department - accounting " + this.id);
    }
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
        super("id", "02");
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
accounting.describe();
const newEmployee = Department.createEmployee("Jasmeen");
console.log(newEmployee, Department.fiscalYear);
