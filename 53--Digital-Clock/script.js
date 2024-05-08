
// DIGITAL CLOCK APP

function updateClock() {

    const now = new Date();

    let hours = now.getHours().toString().padStart(2, 0);
    // For the first 2 characters put 0 padding "padStart(2.0)"
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 
    // If hours is 0, then set it to 12 
    hours = hours.toString().padStart(2, 0)

    const minutes = now.getMinutes().toString().padStart(2, 0);

    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);