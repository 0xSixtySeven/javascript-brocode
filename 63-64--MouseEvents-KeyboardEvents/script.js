// //////////////////////////////////////////////////////
// //////////////  .eventListener  /////////////////////
// ////////////////////  mouse  ///////////////////////




// // click, mouseover, mouseout, keydown, keyup, keypress, submit, change, focus, blur, resize, scroll, load, unload, error, exit, play, pause, ended, timeupdate, volumechange, etc.
// // .addEventListener('event', callback => function/anonymous function), like in example 2


// /////////////////////////////////////////////////
// //////////////  1. click   /////////////////////
// ///////////////////////////////////////////////

// // EXAMPLE 1
// const myBox = document.getElementById('myBox');
// const myBtm = document.getElementById('myBtn')

// // function changeColor(event) {
// //     // event is the event object that is passed to the function when the event is triggered 
// //     // event.target is the element that triggered the event
// //     event.target.style.backgroundColor = 'red';
// //     event.target.textContent = 'OUCH!';
// // }

// // myBox.addEventListener('click', changeColor)

// // EXAMPLE 2
// // // FOR THE BOX
// // myBox.addEventListener('click', (event) => {
// //     event.target.style.backgroundColor = 'blue';
// //     event.target.textContent = 'YAY!';
// // })

// // // FOR THE BUTTON
// // myBtm.addEventListener('click', (event) => {
// //     event.target.style.backgroundColor = 'blue';
// //     event.target.textContent = 'YAY!';
// // })

// // TO MAKE THE BUTTON TRIGGER THE BOX
// myBtm.addEventListener('click', (event) => {
//     myBox.style.backgroundColor = 'blue';
//     myBox.textContent = 'YAY!';
// })


// /////////////////////////////////////////////////
// //////////////  2. mouseover  /////////////////////
// ///////////////////////////////////////////////

// // EXAMPLE 1


// // FOR THE BOX
// // myBox
// //     .addEventListener('mouseover', (event) => {
// //         event.target.style.backgroundColor = 'purple';
// //         event.target.textContent = 'XAXAXA!';
// //     })

// // // FOR THE BUTTON
// // myBtm.addEventListener('mouseover', (event) => {
// //     event.target.style.backgroundColor = 'purple';
// //     event.target.textContent = 'XAXAXA!';
// // })

// // TO MAKE THE BUTTON TRIGGER THE BOX
// myBtm.addEventListener('mouseover', (event) => {
//     myBox.style.backgroundColor = 'red';
//     myBox.textContent = 'YAY!';
// })

// /////////////////////////////////////////////////
// //////////////  3. mouseover  /////////////////////
// ///////////////////////////////////////////////

// // // FOR THE BOX
// // myBox.addEventListener('mouseout', (event) => {
// //     event.target.style.backgroundColor = 'lightblue';
// //     event.target.textContent = 'Click Me :)';
// // })

// // // FOR THE BUTTON
// // myBtm.addEventListener('mouseout', (event) => {
// //     event.target.style.backgroundColor = 'lightblue';
// //     event.target.textContent = 'Click Me :)';
// // })

// // TO MAKE THE BUTTON TRIGGER THE BOX
// myBtm.addEventListener('mouseout', (event) => {
//     myBox.style.backgroundColor = 'lightblue';
//     myBox.textContent = 'Click Me :)!';
// })










///////////////////////////////////////////////////////
//////////////  .eventListener  //////////////////////
////////////////////  keyboard  /////////////////////

// keydown, keyup, keypress, submit, change, focus, blur, resize, scroll, load, unload, error, exit, play, pause, ended, timeupdate, volumechange, etc.

// // STRUCTURE EXAMPLE
// document.addEventListener('keydown', (event) => {
//     console.log(`Key down: ${event.key}`);
// })

// document.addEventListener('keyup', (event) => {
//     console.log(`Key up: ${event.key}`);
// })

// // EXAMPLE 1
// const myText = document.getElementById('myText')

// document.addEventListener('keydown', (event) => {
//     myText.textContent = ":("
//     myText.style.backgroundColor = 'crimson'
// })

// document.addEventListener('keyup', (event) => {
//     myText.textContent = ":)"
//     myText.style.backgroundColor = 'crimson'
// })

// MOVING ELEMENTS WITH KEYSTROKES

const myText = document.getElementById('myText')
const moveAmount = 30;
let x = 0;
let y = 0;



// IF WE WANT TO FILTER WHAT KEYSTROKES WE CAN USE:

document.addEventListener('keyup', (event) => {
    myText.textContent = ":)"
    myText.style.backgroundColor = 'crimson'
})

document.addEventListener('keydown', (event) => {
    myText.textContent = ":O"
    myText.style.backgroundColor = 'crimson'
})

document.addEventListener("keydown", event => {
    if (event.key.startsWith('Arrow')) {

        // THIS MAKES THE ELEMENT MOVE OUTSIDE THE WEB SIGHT AND IT WILL NOT FOLLOW IT
        // IT WILL DISAPPEAR 
        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myText.style.top = `${y}px`
        myText.style.left = `${x}px`
    }

})