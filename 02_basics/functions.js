function addTwoNumber(number1, number2){
 return number1 + number2;
}

const result = addTwoNumber(20,30);

//console.log(result);



function loginUserName(username = "Berry"){
 if(!username){
    console.log("Please enter a valid username");
    return
 }
 return `${username} has logged in`
}
// console.log(loginUserName("Cylin"))


 //---------------------------------------Rest Operator----------------------------------------
 function CalculatePrice(...num){
   return num
 }
console.log(CalculatePrice(5,6,7,8));

function CalculatePriceValue(value1, value2, ...num){
return num
}
console.log(CalculatePriceValue(5,6,7,8));

//--------------------------Handeling Objects through arrays---------------------------------
const user = {
   username:"Rupanjal",
   price:500
}
 
function handleObject(anyObject){
   console.log(`Username  is ${anyObject.username} and the price is ${anyObject.price}`);
}

handleObject(user);
// handleObject({                 //another way to pass the object
//    username:"Rupanjal",
//    price:500
// }
//  );


const myArray =[ 2,4,5,6,8];

function secondValue(getArray){
   return getArray[1];
}

console.log(secondValue(myArray));
//console.log(secondValue([3,0,5,8,0]));    // Array can also be passed directly

