//singleton --> means whenever you make a constructor using this it makes a single object , means it is one of its type object
// made only with the help of constructor not literals

//Object literals

const MySymbol = Symbol("key1") //defining Symbol

const JsUser = {
    name: "Ash",
    "full Name": "Ash Ketchum",  // we can access this key only using square bracket method
    [MySymbol]: "My key",   //  Adding symbol as key in object  **we need to use square bracket to refer to a symbol
    age: 18,
    location: "faridabad",
    email:"ashketchum32003@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]
}

//Two methods to access object elements
console.log(JsUser.name);
console.log(JsUser.email);
console.log(JsUser["name"]);
console.log(JsUser["full Name"]);
console.log(JsUser[MySymbol]);

JsUser.email ="ketchum.a24@gmail.com"; //You can change the key value like this
console.log(JsUser.email);
//Object.freeze(JsUser); //it will freeze the objects and no changes will propagate on it


//we can declare the functions as variables in js

JsUser.greeting = function(){
    console.log("Hello Users")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Users, ${this.name} `)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());