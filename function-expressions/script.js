/////////// function expressions ///////////

// Are a way to define a function in JavaScript without giving it a name.
// This is useful when you want to create a function that is only used once.
// The function expression is defined and then immediately invoked.
// This is called an immediately invoked function expression (IIFE).

// function expression are different from function declarations in that they are not hoisted.
// This means that they are not accessible before they are defined.



// THIS IS AN EXAMPLE OF A FUNCTION DECLARATION

function hello() {
    console.log("Hello, World!");
}

// THIS IS AN EXAMPLE OF FUNCTION EXPRESSIONS

const hello = function () {
    console.log("Hello, World!");
}

hello(); // to call the function we use the function name followed by parentheses. 
setTimeout(hello, 3000) // 3000 is in milliseconds. This will call the function after 3 seconds.



// setTimeout is a built -in function that takes two arguments.
// The first argument is a function and the second argument is a number.
// The function is called after the number of milliseconds specified in the second argument.

setTimeout(function () { // this is an anonymous function because it does not have a name. 
    console.log("Hello");
}, 5000);

////// Example 2 ////////

// FUNCTION DECLARATION EXAMPLE ////
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squares = numbers.map(square)

// console.log(squares);

// function square(element) {
//     return element ** 2;
// }


////// FUNCTION EXPRESSION EXAMPLE //////

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map(function (element) {
    return element ** 2
});
console.log(squares);

// FUNCTION EXPRESSIONS ARE ONLY USED ONCE AND DOESNT NEED A NAME.


function cube(element) {
    return element ** 3;
}

// FROM DECLARATION(TOP) TO EXPRESSION(BOT)

const cubes = numbers.map(function (element) { // WE USED .map to create an array of the elements to cube
    return element ** 3;
});
console.log(cubes);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNums = numbers.filter(function (element) { // WE USED .filter to only show the odd numbers
    return element % 2 !== 0;
}); // we use .filter to return only the oddNumbers

console.log(oddNums);


// Now we will sum all the elements in the array

const totalSum = numbers.reduce(function (accumulator, element) {  // WE USED .REDUCE to sum all the elements
    return accumulator + element;
});
console.log(totalSum);