// .checked property is used to check if the checkbox is checked or not.
// If checked, it will return true, otherwise false.
// It works with html checkbox and radio button elements.

const subscribeCB = document.getElementById('subscribeCB');

const visaRadio = document.getElementById('visaRadio');
const mastercardRadio = document.getElementById('mastercardRadio');
const paypalRadio = document.getElementById('paypalRadio');

const submitBtn = document.getElementById('submitBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

submitBtn.onclick = function () {
    if (subscribeCB.checked) {
        subResult.textContent = 'Subscribed!';
    }
    else {
        subResult.textContent = 'Not Subscribed...';
    }

    if (visaRadio.checked) {
        paymentResult.textContent = 'Using Visa as payment method';
    }
    else if (mastercardRadio.checked) {
        paymentResult.textContent = 'Using Mastercard as payment method';
    }
    else if (paypalRadio.checked) {
        paymentResult.textContent = 'Using PayPal as payment method';
    }
    else {
        paymentResult.textContent = 'No payment method selected';
    }
}
