

let count = 0;

document.getElementById("addBtn").onclick = () => {
    count++;
    document.getElementById('display').textContent = count;
}

document.getElementById("subtractBtn").onclick = () => {
    count--;
    document.getElementById('display').textContent = count;
}

document.getElementById("resetBtn").onclick = () => {
    count = 0;
    document.getElementById('display').textContent = count;
}