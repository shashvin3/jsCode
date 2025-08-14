//Primitive
//7 types : String, Number, Boolean, null, undefined, Symbol(It represents a unique and immutable identifier. ), BigInt

const id = Symbol("123");
const anotherId = Symbol("123");
//Uniqueness: Each Symbol value created using the Symbol() function is guaranteed to be unique, even if they share the same descriptive string.
//Immutability: Once a Symbol is created, its value cannot be changed. 
console.log(id == anotherId)

const bigNumber = 263726384938039233874374n    //BigInt

//Non-primitive(Reference)
//Array, Objects, Functions

const cartoons = ["Pokemon", "Sinchan", "Slugterra", "Doraemon"];  //Array

let obj = {                                                        //Object
    name : "Ash Ketchum",
    Age :21, 
}

const myFun = function(){                                           //Function
    console.log("Pokemon Forever");
}

console.log(typeof myFun)

//------------------------typeof-------------------------
//String- string  Number-number Boolean-boolean  Null-object  Undefined-undefined    Symbol-Symbol
//object objects-object Function-functions