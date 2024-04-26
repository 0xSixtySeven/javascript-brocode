// .reduce() method is used to reduce the array to a single value by executing a provided function for each element of the array. 
// The return value of the function is stored in an accumulator (result/total).
// The reduce() method executes the provided function for each value of the array (from left-to-right).


////// EXAMPLE 1 //////

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum)

console.log(`$ ${total.toFixed(2)}`) // $105.00 We use .toFixed(2) to round the number to 2 decimal places.

function sum(accumulator, element) { // accumulator is the total value, element is the current value
    return accumulator + element;
}

//// EXPLANATION ACCUMULATOR AND ELEMENT ////

// function sum(previousIndex, nextIndex) {
//     return previousIndex + nextIndex;
// }
// function sum(0, 5) { // 0 is the previousIndex, 5 is the nextIndex
//     return 0 + 5;
// }
// function sum(5, 30) { // 5 is the previousIndex, 30 is the nextIndex
//     return 5 + 30;
// }
// // its like a loop that goes through the array and adds the numbers together.
// // adds two numbers at a time, then adds the result to the next number in the array.


////// EXAMPLE 2 //////

const grades = [5, 8, 4, 10, 15, 19, 20, 11, 10, 11];
const averageGrades = grades.reduce(getMin)

console.log(`The average grades from classroom 14 is: ${averageGrades}`)

function average(accumulator, element) {
    return accumulator + element / grades.length;
}

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element)
}