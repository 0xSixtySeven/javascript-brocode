// Spread operator is used to split up array elements or object properties.
// It separates the array elements or object properties.

// Example 1 - spread operator with arrays
let numbers = [1, 2, 3, 4, 5];

let max = Math.max(...numbers); // Math.max returns the largest number in the array. But, it doesn't accept an array as an argument. So, we use the spread operator to pass the array elements as arguments.
let min = Math.min(...numbers); // Math.min returns the smallest number in the array. But, it doesn't accept an array as an argument. So, we use the spread operator to pass the array elements as arguments.

console.log(max);
console.log(min);

// Example 2 - spread operator with strings

let username = "Miguel de los Rios"
let characters = [...username];
console.log(characters);

// Example 3 

let fruits = ["apple", "banana", "mango"];
let newFruits = [...fruits]
// this generates a shallow copy of the fruits array and stores it in the newFruits array. So, any changes made to the newFruits array will not affect the fruits array.


console.log(newFruits);

// Example 4
let fruitss = ["apple", "banana", "mango"];
let vegetables = ["potato", "tomato", "onion"];
let foods = [...fruitss, ...vegetables]; // combining two arrays using the spread operator and storing the result in the foods array. 
// The foods array will contain all the elements of the fruitss array followed by all the elements of the vegetables array.

console.log(foods);