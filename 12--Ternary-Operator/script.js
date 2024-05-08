// ternary operator = a shortcut to if{} and else{} statements helps to assign a variable based on a condition:
// condition ? expression1 : expression2;
// condition ? codeIfTrue : codeIfFalse;


// // EXAMPLE 1

// let age = 19;

// let message = age >= 18 ? 'You can drink beer!' : 'You can drink juice!'; 
// console.log(message);

// // EXAMPLE 2

// let time = 1;

// let greeting = time < 12 ? 'Good morning!' : time < 18 ? 'Good afternoon!' : 'Good evening!'; // nested ternary operator. 
// console.log(greeting);

// // EXAMPLE 3

// let isStudent = false;

// let assists = isStudent ? 'You are a student' : 'You are not a student';
// console.log(assists);

// EXAMPLE 4

// if the purchase amount is greater than 100, the customer gets a 10% discount, otherwise, the customer gets a 5% discount.

let purchaseAmount = 200;

let discount = purchaseAmount >= 100 ? purchaseAmount * 0.9 : purchaseAmount >= 50 ? purchaseAmount * 0.95 : purchaseAmount;
console.log(`Your total is: $${discount}`);
// we  use ${} to interpolate the variable into the string.