// classList

// Element property in js used to interact with an elements list of classes(css classes)
// Allows you to make reusable classes for many elements across your site


// add()
// remove()
// toggle() Remove if present, Add if not.
// replace()(oldClass, newClass)
// contains()  
// item()


// const myButton = document.getElementById('btn')
// const myH1 = document.getElementById('myH1')

// // add()
// myButton.classList.add('enabled')
// myButton.classList.add('hover')
// myButton.classList.add('myH1')
// myH1.classList.add('enabled')



// remove()
// myButton.classList.remove('enabled')
// myButton.classList.remove('hover')




// toggle()


// myButton.addEventListener('mouseout', event => {
//     event.target.classList.toggle('hover');
// })
// myButton.addEventListener('mouseover', event => {
//     event.target.classList.toggle('hover');
// })

// contains()
// replace()
// item()


// replace


// myButton.addEventListener('click', event => {
//     event.target.classList.replace('enabled', 'disabled')
//     // replace the old class with the new one(old, new)
// })


// contains()

// myButton.addEventListener('click', event => {
//     // The button starts in 'enabled', it will only have the text in the ButtonHTML and it will be 'disabled' on click
//     // SO  IF CLASS IS 'disabled' WE ADD "Click Me" + ':)' TO THE .textContent of the Button
//     if (event.target.classList.contains('disabled')) {
//         event.target.textContent += ':)'
//     }
//     else {
//         // replace the old class with the new one(old, new)
//         event.target.classList.replace('enabled', 'disabled')
//     }
// })

// myH1.addEventListener('click', event => {
//     // The button starts in 'enabled', it will only have the text in the ButtonHTML and it will be 'disabled' on click
//     // SO  IF CLASS IS 'disabled' WE ADD "Click Me" + ':)' TO THE .textContent of the Button
//     if (event.target.classList.contains('disabled')) {
//         event.target.textContent += ':)'
//     }
//     else {
//         // replace the old class with the new one(old, new)
//         event.target.classList.replace('enabled', 'disabled')
//     }
// })


// EXAMPLE // 
// SEE IN THE HTML AND CSS FILE TO UNCOMMENT TO RUN ALL THE ABOVE CODE

let buttons = document.querySelectorAll('.myBtns');

// .add
buttons.forEach(button => {
    button.classList.add('enabled')
})

buttons.forEach(button => {
    button.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover')
    })
})

buttons.forEach(button => {
    button.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover')
    })
})

buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.classList.contains('disabled')) {
            event.target.textContent += ':)'
        }
        event.target.classList.replace('enabled', 'disabled')
    })
})

