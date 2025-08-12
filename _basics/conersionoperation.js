score = "56"

console.log(typeof score); //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber) //Nan (Not a Number)

//----------Number Conversion ----------------
// "33" => 33 easily converts into number
// "33abc" => NaN
// true => 1 : false => 0
// null => 0
// undefined => Nan


let isloggedIn = "Ash Ketchum"

let booleanLoggedIn = Boolean(isloggedIn)
console.log(booleanLoggedIn)

//------------boolean conversion-------------

// 0 => false  1 => true 
// "" => false
// "Ash Ketchum" => true






//-----------------String Conversion--------------

let someNumber = undefined

let stringDigit = String(someNumber)
console.log(stringDigit)
console.log(typeof stringDigit)



