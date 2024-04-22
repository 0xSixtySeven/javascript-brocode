// type conversion: changing from strings, numbers, booleans, objects, etc.

let age = window.prompt('What is your age?'); //  The age that is submitted is a string.
age = Number(age); // convert string to number. 
age += 1;

console.log(age, typeof age); // typeof shows the type of the variable.


// 4 examples how it affects the convertion of the type
// UNCOMMENT THE BELOW COMMENTS TO SEE IN THE CONSOLE HOW IT AFFECTS EACH TYPE TO DIFFERENT VALUES
// WHEN YOU SUBMIT A NUMBER AS AN INPUT IN A PROMPT OR <INPUT> ITS CONSIDERED A "STRING", SO WE NEED TO CHANGE IT TO A "NUMBER" IF WE WANT TO DO MATH. 

let x = "Wasdasd";
let y = "Wasdasd";
let z = "Wasdasd";
let a = "Wasdasd";

// let x = 15;
// let y = 15;
// let z = 15;
// let a = 15;

// let x = "";
// let y = "";
// let z = "";
// let a = "";

// let x;
// let y;
// let z;
// let a;

x = Number(x);
y = String(y);
z = Boolean(z);
a = Object(a)

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(a, typeof a);