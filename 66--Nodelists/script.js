

// NodeList 


let buttons = document.querySelectorAll('.myBtns');



// ADD HTML/CSS PROPERTIES

// buttons.forEach(button => {
//     button.style.backgroundColor = 'green'
//     button.textContent += ' :)' // THIS WILL ADD THE HTML TEXT WITH THE JS TEXT CONTENT
// });

// CLICK even listener

// buttons.forEach(button => {
//     button.addEventListener('click', event => {
//         event.target.style.backgroundColor = 'blue'
//     })
// })


// MOUSEOVER + MOUSEOUT event listener

// buttons.forEach(button => {
//     button.addEventListener('mouseover', event => {
//         button.style.color = 'pink'
//     })

//     button.addEventListener('mouseout', event => {
//         button.style.color = 'rgba(0, 65, 87, 0.831)'
//     })
// })

// ADD AN ELEMENT

// // STEP 1, CREATE THE ELEMENT
// const newButton = document.createElement('button');
// // STEP 2, 
// newButton.textContent = 'Button 5';
// newButton.classList = 'myBtns'
// // STEP 3 APPEND-PREPEND
// document.body.appendChild(newButton);


// When we console.log buttons('.myBtns) we will only see 4 elements in the NodeList. The 5th button is not included

// SI IF WE WANT TO INCLUDE THE ELEMENT WE CREATED, WE USE buttons AND OVERWRITE THE let buttons VARIABLE WITH THE NEW querySelectorAll:
// THIS WAY IT WILL BE INCLUDED IN THE NODE LIST
// buttons = document.querySelectorAll('.myBtns')
// console.log(buttons);


// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        // THIS WAY WE REMOVE THE ELEMENT FROM THE DOM  BUT IT WILL STILL BE IN THE NODE LIST
        // SO IF WE WANT TO REMOVE IT FROM THE NODE LIST AS WELL WE CAN DO:
        buttons = document.querySelectorAll('.myBtns')
        console.log(buttons)
    })
}) 