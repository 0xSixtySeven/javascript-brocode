
const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10)
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

function reset() {
    clearInterval(timer) // what does clearInterval do? It stops the timer from running.
    // Stops the setInterval() method from running, but do no reset the timer, because the timer is still running in the background even though the display is not updating.
    // then we reset the values of the variables.
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; // overwriting the value of elapsedTime from the global scope
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / 1000 % 60) // we use % 60 to get the remainder of the division by 60
    // This means that when the seconds reach 60, it will reset to 0 and the minutes will increase by 1
    // This means that when the 
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milliseconds = String(milliseconds).padStart(2, "0")

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}