/////////////////////////////////////////////////////
/////////////////// ES6 module:  ///////////////////
/////////////////////////////////////////////////////


// its an external file that contains reusable code tha can be imported onto other JS files.
// Write reusable code for many different apps
// Can contain variables, classes, functions ... and more
// Introduced as part of ECMAScript 2015 update

import { PI, getCircumference, getArea, getVolume } from './mathUtil.js'

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(3);
const volume = getVolume(4);

console.log(`${circumference.toFixed(2)}cm.`);
console.log(`${area.toFixed(2)}cm ** 2`);
console.log(`${volume.toFixed(2)}cm ** 3.`);


// ################################################################################################################################### //
// ################################################################################################################################### //
// ################################################################################################################################### //




/////////////////////////////////////////////////////
/////////////////// Synchronous ///////////////////
/////////////////////////////////////////////////////

// Synchronous code: executed line by line consecutively in a sequential manner 
//  Code that waits for an operation to complete before moving on to the next line of code

/////////////////////////////////////////////////////
/////////////////// Asynchronous ///////////////////
/////////////////////////////////////////////////////

// Allow multiple operations to be performed concurrently without waiting
// doesnt block the execution flow and allows the program to continue (Input/Output operations, network requests, fetching data from a database
// Handled with: callbacks, promises, async/await 



// EXAMPLE:


// ASYNCHRONOUS
function func1(callback) {
    setTimeout(() => { console.log('First task'); callback() }, 2500);
    // after console.log('First task') is done after 2500 milliseconds, we call the callback (func2), and execute it.


}
// SYNCHRONOUS
function func2() {
    console.log('Second task');
    console.log('Third task');
    console.log('Forth task');
}

func1(func2);
// func2 is the callback function
// here func1 is called with func2 as an argument. 
// func1 is called first, and then func2 is called after the setTimeout is done.
// func1(func2) means that func2 is passed as an argument to func1, and then func2 is called inside func1.




// ################################################################################################################################### //
// ################################################################################################################################### //
// ################################################################################################################################### //





/////////////////////////////////////////////////////
/////////////////// ERROR HANDLING ///////////////////
/////////////////////////////////////////////////////

// Error handling is the process of catching errors that occur during the execution of a program and taking appropriate action to handle them 
//              ERROR: Occurs often with user input or establishing a connection

// try: block of code that contains code that may throw an error
// catch: catch and handle errors that are thrown from try{}
// finally: block of code that contains code that will always be executed regardless of whether an error is thrown or not
//                            Used mostly to: clean up resources, close files, close database connections, etc.


// ------------- EXAMPLE 1 -------------

try {
    console.log("hello");
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}

catch (error) {
    console.error(error);
}

finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log(' "finally" always executes')
}

console.log("End of script");


// ------------- EXAMPLE 2 -------------
try {
    const dividend = Number(window.prompt("Enter a dividend: "))
    const divisor = Number(window.prompt("Enter a divisor: "))

    if (divisor == 0) {
        throw new Error("You cant divide by Zero!")
        //  With Error we can create an error if certain data is input in the prompt.
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("You need to input a value")
    }

    const result = dividend / divisor;
    console.log(result);
}
catch (error) {
    console.error(error)
}


console.log("You have reached the end")
