

// constructor = special method for defining the properties and methods of an object
// use 1 object to create multiple objects with the same properties using the constructor function
// constructor name should start with a capital letter
// constructor function is a blueprint for creating objects


function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color //  we use this. to refer to the current object we are creating 
    this.modelDrive = function () { console.log(`You drive the ${this.model}`) }
}

// this way we can create multiple objects with the same properties
const car1 = new Car('Toyota', 'Camry', 2020, 'black');
const car2 = new Car('Honda', 'Civic', 2019, 'white');
const car3 = new Car('Ford', 'Fiesta', 2018, 'red');

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2);
console.log(car3);

car1.modelDrive();
car2.modelDrive();
car3.modelDrive();