"use strict";
let user1;
user1 = {
    name: "Lisis",
    greet(phrase) {
        console.log(`${phrase} ${this.name} `);
    },
};
user1.greet(`Hey there, I am`);
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name} `);
    }
}
user1 = new Person("Lisis");
console.log(user1);
