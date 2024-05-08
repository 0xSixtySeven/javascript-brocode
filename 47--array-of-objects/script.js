

const fruits = [{ name: 'apple', color: 'red', calories: 56 },
{ name: 'banana', color: 'yellow', calories: 75 },
{ name: 'grape', color: 'purple', calories: 65 },
{ name: 'orange', color: 'orange', calories: 45 },
{ name: 'pear', color: 'green', calories: 57 },
];

// ----------- .push ------------
// fruits.push({ name: 'kiwi', color: 'green', calories: 61 })
// With .push we add this properties to the fruits array

// ----------- .pop ------------
// fruits.pop(); // .pop  remove the last element in the array 
// With .pop we exclude an index in the array

// ----------- .splice ------------
// fruits.splice(1, 2)
// with .splice we remove an index in the array
// .splice remove the elements in the array from the index 1 to 2

// ----------- forEach() ------------

// fruits.forEach((fruit) => {
//     console.log(fruit)
//     // we can use fruit.name, fruit.color, fruit.calories to print the properties of the object
// })
// // this will print all the elements in the array which are objects with properties
// // Will return every object in the array with its properties

// ----------- map() ------------
// map() is used to create a new array with the results of calling a function for every array element

const fruitNames = fruits.map(fruit => fruit.name)
// fruit is a parameter that will be used to access the properties of the objects in the array fruits and then with .name we access the property name of the object fruit inside the array fruits
// fruitNames will return an array with the names of the fruits  
// fruits.map lets us create a new array with the names of the fruits
// (fruit => fruit.name) is a function that will return the name of the fruit

const fruitColors = fruits.map(fruit => fruit.color)

const fruitCalories = fruits.map(fruit => fruit.calories)



console.log(fruitNames)
console.log(fruitColors)
console.log(fruitCalories)

// ----------- filter() ------------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
console.log(yellowFruits)

const minus60Calories = fruits.filter(fruit => fruit.calories < 60)
console.log(minus60Calories)

// ----------- reduce() ------------
// return a single value, in this case one of these objects


// WE CAN CHANGE THE (accumulator, element) to what ever word we want
const maxFruit = fruits.reduce((accumulator, element) => element.calories > accumulator.calories ? element : accumulator);
// This will check each object inside fruits and if the calories of the previews fruit is bigger than the next one it will pick the previews and discard the next one, if the next one is bigger it will pick the next one and discard the previews one until the end of the array
console.log(maxFruit); //  if we want only the calories and not the whole object we can use (maxFruit.calories)


const minFruit = fruits.reduce((accumulator, element) => element.calories < accumulator.calories ? element : accumulator);
console.log(minFruit);

