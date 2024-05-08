
// inheritance allows us to create a new class based on an existing class and inherit all the properties and methods of the existing class. 
// The new class is called a subclass or child class, and the existing class is called a superclass or parent class.


class Animal { // PARENT
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}  // we can use 'this' to refer to the object that is created from the class.

// with 'extends' we can use the methods of 'Animal' class 
class Rabbit extends Animal {  // CHILD
    name = 'Rabbit';
    jump() {
        console.log(`This ${this.name} is jumping`); // we can create new methods in the subclass

    }
}

class Snake extends Animal { // CHILD
    name = 'Snake';
}

class Dog extends Animal { // CHILD
    name = 'Dog';
    bark() {
        console.log(`This ${this.name} is barking`);
    }
}

const rabbit = new Rabbit(); // we create a new object from the class 'Rabbit' and store it in the variable 'rabbit' 
const snake = new Snake();
const dog = new Dog();

console.log(rabbit.alive); // we use console.log because its a boolean
rabbit.eat(); // we dont use console.log because its a method. 
rabbit.sleep();
rabbit.jump();

console.log(dog.alive); // we use console.log because its a boolean
dog.eat(); // we dont use console.log because its a method. 
dog.sleep();
// method inside the child class Dog 
dog.bark();  