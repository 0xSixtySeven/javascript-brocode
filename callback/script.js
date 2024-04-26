
// callback is a function that is passed as an argument to another function
// and is executed after some operation has been completed

// sometimes the process of a function can take some time and we dont want the next function to be called before, so we use callback to make the next function be called after the callback.

//              Is used to handle asynchronous operations:
//              1. Reading a file
//              2. Network requests
//              3. Interacting with databases


sum(displayPage, 1, 2)

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

///// TO DISPLAY IT IN THE CONSOLE
// function displayConsole(result) {
//     console.log(result);
// }

function displayPage(result) {
    document.getElementById("mathResult").textContent = result;
}