'use strict';

// Variables
let num1 = '';
let num2 = '';
let operator = '';

// Functions for mathematical operators
function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return +num1 - +num2;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function divide(num1, num2) {
    return +num1 / +num2;
}

// Function to perform an operation on the numbers num1 and num2
function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === 'x') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        return divide(num1, num2);
    }
}

const numBtns = document.querySelectorAll('.number-button');
const display = document.querySelector('#display');
const opBtns = document.querySelectorAll('.operator-button')
const equBtn = document.querySelector('#equal-button');

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (operator === '') {
            display.textContent = '';
            num1 += btn.textContent;
            display.textContent = num1;
        }
        else if (operator !== '') {
            display.textContent = '';
            num2 += btn.textContent;
            display.textContent = num1 + ' ' + operator + ' ' + num2;
        }
        
    })
})

opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (num1 !== '' && operator !== '' && num2 !== '') {
            let result = parseFloat(operate(operator, num1, num2)).toFixed(2);
            if (result.includes('.00')) {
                result = parseInt(result);
            }
            num1 = result;
            num2 = '';
            operator = btn.textContent
            display.textContent = num1 + ' ' + operator;
        }
        else if (num1 !== '') {
            display.textContent = '';
            operator = btn.textContent;
            display.textContent = num1 + ' ' + operator;
        }
    })
});

equBtn.addEventListener('click', () => {
    if ((num1 !== '' && operator === '') || (num1 !== '' && operator !== '' && num2 === '')) {
        return;
    }
 
    display.textContent = '';
    const result = operate(operator, num1, num2);
    display.textContent = result;
    operator = '';
    num1 = '';
    num2 = '';
})
