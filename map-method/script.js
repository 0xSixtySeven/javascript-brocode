
// .map() method creates a new array with the results of calling a provided function on every element in the calling array. 
// Its very similar to forEach, the difference is that this methods creates a new array.



////////// WITH forEach METHOD //////////

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(square);
// numbers.forEach(display);

// function square(element, index, array) {
//     array[index] = element ** 2;
// }

// function display(element) {
//     console.log(element)
// }


////////// WITH .map METHOD //////////
// EXAMPLE 1

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(squareMap);
// const cubes = numbers.map(cubeMap);

// console.log(squares);
// console.log(cubes)

// function squareMap(element) {
//     return element ** 2;
// }

// function cubeMap(element) {
//     return element ** 3;  // we can also use "return Math.pow(element, x);". This is the same as "return element ** x;"
// }

////////// WITH .map METHOD //////////
// EXAMPLE 2

// const students = ["CaroL", "bruno", "carLA", "denIsSe", "elfO", "faT", "gRoss", "heLl", "inDiGo"];

// const upperCaseStudents = students.map(upperCase);
// const lowerCaseStudents = students.map(lowerCase);
// const capitalizeStudents = students.map(capitalize);

// console.log(lowerCaseStudents);
// console.log(upperCaseStudents);
// console.log(capitalizeStudents);


// function upperCase(element) {
//     return element.toUpperCase();
// }

// function lowerCase(element) {
//     return element.toLowerCase();
// }

// function capitalize(element) {
//     return element.trim().charAt(0).toUpperCase() + element.trim().slice(1).toLowerCase();
// }

////////// WITH .map METHOD //////////
// EXAMPLE 3


// creating a new array is usefull when you want to preserve the initial array and make a new one with the modifications needed.
// In this case the initial array es dates and we create formattedDates as a new array with the code bellow console.log

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}