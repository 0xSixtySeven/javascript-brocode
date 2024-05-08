
// rest parameters are used to pass a variable number of arguments to a function as an array
// rest parameters bundles separate elements into an array  and uses the spread operator to unpack the elements

const food1 = "pizza";
const food2 = "burger";
const food3 = "salad";
const food4 = "pasta";
const food5 = "chicken";

function openFridge(...foods) { // rest parameter is used to pass a variable number of arguments to a function as an array.
    // here we are creating an array called foods and passing the arguments to it
    console.log(...foods); // spread operator is used to unpack the elements, so that they can be accessed individually
}
openFridge(food1, food2, food3, food4, food5);

function getFood(...foods) {
    return foods
}

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods)

//////////////////////////////////////////////////////////////////
// EXAMPLE 2 - GET THE SUM OF NUMBERS

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3);

console.log(total);

//////////////////////////////////////////////////////////////////
// EXAMPLE 3 - GET THE AVERAGE OF NUMBERS

function getAverage(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total / numbers.length;
}
const average = getAverage(1, 2, 3, 4, 5);
console.log(average);

//////////////////////////////////////////////////////////////////
// EXAMPLE 4

function combineStrings(...strings) {
    return strings.join(" "); // join(" ") means that the strings will be joined with a space between them 
}

const fullName = combineStrings("Mr.", "Sherlock", "Holmes.", "The", "Detective");
console.log(fullName);