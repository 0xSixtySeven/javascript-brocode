// DICE ROLLER APP


function rollDice() {

    const numDice = document.getElementById('numDice');
    const result = document.getElementById('result');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];


    for (let i = 1; i <= numDice.value; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // we add 1 to avoid 0 value and get 1-6
        values.push(value); // This will add the value to the array.
        images.push(`<img src="imgs/${value}.png" alt="Dice ${value}">`) // This will add the image to the array.
    }

    result.textContent = `Dice: ${values.join(' | ')}`; // This will join the values of the result that are stored in the array with a comma.
    diceImages.innerHTML = images.join('   '); // This will .join  the images of the result that are stored in the array with a space.
    // innerHTML is used to set the content of the HTML element. It will replace the content of the element with the new content.


}