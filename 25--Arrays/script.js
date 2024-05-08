// Arrays are a variable type that can store multiple values. They are created by using square brackets and separating the values with commas.
// Arrays can store multiple data types, including strings, numbers, and booleans.

let fruits = ['apple', 'banana', 'orange'];
// fruits[0] = 'pear'; // Change the first element in the array to 'pear'. The first element in an array is at index 0. This will change apple to pear.
// fruits.push('kiwi'); // Add 'kiwi' to the end of the array. The push() method adds an element to the end of an array.
// fruits.pop(); // Remove the last element from the array. The pop() method removes the last element from an array.
// fruits.unshift('mango'); // Add 'mango' to the beginning of the array. The unshift() method adds an element to the beginning of an array.
// fruits.shift(); // Remove the first element from the array. The shift() method removes the first element from an array.
// fruits.splice(1, 1, 'grape'); // Remove one element at index 1 and add 'grape' in its place. The splice() method can be used to add or remove elements from an array.
// fruits.slice(1, 3); // Return a new array with elements from index 1 to index 3. The slice() method returns a shallow copy of a portion of an array into a new array object.
// fruits.concat(['peach', 'cherry']); // Combine the fruits array with a new array containing 'peach' and 'cherry'. The concat() method is used to merge two or more arrays.
// fruits.reverse(); // Reverse the order of the elements in the array. The reverse() method reverses the order of the elements in an array.
// fruits.sort(); // Sort the elements in the array alphabetically. The sort() method sorts the elements of an array in place and returns the sorted array.
console.log(fruits);

// Get the number of elements in the array. The length property returns the number of elements in an array.
let numberOfFruits = fruits.length;
console.log(numberOfFruits);

let index = fruits.indexOf('banana'); // Get the index of 'banana' in the array. The indexOf() method returns the first index at which a given element can be found in the array.
console.log(index); //  if it returns -1, it means the element is not in the array.


// LOOPING THROUGH AN ARRAY

// if we want to list all the elements in the array, we can use a for loop to iterate over the elements and print them to the console.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// THIS IS ANOTHER WAY TO LOOP THROUGH AN ARRAY USING A FOR...OF LOOP INSTEAD OF A FOR LOOP. 
// The for...of loop is a modern way to iterate over elements in an array. It is more concise than a traditional for loop and does not require an index variable.
for (let fruit of fruits) {
    console.log(fruit);
}


