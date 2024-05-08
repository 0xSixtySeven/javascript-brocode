
//////////////////////////////////////////
////////////  DOM NAVIGATION  ////////////
//////////////////////////////////////////

// 1. .firstElementChild
// 2. .lastElementChild
// 4. .nextElementSibling
// 3. .previousElementSibling
// 5. .parentElement
// 6. .children

// DOM Navigation 
// Is the process of moving through the DOM tree(HTML) to find a particular element or elements with JS.


///////////////////////////////////////////
//////////  1. .firstElementChild  ////////
///////////////////////////////////////////

// This way it will only apply to 1 parent in the first element in the child.
// const element = document.getElementById('fruits')
// const firstChild = element.firstElementChild;
// firstChild.style.color = 'red';

// // IF WE WANT TO APPLY THE COLOR TO ALL THE FIRST CHILDREN FROM EACH PARENT WE USE:

// const ulElements = document.querySelectorAll('ul');

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.color = 'red';
// })


/////////////////////////////////////////////
//////////  2. .lastElementChild  //////////
///////////////////////////////////////////


// TO SELECT THE LAST ELEMENT OF ONLY ONE ID(ONLY ONE PARENT) 
// const element = document.getElementById('desserts');
// const lastChild = element.lastElementChild;
// lastChild.style.color = 'green';


// // TO SELECT ALL LAST ELEMENTS IN ALL THE PARENTS
// const ulElements = document.querySelectorAll('ul');

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = 'blue';
// });

/////////////////////////////////////////////
//////////  3. .nextElementSibling /////////
///////////////////////////////////////////

// const nextSiblings = document.getElementById('apple');

// const nextSibling = nextSiblings.nextElementSibling;
// nextSibling.style.backgroundColor = "gray"

// // If instead of an element in ul we put the ul id (the parent of the elements(li) it will highlight all the elements of the next parent('desserts'))
// const nextSiblingsAll = document.getElementById('vegetables');

// const nextSiblingAll = nextSiblingsAll.nextElementSibling;
// nextSiblingAll.style.backgroundColor = "red"


// // LOOP
// const ulElementsN = document.querySelectorAll('ul')

// ulElements.forEach(ulElement => {
//     const nextElement = ulElement.nextElementSibling;
//     nextElement.style.color
// })



/////////////////////////////////////////////////
//////////  4. .previousElementSibling  ////////
///////////////////////////////////////////////

// const previousElements = document.getElementById('tomato')
// const previousElement = previousElements.previousElementSibling;
// previousElement.style.backgroundColor = "pink"


// // LOOP
// const ulElementsP = document.querySelectorAll('ul')

// ulElementsP.forEach(ulElement => {
//     const previousElement = ulElement.nextElementSibling;
//     previousElement.style.color = 'lightblue'
// })


/////////////////////////////////////////////
////////////  5. .parentElement  ///////////
///////////////////////////////////////////


// const element = document.getElementById('apple')

// const parents = element.parentElement;
// parents.style.backgroundColor = 'purple'


/////////////////////////////////////////////
///////////////  6. .children  /////////////
///////////////////////////////////////////

const element = document.getElementById('vegetables')
const children = element.children;
// as its a collection we need to transform it to an array so we can use .forEach

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = 'red'
// })

// IF WE WANT TO HIGHLIGHT JUST ONE CHILD INSIDE THE PARENT WE USE THE INDEX OF THE ELEMENT:

// We use the collection instead of transforming it to an array and call an index of an element in the parent

children[2].style.backgroundColor = 'yellow'