/*const score = 400
console.log(score);

const bal = new Number(200)
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(2)); // converts in decimal and arg sets the digit after point
const otherNumber = 123.35
console.log(otherNumber.toPrecision(3));


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-In')); */


//--------------------------------Maths------------------------------------

//we get mayhs library by default in js

console.log(Math)
console.log(Math.abs(-6))       //gives absolute value
console.log(Math.round(4.5))    //gives roundoff value
console.log(Math.ceil(6.3))     // gives above value , output = 7
console.log(Math.floor(6.3))    // gives below value , output = 6
console.log(Math.min(6,3,8,1))  // gives minimum value from array
console.log(Math.max(6,3,8,1))  // gives maximum value from array
 
console.log(Math.random())       //gives a random value between 0-1
console.log(Math.floor(Math.random()*10)+1)

const min = 20
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //we are setting min and max to get number between particular range
 