function add(n1, n2) {
    return (n1 + n2);
}

function multiply(n1, n2) {
    return (n1 * n2);
}

function subtract(n1, n2) {
    return (n1 - n2);
}

function divide(n1, n2) {
    if(n2 != 0) {
        return (n1 / n2);
    }
    else {
        return "Invalid numbers";
    }
}

let userInput = prompt("Enter a number:");
let n1 = parseInt(userInput);

userInput = prompt("Enter a number:");
let n2 = parseInt(userInput);

userInput = prompt("Enter operation(Add = 1 / Sub = 2 / Div = 3 / Mul = 4):");
let n3 = parseInt(userInput);

let result = 0;

if(n3 == 1) result = add(n1, n2);
else if(n3 == 2) result = subtract(n1, n2);
else if(n3 == 3) result = divide(n1, n2);
else result = multiply(n1, n2);

console.log(result);