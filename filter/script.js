// .filter() = creates a new array by filtering out elements



/////// EXAMPLE 1 ///////

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums)

// function isEven(element) {
//     return element % 2 === 0;
// }

// function isOdd(element) {
//     return element % 2 === 1; // can also be ``` return element % 2 !== 1; ```
// }

/////// EXAMPLE 2 ///////


// const ages = [16, 17, 18, 18, 19, 20, 60];
// let newAdults = ages.filter(adults);
// let newMinors = ages.filter(minors);


// console.log(newMinors);

// function adults(element) {
//     return element > 17;
// }

// function minors(element) {
//     return element <= 17;
// }

/////// EXAMPLE 3 ///////

const words = ["Slark", "Ancient Apparition", "Storm Spirit", "Rubick", "Tinker", "Furion", "Shamann"]
let NewWords = words.filter(getShortWords);
let NewWords2 = words.filter(getMidWords);
let NewWords3 = words.filter(getLongWords);


console.log(NewWords);
console.log(NewWords2);
console.log(NewWords3);


function getShortWords(element) {
    return element.length <= 6;
}

function getMidWords(element) {
    return element.length > 6 && element.length <= 8;
}

function getLongWords(element) {
    return element.length > 8;
}

