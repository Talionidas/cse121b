/* LESSON 3 - Programming Tasks */


let subtotalInput = document.getElementById("subtotal");
let memberCheckbox = document.getElementById("member");
let getTotalButton = document.getElementById("getTotal");
let totalSpan = document.getElementById("total");

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    return document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let substractNumber1 = Number(document.querySelector('#subtract1').value);
    let substractNumber2 = Number(document.querySelector('#subtract2').value);
    return document.querySelector('#difference').value = subtract(substractNumber1, substractNumber2); 
}

/* Arrow Function - Multiply Numbers */

function multiply(number1, number2) {
    return (number1 * number2);
}

function multiplyNumbers() {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    return document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2); 
}

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return (number1 / number2);
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    return document.querySelector('#quotient').value = divide(dividend, divisor); 
}

/* Decision Structure */

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Odds Only Array */
function oddNumbers(list) {
    return list.filter(element => element % 2 === 0);
}
/* Output Evens Only Array */
function evenNumbers(list) {
    return list.filter(element => element % 2 !== 0);
}
/* Output Sum of Org. Array */
function sumOfArray(list) {
    let sum = 0;
    list.map(element => sum += element);
    return sum;
}
/* Output Multiplied by 2 Array */
function multiplied(list) {
    return list.map(number => number * 2);
}
/* Output Sum of Multiplied by 2 Array */
function sumOfMultiplied(list) {
    let sum = 0;
    list.map(element => sum += (element+element));
    return sum;
}

document.querySelector('#array').innerHTML = listOfNumbers;
document.querySelector('#odds').innerHTML = oddNumbers(listOfNumbers);
document.querySelector('#evens').innerHTML = evenNumbers(listOfNumbers);
document.querySelector('#sumOfArray').innerHTML = sumOfArray(listOfNumbers);
document.querySelector('#multiplied').innerHTML = multiplied(listOfNumbers);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied(listOfNumbers);