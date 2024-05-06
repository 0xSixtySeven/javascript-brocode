// -------- EXAMPLE 1 <h1> tag --------


//////////////////////////////////////////////////
//////// STEP 1 - Create a new element //////////
////////////////////////////////////////////////

// const newH1 = document.createElement('h1');

//////////////////////////////////////////////////
//////// STEP 2 - ADD ATTRIBUTES AND PROPERTIES //////////
////////////////////////////////////////////////
// 

// newH1.textContent = 'I like pizza!';
// newH1.id = 'myH1';
// newH1.style.color = 'tomato';
// newH1.style.textAlign = 'center';

// //  
//////////////////////////////////////////////////
//////// STEP 3 APPEND ELEMENT TO DOM //////////
////////////////////////////////////////////////


// // append to the end of the body
// document.body.append(newH1);

// // prepend to the beginning of the body
// document.body.prepend(newH1);

// // HERE WE APPEND THE newH1 TO THE DIV WITH ID OF 'box1' AND IT WILL BE POSITIONS LOWER THAN THE <p> BECAUSE .append
// document.getElementById('box1').append(newH1);

// // HERE WE PREPEND IT AND ITS POSITIONED AT THE TOP O THE <p>
// // document.getElementById('box1').prepend(newH1);


// // this means insert the newH1 before the box2 element
// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box2);

// // IF ELEMENTS DO NOT HAVE AN 'ID' WE USE THIS METHOD:
// WE USE querySelectorAll TO SELECT ALL ELEMENTS WITH THE CLASS OF 'box' AND THEN WE SELECT THE SECOND ELEMENT IN THE ARRAY BOXES[1]
// const boxes = document.querySelectorAll('.box')
// document.body.insertBefore(newH1, boxes[1])

//////////////////////////////////////////////////
//////// STEP 4 REMOVE AN ELEMENT //////////
////////////////////////////////////////////////


// document.getElementById('box1').removeChild(newH1)
// document.getElementById('child class').removeChild(parent)

// we can also use the remove() method
// document.getElementById('box4').remove();


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LAST EXAMPLE
// has to put it alone because  we changed the elements in the html file

//////////////////////////////////////////////////
//////// STEP 1 - Create a new element //////////
////////////////////////////////////////////////

const newList = document.createElement('li');


//////////////////////////////////////////////////
//////// STEP 2 - ADD ATTRIBUTES AND PROPERTIES //////////
////////////////////////////////////////////////

newList.textContent = 'Palta';
newList.id = 'palta';
newList.style.backgroundColor = 'tomato';
newList.style.fontWeight = 'bold'


//////////////////////////////////////////////////
//////// STEP 3 APPEND ELEMENT TO DOM //////////
////////////////////////////////////////////////

document.body.append(newList);

// // THIS WAY WE PUT In newList("palta") to the fruits list
// document.getElementById('fruits').append(newList);

// // IF WE WANT THAT PALTA BE THE FIRST IN THE LIST WE USE .prepend
// document.getElementById('fruits').prepend(newList);

// // IF WE WANT TO BE INTRODUCED IN AN SPECIFIC POSITION WE USE:
// const orange = document.getElementById('orange')
// document.getElementById('fruits').insertBefore(newList, orange)


const listItems = document.querySelectorAll('#fruits li')
document.getElementById('fruits').insertBefore(newList, listItems[2])




//////////////////////////////////////////////////
//////// STEP 4 REMOVE AN ELEMENT //////////
////////////////////////////////////////////////


document.getElementById('fruits').removeChild(newList)