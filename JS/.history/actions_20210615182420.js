const owner = 'Vishal Jain'

const sum = (num1, num2) => num1 + num2

const sub = (num1, num2) => {
    return num1 - num2
}

const mul = function(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

module.exports = {
    sum,
    sub,
    mul,
    owner,
    divide
}