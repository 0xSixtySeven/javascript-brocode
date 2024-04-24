
// for loop = a loop that repeats until a specified condition evaluates to false
// // for (initialization; condition; increment)

for (let i = 0; i < 10; i++) { // i++ is the same as i = i + 1. This will count up by 1 each time the loop runs
    console.log(i);
}
console.log("Count up");

for (let i = 10; i > 0; i--) { // i-- is the same as i = i - 1. This will count down by 1 each time the loop runs
    console.log(i);
}
console.log("Count down");

for (let i = 10; i > 0; i -= 2) { // i -= 2 is the same as i = i - 2. This will count down by 2 each time the loop runs 
    console.log(i);
}
console.log("Count down - 2");

for (let i = 10; i > 0; i -= 3) {// i -= 3 is the same as i = i - 3. This will count down by 3 each time the loop runs 
    console.log(i);
}
console.log("Count down - 3");



// if we want to skip a number in the loop we can use the continue statement: 
// continue = a statement that stops the current iteration and continues to the next iteration of the loop with an if statement
for (let i = 1; i <= 20; i++) { // i++ is the same as i = i + 1. This will count up by 1 each time the loop runs
    if (i == 13) {
        continue; // continue will skip the current iteration of the loop
    }
    else {
        console.log(i);
    }
}

// break = a statement that breaks out of the loop
for (let i = 1; i <= 20; i++) { // i++ is the same as i = i + 1. This will count up by 1 each time the loop runs
    if (i == 13) {
        break; // continue will skip the current iteration of the loop
    }
    else {
        console.log(i);
    }
}