
// this = refers to the object that is executing the current function.
// the object depends on the context in which the function is called.

const person1 = {
    name: 'Miguel',
    age: 35,
    greet: function () { console.log('Hello, my name is ' + this.name) },
    currentAge: function () { console.log(`${this.name} is your age ${this.age}?`) }
}

const person2 = {
    name: 'Carla',
    age: 34,
    greet: function () { console.log('Hello, my name is ' + this.name) },
    currentAge: function () { console.log(`${this.name} is your age ${this.age}?`) }
}

person1.greet()  // object.method() structure to call a method(function) inside the object(person1)
person1.currentAge()

person2.greet()  // object.method() structure to call a method(function) inside the object(person1)
person2.currentAge()