// GUESSING A NUMBER GAME

// to get a random number between 1 and 100 inclusive of 1 and 100 we use the formula above 
// Math.random() generates a random number between 0 and 1 exclusive of 1
// so to get a random number between 1 and 100 we multiply the result of Math.random() by 100
// to get a random number between 1 and 100 inclusive of 1 and 100 we add 1 to the result of Math.random() * 100
//  Math.floor() rounds the result of Math.random() * 100 + 1 to the nearest whole number

const minNum = 1;
const maxNum = 48;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between 1 and 48: `)
    guess = Number(guess);
    console.log(typeof guess, guess)

    // with isNaN we check if the guess is not a number and prompt the user to enter a valid number
    if (isNaN(guess)) {
        window.alert(`Please enter a number: `)
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between 1 and 48: `)
    }
    else {
        attempts++;  // 
        if (guess < answer) {
            window.alert(`TOO LOW! TRY AGAIN!`)
        }
        else if (guess > answer) {
            window.alert(`TOO HIGH! TRY AGAIN!`)
        }
        else {
            window.alert(`${answer} is the winning NUMBER! YOU WON! It only took you ${attempts} attempts`)
            running = false;
        }
    }


}