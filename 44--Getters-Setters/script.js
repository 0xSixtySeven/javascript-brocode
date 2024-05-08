
// getter = special method that makes a property readable
//             is a function that returns the value of an object's private variable to the user without the user directly accessing the private variable.

// setter = special method that makes a property writable
//             is a function that sets the value of an object's private variable to the value passed into the setter.

// validate and modify a value when reading or writing a property


/////// EXAMPLE 1 ////////

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Setter
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth; // we use underscore(_) to indicate that this is a private variable
        } else {
            console.log("Width must be positive");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight; // we use underscore(_) to indicate that this is a private variable
        } else {
            console.log("Height must be positive");
        }
    }
    // Setters are writable only, its not readable. So we use Getters

    get width() {
        return `${this._width.toFixed(1)}`;
    }

    get height() {
        return `${this._height.toFixed(1)}`;
    }

    // we use this. to access a property that not necessarily exists
    get area() {
        return `${(this._width * this._height).toFixed(1)}`;
    }

}

const rectangle = new Rectangle(4, 7);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);

console.log(rectangle.area); // this is how we call a property that doesnt exist in the constructor


/////// EXAMPLE 2 ////////

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName; // we use underscore(_) to indicate that this is a private variable
        }
        else {
            console.error("Invalid input, write your first name!");
        }
    }

    get firstName() {
        return `His name is ${this._firstName}`
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName; // we use underscore(_) to indicate that this is a private variable
        }
        else {
            console.error("You need to input the last name with characters!");
        }
    }

    get lastName() {

        return `His last name is ${this._lastName}`
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) { // as age is a "number" we this need to put .length as in a "string"
            this._age = newAge;
        }
        else {
            console.error("You need to input your age in numbers!")
        }
    }

    get age() { // if we dont use a GETTER its only writable and not readable.
        return `His age is ${this._age}`
    }

    // LETS CALL THE FULL NAME

    get fullName() {
        return this._firstName + " " + this._lastName
    }

}
const person = new Person("Miguel", "de los Rios", 35)
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);