let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');

const numberButtons = [
    document.getElementById('zero'),
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three'),
    document.getElementById('four'),
    document.getElementById('five'),
    document.getElementById('six'),
    document.getElementById('seven'),
    document.getElementById('eight'),
    document.getElementById('nine')
];

const operatorButtons = {
    add: document.getElementById('add'),
    subtract: document.getElementById('subtract'),
    multiply: document.getElementById('multiply'),
    divide: document.getElementById('divide')
};

const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const decimalButton = document.getElementById('decimal');

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.innerText));
});

Object.keys(operatorButtons).forEach(op => {
    operatorButtons[op].addEventListener('click', () => setOperator(op));
});

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
decimalButton.addEventListener('click', appendDecimal);

function appendNumber(number) {
    if (shouldResetDisplay) {
        resetDisplay();
    }
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendDecimal() {
    if (shouldResetDisplay) resetDisplay();
    if (!display.innerText.includes('.')) {
        display.innerText += '.';
    }
}

function setOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstOperand = display.innerText;
    currentOperator = operator;
    shouldResetDisplay = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetDisplay) return;
    if (currentOperator === 'divide' && display.innerText === '0') {
        display.innerText = "Error";
        currentOperator = null;
        return;
    }

    secondOperand = display.innerText;
    display.innerText = roundResult(operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand)));
    currentOperator = null;
}

function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : 'Error';
        default:
            return b;
    }
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function resetDisplay() {
    display.innerText = '';
    shouldResetDisplay = false;
}

function clear() {
    display.innerText = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}