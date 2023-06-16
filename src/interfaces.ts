////////////////// INTERFACES ////////////
// interfaces allows us to define the structure of an OBJECT. It's different from Classes, that serves as a blueprint of the objects.
// we don't assign values to the properties, only the types.

interface Greetable {
  name: string;
  //   age: number;

  greet(phrase: string): void;
}

// here we declared user1 to use the Person interface. This means, that the object structure that I will define user1 has to follow exactly the Person interface structure that I defined previously.
let user1: Greetable;

user1 = {
  name: "Lisis",
  //   age: 29,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name} `);
  },
};

user1.greet(`Hey there, I am`);

// interfaces can be implemented by Classes. This means that when a class is created that implements from an interface, the structure we declared in the interface HAS TO BE satisfied inside the class.
// The Class nevertheless, can also have other properties added to it, that are NOT part of our interface.

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name} `);
  }
}

user1 = new Person("Lisis");
console.log(user1);
