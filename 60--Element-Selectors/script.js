/////////////////////////////////////////
//////////  Element Selectors  //////////
/////////////////////////////////////////

// Element Selectors: 

// Method used to target and manipulate HTML elements they allow you to select one ot multiple elements from the DOM.

// 1. document.getElementById()       // ELEMENT OR NULL
// 2. document.getElementsByClassName() // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()         // ELEMENT OR NULL
// 5. document.querySelectorAll()      // NODE LIST


/////////////////////////////////////////
///// 1. document.getElementById() //////
/////////// ELEMENT OR NULL /////////////

// This method returns the element that has the ID attribute with the specified value. It is a string representing the unique ID of the element being sought.
// If no element with the specified ID exists, it returns null.
const myHeading = document.getElementById('myHeading');
myHeading.style.backgroundColor = 'red';
myHeading.style.textAlign = 'center';

console.log(myHeading);

// 

///////////////////////////////////////////////
///// 2. document.getElementsByClassName() ////
///////////// HTML COLLECTION /////////////////
// HTML STATIC, NODELIST, STATIC

// returns a HTML COLLECTION, its similar to an array because it has a length property and can be accessed using bracket notation.

// This method returns a collection of all elements in the document with the specified class name, as a NodeList object.

// Accessing the first element in the collection and changing its color to red. 
// fruits.style.color = 'red'; // This will not work because fruits is a collection and not a single element.
const fruits = document.getElementsByClassName('fruits');
fruits[0].style.color = 'red';


// //////// USING A LOOP TO MODIFY ALL ELEMENTS IN THE COLLECTION ////////


// ////// THIS METHOD IS called `for loop`. //////
// // we can also use this method of looping to add event listeners to all the elements in the collection.
// for (let i = 0; i < fruits.length; i++) {
//     fruits[i].style.color = 'red';
// }

// ////// THIS METHOD IS NEW AND SUBSTITUTES THE `for loop` called `for...of` loop. //////

// // this is a more modern way of looping through arrays and collections. 
// for (let fruit of fruits) {
//     fruit.style.backgroundColor = 'yellow';
// }

console.log(fruits);


// In COLLECTIONS we cant use "forEach" METHOD, SO WE NEED TO USE Array.from(variable).forEach(). 
// METHOD TO CONVERT THE HTML COLLECTION TO AN ARRAY.

// This method creates a new, shallow-copied Array instance from a COLLECTION.
Array.from(fruits).forEach(fruit => {
    fruit.style.color = "yellow"
});


///////////////////////////////////////////////
////// 3. document.getElementsByTagName() /////
///////////// HTML COLLECTION /////////////////
// HTML, LIVE; NODE LIST, STATIC

const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');

// To apply the style to 1 index we use:
h4Elements[1].style.color = 'red';

// If we want to change the color of all the h4 elements we can use a loop.
for (let h4Element of h4Elements) {
    h4Element.style.color = 'blue';
}

for (let liElement of liElements) {
    liElement.style.color = 'lightblue';
}

// This will show all the elements in the collection
console.log(h4Elements);
console.log(liElements);

// We can also use the Array.from(variable).forEach() method to loop through the collection.
// forEach() method is only available to arrays and not collections.

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = 'magenta';
});

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = 'green';
});

/////////////////////////////////////////
///// 4. document.querySelector() ///////
//////// FIRST ELEMENT OR NULL //////////

// This method returns the first element that matches a specified CSS selector(s) in the document.
// This will change only the first element of the collection

const element = document.querySelector(".fruits");

element.style.backgroundColor = "red";


//////////////////////////////////////////
///// 5. document.querySelectorAll() /////
////////////// NODELIST /////////////////
// STATIC
// DO NOT UPDATE AUTOMATICALLY IN THE DOM
// This method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

const allFruits = document.querySelectorAll('li');

allFruits[1].style.color = 'red';

allFruits.forEach(food => {
    food.style.color = 'blue';
});

// This will show all the elements in the NodeList.
console.log(allFruits);         