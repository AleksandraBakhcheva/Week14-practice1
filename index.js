function nameInput() {
    let name = document.getElementById('your_name').value;
    document.getElementById('say_hello').innerHTML = (`Hello, ${name}!`);
}
function getSum() {
    let firstNum = document.getElementById('number1').value;
    let secondNum = document.getElementById('number2').value;
    let result = +firstNum + +secondNum;
    document.getElementById('total_result').innerHTML = (`Your result = ${result}!`);
}
function getDiff() {
    let firstNum = document.getElementById('number1').value;
    let secondNum = document.getElementById('number2').value;
    let result = +firstNum - +secondNum;
    document.getElementById('total_result').innerHTML = (`Your result = ${result}!`);
}
function getDivison() {
    let firstNum = document.getElementById('number1').value;
    let secondNum = document.getElementById('number2').value;
    let result = +firstNum / +secondNum;
    document.getElementById('total_result').innerHTML = (`Your result = ${result}!`);
}
function getProd() {
    let firstNum = document.getElementById('number1').value;
    let secondNum = document.getElementById('number2').value;
    let result = +firstNum * +secondNum;
    document.getElementById('total_result').innerHTML = (`Your result = ${result}!`);
}