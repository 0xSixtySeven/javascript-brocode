


// DESTRUCTURING = extracting values from arrays, or properties from objects, into distinct variables
// [] to perform array destructuring
// {} to perform object destructuring


// ------------- EXAMPLE 1 -------------
// SWAP THE VALUE OF THE TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];
//  this will swap the value of the variables a and b. 
// a = 2, b = 1 


console.log(a);
console.log(b);


// ------------- EXAMPLE 2 -------------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ['red', 'blue', 'green', 'yellow'];

[colors[0], colors[3]] = [colors[3], colors[0]];
// this will swap the first and last element in the colors array


console.log(colors);

// ------------- EXAMPLE 3 -------------
// ASSIGNING ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// the ... operator is used to assign the rest of the elements to a new array called extraColors
// this will assign the first 3 elements of the colors array to the variables firstColor, secondColor and thirdColor
// we create the variables firstColor, secondColor and thirdColor and assign the first, second and third element of the colors array to them


console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// ------------- EXAMPLE 4 -------------
// EXTRACT VALUES FROM AN OBJECT

const person1 = {
    firstName: 'Piston',
    lastName: 'Port',
    age: 25,
    job: "developer"
}

const person2 = {
    firstName: 'Fernando',
    lastName: 'Alonso',
    age: 42,
}

const { firstName, lastName, age, job = "Unemployed" } = person2;
// we can set a default value for the job property in case it doesn't exist in the object.
// job = "Unemployed" means that if the job property doesn't exist in the object, the job variable will be assigned the value "Unemployed"

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ------------- EXAMPLE 5 -------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function printPerson({ firstName, lastName, age, job = "Unemployed" }) {
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

printPerson(person2)