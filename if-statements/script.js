
// // EXAMPLE 1

// let age = 17;

// if (age >= 18) {
//     console.log('Old enough to watch porn');
// }
// else {
//     console.log('Not old enough to watch porn');
// }

// // EXAMPLE 2

// let time = 2;

// if (time > 6 && time < 12) {
//     console.log('Good morning');
// }
// else if (time > 12 && time < 18) {
//     console.log('Good afternoon');
// }
// else {
//     console.log('Good Night Sir!');
// }

// // EXAMPLE 3 - BOOLEAN

// let isStudent = true;

// if (isStudent) {
//     console.log('You are a student');
// } else {
//     console.log('You are not a student');
// } 

// // EXAMPLE 4 

// let age = 25;
// let hasLicense = false;

// if (age >= 18 && hasLicense) {
//     console.log('You are eligible to drive');
// }
// else {
//     console.log('You are not eligible to drive');
// }
// if (hasLicense) {
//     console.log('You have a driving license');
// }
// else {
//     console.log('You do not have a driving license');
// }

// if (age >= 18) {
//     console.log('You are old enough');
// }
// else {
//     console.log('You are not old enough.');
// }

// // EXAMPLE 5

const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');

let age;

mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age);

    if (age >= 100) {
        // console.log('Pass denied: You are too old');
        resultElement.textContent = 'Pass denied: You are too old';
    }
    else if (age >= 18) {
        // console.log('Pass granted');
        resultElement.textContent = 'Pass granted';
    }
    else if (age === 0) {
        // console.log('You are not alive');
        resultElement.textContent = 'You are not alive';
    }
    else if (age <= 18) {
        // console.log('Pass denied: You are too young');
        resultElement.textContent = 'Pass denied: You are too young';
    }
    else if (age = typeof String) {
        // console.log('Please enter a number');
        resultElement.textContent = 'Please enter a number';
    }
}


