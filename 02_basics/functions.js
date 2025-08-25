function addTwoNumber(number1, number2){
 return number1 + number2;
}

const result = addTwoNumber(20,30);

console.log(result);



function loginUserName(username = "Berry"){
 if(!username){
    console.log("Please enter a valid username");
    return
 }
 return `${username} has logged in`
}
 console.log(loginUserName("Cylin"))