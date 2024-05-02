// super keyword 
// super keyword is used to access and call functions on an object's parent.
// The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals.

// similar to this. super is used to access the parent's properties and methods from the child's constructor.
// this. is used to access the child's properties and methods from the child's constructor.

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed} km/h.`)
    }

}

class Dragon extends Animal {
    constructor(name, age, flySpeed) { // WE ARE REPEATING 'name' and 'age' in all 3 child classes, so we put them in the parent constructor this way we can call it from the child.
        super(name, age)
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log(`The ${this.name} can fly.`)
        super.move(this.flySpeed)
    }
}

class Dog extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age)
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`The ${this.name} can run.`)
        super.move(this.runSpeed)
    }
}

class Puma extends Animal {
    constructor(name, age, sprintSpeed) {
        super(name, age)
        this.sprintSpeed = sprintSpeed;
    }
    sprint() {
        console.log(`The ${this.name} can sprint.`)
        super.move(this.sprintSpeed)
    }

}

const dragon = new Dragon('Il Dragonni', 100, 100);
const dog = new Dog('Doggo', 10, 10);
const puma = new Puma('Pumma', 5, 50);

// console.log(dragon.name)
// console.log(dragon.age)
// console.log(dragon.runSpeed)

// console.log(dog.name)
// console.log(dog.age)
// console.log(dog.swimSpeed)

// console.log(puma.name)
// console.log(puma.age)
// console.log(puma.sprintSpeed)

dragon.fly() // this is how we call a function/method inside a class
