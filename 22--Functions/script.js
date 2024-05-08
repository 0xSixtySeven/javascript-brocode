
// functions = a section of reusable code 
//          declare code once, use it many times
//          call the function to execute the code inside it


// DECLARING A FUNCTION

function happyBirthday(username, age) { // username and age are parameters, we can replace them with any value when we call the function
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);

}

// CALLING A FUNCTION
// execute the code inside the function
happyBirthday("Miguel de los Rios", 35);
// Miguel de los Rios and 35 are arguments, they replace the parameters in the function.
// the order of the arguments is important, they should match the order of the parameters in the function

///////////////////////////////////////////////////////////////////////////////////

// FUNCTION WITH RETURN VALUE



function add(x, y) { // x and y are parameters
    let result = x + y;
    return result;
    // we use return to send the result of the operation back to the place where the function was called

    // return the result of the operation 
}
let answerAdd = add(2, 3); // 2 and 3 are arguments
console.log(answerAdd);


function subtract(x, y) {
    let result = x - y;
    return result;
}
let answerSub = subtract(40, 30);
console.log(answerSub);


function multiply(x, y) {
    return x * y; // if we dont want to store the result, we can skip the result variable and use return with the formula we want to show.
}
let answerMultiply = multiply(10, 5);
console.log(answerMultiply);


function isEven(number) {
    return number % 2 === 0 ? true : false; // Using Ternary operator
}
let answerEven = isEven(13);
console.log(answerEven);


function isEmailValid(email) {

    //////// WITH IF STATEMENT
    // if (email.includes("@")) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    ////// WITH TERNARY OPERATOR
    return email.includes("@") ? true : false;
}
console.log(isEmailValid("miguel@gmail.com"))
console.log(isEmailValid("miguelgmail.com"))