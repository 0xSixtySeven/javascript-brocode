
const myBtn = document.getElementById("myBtn")
const myImg = document.getElementById('myImg')

// myBtn.addEventListener('click', event => {

//     if (myImg.style.display === 'none') {
//         myImg.style.display = 'block'
//         myBtn.textContent = 'Hide'
//     }
//     else {
//         myImg.style.display = 'none'
//         myBtn.textContent = 'Show'
//     }

// })

// USING .visibility INSTEAD OF .display

// THIS WAY TH BUTTON WILL KEEP THE SAME POSITION EVEN IF THE IMAGE IS HIDDEN


myBtn.addEventListener('click', event => {

    if (myImg.style.visibility === 'hidden') {
        myImg.style.visibility = 'visible'
        myBtn.textContent = 'Hide'
    }
    else {
        myImg.style.visibility = 'hidden'
        myBtn.textContent = 'Show'
    }

})