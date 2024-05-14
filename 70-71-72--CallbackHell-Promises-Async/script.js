/////////////////////////////////////////
/////////// CALLBACK HELL //////////////
///////////////////////////////////////


// function task1(callback) {
//     setTimeout(() => {
//         console.log('Task 1 completed');
//         callback();
//     }, 2000);
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log('Task 2 completed');
//         callback();
//     }, 1200)
// }

// function task3(callback) {
//     setTimeout(() => {
//         console.log('Task 3 completed');
//         callback();
//     }, 4000)
// }

// function task4(callback) {
//     setTimeout(() => {
//         console.log('Task 4 completed');
//         callback();
//     }, 1000)
// }

// // THIS IS A CALLBACK HELL EXAMPLE
// // In this example, we have 4 tasks that need to be executed one after the other.
// // And the setTimeout function is used to simulate the time taken by each task.
// // IF WE DO NOT USE CALLBACKS, THEN THE TASKS WILL BE EXECUTED CONCURRENTLY WITH THE SETTIMEOUT FUNCTION.
// // HERE WE USE CALLBACKS TO MAKE SURE THAT THE TASKS ARE EXECUTED ONE AFTER THE OTHER AND NOT WITH THE SETTIMEOUT FUNCTION. 
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log('All tasks completed!');
//             });
//         });
//     });
// });

////////////////////////////////////////
///////////// PROMISES ////////////////
//////////////////////////////////////

// Promises are used to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// Syntax
// new Promise(resolve, reject) { asynchronous code } );


/////// EXAMPLE ////////
// DO THIS CHORES IN ORDER

// 1. Wake up
// 2. Brush your teeth
// 3. Take a shower

// function wakeUp() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const isWakeUp = true;
//             if (isWakeUp) {
//                 resolve('Wake up');
//             } else {
//                 reject('Wake up failed');
//             }
//         }, 2000);
//     });
// }

// function brushTeeth() {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             const isBrushTeeth = true;

//             if (isBrushTeeth) {
//                 resolve('Brush teeth');
//             } else {
//                 reject('Brush teeth failed');
//             }
//         }, 1000);
//     });

// }

// // with callback function as parameter we can call the next function in the chain after the current function is completed 
// function takeShower() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isTakeShower = false;

//             if (isTakeShower) {
//                 resolve('Take a shower');
//             }
//             else {
//                 reject('Take a shower failed');
//             }
//         }, 500);
//     });

// }

// wakeUp().then(value => { console.log(value); return brushTeeth() })
//     .then(value => { console.log(value); return takeShower() })
//     .then(value => { console.log(value); console.log('All tasks completed') })
//     .catch(error => console.error(error));

// If we want to call all this functions in order we will have to use callback hell

// wakeUp(() => {
//     brushTeeth(() => {
//         takeShower(() => {
//             console.log('All tasks completed');
//         });
//     });
// });


///////////////////////////////////////////
///////////// Async/Await ////////////////
/////////////////////////////////////////

// Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises.
// An async function is a function that returns a promise.

function wakeUp() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const isWakeUp = true;
            if (isWakeUp) {
                resolve('Wake up');
            } else {
                reject('Wake up failed');
            }
        }, 3000);
    });
}

function brushTeeth() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const isBrushTeeth = true;

            if (isBrushTeeth) {
                resolve('Brush teeth');
            } else {
                reject('Brush teeth failed');
            }
        }, 2500);
    });

}

function takeShower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isTakeShower = false;

            if (isTakeShower) {
                resolve('Take a shower');
            }
            else {
                reject('Take a shower failed');
            }
        }, 500);
    });

}

async function doChores() {
    
    // await can only be used in async function
    // await makes a async function wait for a Promise to be resolved before moving on to the next line of code.
    try {
        const wakeUpResult = await wakeUp();
        console.log(wakeUpResult);

        const brushTeethResult = await brushTeeth();
        console.log(brushTeethResult);

        const takeShowerResult = await takeShower();
        console.log(takeShowerResult);

        console.log('All tasks completed');
    }

    catch (error) {
        console.error(error);
    }
}

doChores();



// Await is only valid in async function
// Await will pause the execution of the async function and wait for the Promise to be resolved.