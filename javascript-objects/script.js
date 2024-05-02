
//                              object:
//                              A collection of related properties and/or methods that represent a thing or an idea in the real world (e.g. a car, a person, a bank account, etc.)

// objects are created using curly braces {}
// objects can have properties and methods
// properties = values associated with an object
// methods = functions associated with an object

const driver = { // Object 1
    firstName: 'Ayrton', // This is a property of the object driver with the value 'Ayrton'.
    lastName: 'Senna',
    championships: 3,
    isAlive: false,
    teams: ['Toleman', 'Lotus', 'McLaren'],
    // Methods:
    sayHello: function () { console.log("Hi, Im Ayrton!") },
    drivingStyle: () => console.log("Aggressive"), // ARROW METHODdd

}

const driver2 = { // Object 2
    firstName: 'Max',
    lastName: 'Verstappen',
    championships: 3,
    isAlive: true,
    teams: ['Toro Rosso', 'Red Bull'],
    sayHello: () => console.log("Hi, Im Verstappening!"), // this is the ARROW method, its the same as sayHello from the object driver
    drivingStyle: () => console.log("Sennalike Aggressive"),

}

// This is the way to call the METHOD(sayHello) inside an object (driver).
driver.sayHello();
// This is the way to call the METHOD(sayHello) inside an object (driver2).
driver2.sayHello();

driver.drivingStyle();
driver2.drivingStyle();



// This is the way to access the PROPERTIES of an object.

console.log(driver.firstName);
console.log(driver.lastName);
console.log(driver.teams);
console.log(driver.isAlive);


console.log(driver2.firstName);
console.log(driver2.lastName);
console.log(driver2.teams);
console.log(driver2.isAlive);
