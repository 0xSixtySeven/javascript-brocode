
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// while loop = a loop that continues to run as long as its test condition is true, and stops when the test condition is false   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /// EXAMPLE 1 ///
// /////// WHILE FIRST

// //     // while (this conditions are true) { 
// //     //     run this code block 
// //     // }

// let username = "";

// while (username === "" || username === null) {
//     username = prompt(`Enter Your Name: `)
//     // This means that the loop will continue to run as long as the username is empty("") or null(null returns when we click cancel on the prompt) Basically it will only stops when the user enters a text in the prompt.
// }


// /// EXAMPLE 2 ///
// /////// DO FIRST

// //     // do { 
// //     //     run this code block 
// //     // } while (this conditions are true) 

// let username = prompt(`Enter Your Name: `);

// do {
//     username;
// } while (username === " " || username === null)

// console.log(`Hello, ${username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()}!`);

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = prompt(`Enter Your Username: `);
    password = prompt(`Enter Your Password: `);

    if (username === "admin" && password === "password") {
        loggedIn = true;
        console.log(`You are a hacker!`)
    }
    else {
        console.log(`ACCESS DENIED!`)
    }
}
