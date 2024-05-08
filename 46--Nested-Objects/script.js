// NESTED OBJECTS
//          objects inside other objects.
//          Allows you to represent more complex data structures 
//          Child object is enclosed by a parent object.

// Example  Person{Address{City, State, Zip}, Phone{Home{}, Work{}, Cell{}}, }

// ---------- EXAMPLE 1 ------------

const person = {

    fullName: 'Panchita Lucrecia',
    age: 7,
    isDoggo: true,
    hobbies: ['chasing cars', 'barking', 'eating'],
    address: {
        country: 'Peru',
        district: 'Lima',
        zip: 94103
    }
}

console.log(person.fullName)
console.log(person.age)
console.log(person.isDoggo)

// if we want to access the country property of the address object, we can use the dot notation.
console.log(person.address.country)

// if we want to access the last element of the hobbies array, if we delete "[]" it will return the whole array.
console.log(person.hobbies[2])

// If we want to loop through the address object to get each property and value:
for (const property in person.address) {
    console.log(person.address[property])
}

// ---------- EXAMPLE 2 ------------
//  WITH CLASSES



class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
        // we call the constructor of the Address class and pass the address array. 
        // ... is the spread operator, it allows us to pass an array as individual arguments.
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person('Panchita Lucrecia', 7, 'Av. Los Pinos 123', 'Lima', 'Peru');

const person2 = new Person('Wasdasd', 102, 'Cadiz 100', 'BS', 'Argentina')

const person3 = new Person('Alberto', 40, 'Av. Los Pinos 123', 'Piura', 'Peru');

console.log(person3.address.city)