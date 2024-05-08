
// Arrow functions are a more concise way to write functions in JavaScript. They are written using the => syntax. Arrow functions are anonymous and change the way this binds in functions.
// simple functions that you use only once, you can use arrow functions to write them more concisely.

// const hello = function () {
//     console.log("Hello World!");
// }

// Arrow function
const hello = (name, age) => {
    console.log(`Hello ${name}, happy birthday you are ${age} now.`)
};
hello("Bro", 12);

////// EXAMPLE 2

setTimeout(function () {  // setTimeout, to make a function delay until its run, (function, time(milliseconds))
    console.log("Hello");
}, 3000);

setTimeout(() => console.log("Hello"), 2000)

///////// EXAMPLE 3

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// .map method creates a new array with the results of calling a provided function on every element in the calling array.
const squares = numbers.map((element) => Math.pow(element, 2))  // i want to modify the elements inside the array 'numbers'

// .filter() method creates a new array with all elements that pass the test implemented by the provided function.
const evenNums = numbers.filter((element) => element % 2 === 0)  // i want to modify the elements inside the array 'numbers'

// .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const average = numbers.reduce((accumulator, element) => {
    return accumulator + element / numbers.length
});


console.log(evenNums)
console.log(average) 