 owner = 'Vishal Jain'

 sum = (num1, num2) => num1 + num2

 sub = (num1, num2) => {
     return num1 - num2
 }

 mul = function(num1, num2) {
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