function nameInput() {
    let name = document.getElementById('your_name').value;
    document.getElementById('say_hello').innerHTML = (`Hello, ${name}!`);
}
let firstNum;
let secondNum;
function getNumberOne() {
    firstNum = document.getElementById('number1').value;   
}
function getNumberTwo() {
    secondNum = document.getElementById('number2').value;   
}
function totalResult(result) {
    document.getElementById('total_result').innerHTML = (`Your result = ${result}!`);
}
function getSum() {
    getNumberOne(firstNum);
    getNumberTwo(secondNum);
    let result = +firstNum + +secondNum;
    totalResult(result);
}
function getDiff() {
    getNumberOne(firstNum);
    getNumberTwo(secondNum);
    let result = +firstNum - +secondNum;
    totalResult(result);
}
function getDivison() {
    getNumberOne(firstNum);
    getNumberTwo(secondNum);
    let result = +firstNum / +secondNum;
    totalResult(result);
}
function getProd() {
    getNumberOne(firstNum);
    getNumberTwo(secondNum);
    let result = +firstNum * +secondNum;
    totalResult(result);
}
function clearInput() {
    document.getElementById('your_name').value = "";
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
}