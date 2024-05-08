
// Variable Scope: 
// Global Scope: 
// Local Scope:


// we cant use the same variable name in the same scope, but we can use the same variable name in different scopes


let x = 3; // GLOBAL VARIABLE
let y = "wasdsd";
let z = true;

function function1() {
    let x = 1; // LOCAL VARIABLE
    console.log(x); // CALLING LOCAL VARIABLE
}

function function2() {
    let x = 2;
    console.log(x);// CALLING LOCAL VARIABLE
}

function function3() {
    console.log(x); // CALLING GLOBAL VARIABLE
}

function1();
function2();
function3();


// to return the data type of the variable
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)