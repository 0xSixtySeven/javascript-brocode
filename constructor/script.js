////////////////////////////////////////////
/////////////// CONSTRUCTOR ////////////////
////////////////////////////////////////////

// // constructor = special method for defining the properties and methods of an object
// // use 1 object to create multiple objects with the same properties using the constructor function
// // constructor name should start with a capital letter
// // constructor function is a blueprint for creating objects


// function Car(make, model, year, color) {
//     this.make = make, 
//         this.model = model,
//         this.year = year,
//         this.color = color //  we use this. to refer to the current object we are creating 
//     this.modelDrive = function () { console.log(`You drive the ${this.model}`) }
// }

// // this way we can create multiple objects with the same properties
// const car1 = new Car('Toyota', 'Camry', 2020, 'black');
// const car2 = new Car('Honda', 'Civic', 2019, 'white');
// const car3 = new Car('Ford', 'Fiesta', 2018, 'red');

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2);
// console.log(car3);

// car1.modelDrive();
// car2.modelDrive();
// car3.modelDrive();


////////////////////////////////////////////
////////////////// CLASS ///////////////////
////////////////////////////////////////////

// // classes are a new way to create objects in javascript
// // classes are a blueprint for creating objects
// // the class include the constructor method

// const salesTax = 0.10;

// class Products {
//     constructor(name, price, category) {
//         this.name = name;
//         this.price = price;
//         this.category = category;
//     }
//     // if its outside the CONSTRUCTOR we dont need to use "this." for the function
//     displayProduct() {
//         console.log(`The product is ${this.name} and the price is $${this.price.toFixed(2)}, category is ${this.category}`);
//     }
//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax)
//     }
// }


// const product1 = new Products('Laptop', 1000, 'Electronics');
// const product2 = new Products('Shirt', 20, 'Clothing');
// const product3 = new Products('Book', 10, 'Books');

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();


// // This is how we call a method inside an object
// const total1 = product1.calculateTotal(salesTax)
// console.log(`Total price (with tax): $${total1.toFixed(2)}`)

// const total2 = product2.calculateTotal(salesTax)
// console.log(`Total price (with tax): $${total2.toFixed(2)}`)

// const total3 = product3.calculateTotal(salesTax)
// console.log(`Total price (with tax): $${total3.toFixed(2)}`)




////////////////////////////////////////////
////////////////// STATIC //////////////////
////////////////////////////////////////////


// static methods are called on the class itself, not on the object
// static methods are used to create utility functions that are not tied to a particular object


////////  EXAMPLE 1 ////////


// class MathUtil {
//     static PI = 3.14159;
//     // static method
//     static getDiameter(radius) {
//         return radius * 2;
//     }
//     static getCircumference(radius) {
//         return radius * 2 * this.PI;
//     }
//     static getArea(radius) {
//         return radius * radius * this.PI;
//     }
// }
// // I DONT NEED TO CREATE AN OBJECT TO CREATE THIS PROPERTY
// // WITH STATIC I DONT NEED TO CREATE AN OBJECT TO ACCESS THIS PROPERTY LIKE WE DID BEFORE:
// // THE EXAMPLE BELOW IS THE WAY WE RIGHT CLASSES WITHOUT STATIC
// // const MathUtil1 = new MathUtil();

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

////////  EXAMPLE 2 ////////

class User {
    static userCount = 0; // static property that keeping track of the amount of users we create

    constructor(username) {
        this.username = username;
        // this way we can count the number of users created with the constructor
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online.`)
    }

    sayHello() {
        console.log(`Hello ${this.username}`)
    }
}

const user1 = new User('caca');
const user2 = new User('coco');
const user3 = new User('cucu');


console.log(user1.username);
// console.log(user1.userCount); // this way we get undefined because userCount is a static property, we need to call it from the class: User
console.log(User.userCount); // this way we get the correct number of users

user1.sayHello()
user2.sayHello()
user3.sayHello()

User.getUserCount()

