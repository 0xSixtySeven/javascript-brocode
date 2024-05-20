// let inputA;
// let inputB;
// let result;
// let submit;

document.getElementById("submit").onclick = () => {

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;

    console.log(inputA)
    console.log(inputB)

    hypotenuseResult = Math.sqrt((Math.pow(inputA, 2) + Math.pow(inputB, 2))).toFixed(3);
    console.log(hypotenuseResult)

    document.getElementById("result").textContent = `Hypotenuse: ` + hypotenuseResult;
}















// const inputValues = document.getElementById("inputValues")
// const showFormula = document.getElementById("showFormula")
// const formula = document.getElementById("formula")
