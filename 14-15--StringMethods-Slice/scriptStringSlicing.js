// string slicing: string.slice(start, end)
// creating a substring from a portion of another string.

const fullName = "Miguel de los Rios";
// console.log(fullName.length);



// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7, fullName.length)


let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// here we use + 1 to avoid the space in the beginning of the last name.

console.log(firstName);
console.log(lastName);

//////// EXERCISE //////////

const email = "migueldlr88@gmail.com";

let userName = email.slice(0, email.indexOf("@"));

let domain = email.slice(email.indexOf("@"));

console.log(userName);
console.log(domain);


