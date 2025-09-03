const user = {
    username: "HanumanJi",
    value:999,
    WelcomeMessage : function(){
     console.log(`${this.username} ki jai`);
    // console.log(this);
    }
}

// user.WelcomeMessage();
// user.username = "RamJi";
// user.WelcomeMessage();
// console.log(this);

//------------------------------------Ways to define a function---------------------------------------------

// function chai(){                            //Method1
//    console.log(this);
// }

// const chai = function() {                    //Method2
//     let username = "Ash Ketchum"
//     console.log(this.username);
// }

// const chai = () =>{                               //Method3
//    let username = "Ash Ketchum"
//    console.log(this.username);  
// }

// chai();
 
//--------------------Two methods for defining arrow function---------------------------------------------- 

// const addTwoNumbers = (num1 , num2) => {
// return num1 + num2;
// }


const addTwoNumbers = (num1 , num2) => num1 + num2;    //Implicit return 

console.log(addTwoNumbers(5,7));

