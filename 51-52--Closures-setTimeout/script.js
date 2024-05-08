/////////////////////////////////////////////////////////////////////
//////////// ----------------- CLOSURE ----------------- ////////////
/////////////////////////////////////////////////////////////////////

// A function defined inside another function has access to the outer function's variables.
// The inner function has access to the outer function's variables, including the parameters.


// closure makes the variable inside a function private, we cant call it outside of the outer function


// // ----------------- EXAMPLE 1 -----------------

// function outer() { // THIS FUNCTION CANT ACCESS THE VARIABLE INSIDE THE INNER FUNCTION
//     // so we call the inner function inside the outer function


//     let message = "Hello World";

//     function inner() {
//         console.log(message);
//     }
//     inner()
// }

// let message = "no no no"
// // this variable is not the same as the one inside the outer function
// // they dont read each other
// // inner function has access to the outer function's variables, including the parameters.
// // but the outer function does not have access to the inner function's variables
// // because the inner function is private to the outer function and the outer function cannot access it

// outer();



// ----------------- EXAMPLE 2 -----------------


// function createCounter() {
//     let count = 0;
//     // why do we have to put let count outside of the function incrementCount()? because if we put it inside the function, it will reset the count to 0 every time we call the function incrementCount()
//     // so we put it out side of the function so it will keep the value of the count, inside the function incrementCount() we increment the count by 1 every time we call the function

//     function increment() {
//         count++;
//         console.log(`The count is: ${count}`);
//     }

//     function getCount() {
//         return count;
//     }

//     // so function counter can access to incrementCount we return it outside of its scope
//     return { increment, getCount };
// }


// const counterApp = createCounter(); // 
// // the count is not reset to 0 every time we call the function incrementCount() because we put the count outside of the function incrementCount() so it will keep the value of the count

// counterApp.increment();
// counterApp.increment();
// counterApp.increment();
// // counterApp.increment();
// // counterApp.increment();
// // counterApp.increment();



// console.log(`The count is: ${counterApp.getCount()}`);




// // CANT CALL A PRIVATE VARIABLE
// // console.log(counterApp.incrementCount);
// // WE CANT ACCESS THE VARIABLE counterApp BECAUSE IT IS PRIVATE TO THE FUNCTION counter()
// // WE CAN ONLY ACCESS IT THROUGH THE FUNCTION incrementCount() BECAUSE WE RETURN IT OUTSIDE OF THE FUNCTION counter()


// // ----------------- EXAMPLE 3 -----------------

// function counterApp() {
//     let score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points} pts.`);
//     }

//     function decreaseScore(points) {
//         score -= points;
//         console.log(`-${points} pts.`)
//     }

//     function getScore() {
//         return score;
//     }

//     return { increaseScore, decreaseScore, getScore };
// }

// // changing the value of the variable score from outside of the function
// score = 100000000;
// // because score is outide of the scope of the function increaseScore() and decreaseScore() so we can access it and change it.
// // this is a safety issue because we can change the value of the score from outside of the function

// const game = counterApp();

// game.increaseScore(100);
// game.increaseScore(4);
// game.decreaseScore(3);

// console.log(game.getScore())// why do i console log here? because i can access the variable score outside of the function increaseScore() and decreaseScore() because i declare it outside of the function so it is a global variable



// ///////////////////////////////////////////////////////////////////////
// //////////// ----------------- .setTimeout() ----------------- ////////
// ///////////////////////////////////////////////////////////////////////

// // setTimeout() is a method that calls a function or evaluates an expression after a specified number of milliseconds.
// // setTimeout(callback, delay, arg1, arg2, arg3, ...)
// // callback: the function to call after the delay has passed.
// // delay: the number of milliseconds to wait before calling the function.
// // arg1, arg2, arg3, ...: additional arguments to pass to the function. 

// function sayHello() {
//     window.alert('Hello')
// }
// setTimeout(sayHello, 300);


// // WE CAN WRITE IT IN A MORE COMPACT WAY:

// setTimeout(function () { window.alert('Helloo') }, 2000)

// // OR EVEN MORE COMPACT:

// setTimeout(() => window.alert('Helooo'), 5000) // we are calling this just once so we dont need to name the function sayHello() we can just write it in one line
// // we can use arrow function because we are calling the function just once

// /////////////////////////////////////////////////////////////////////////
// //////////// ----------------- .clearTimeout() ----------------- ////////
// /////////////////////////////////////////////////////////////////////////

// // clearTimeout() is a method that cancels a timeout previously established by calling setTimeout().
// // clearTimeout(timeoutID)
// // timeoutID: the ID of the timeout to cancel.

// const timeoutId = setTimeout(() => window.alert('Helooo'), 5000);

// clearTimeout(timeoutId); // this will cancel the setTimeout() so it will not run the function sayHello() after 5000ms
// // so the window.alert('Helooo') will not run after 5000ms
// // window alert will never pop

// ----------------- TIMER APP -----------------

// creating a button that will pop up a window alert after 5 seconds

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert('Hello'), 1000)
    console.log(`START`)
}

function resetTimer() {
    clearTimeout(timeoutId);
    console.log(`RESET SUCCESSFUL`)
}



