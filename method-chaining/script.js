// Method chaining = calling multiple methods on the same object in a sequence, one after the other.


// NO METHOD CHAINING

// const prompt = require('prompt-sync')();

let username = prompt('Enter your username: ');

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

let finalUsername = letter + extraChars;

console.log(finalUsername);

// WITH METHOD CHAINING

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)