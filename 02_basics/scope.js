let a = 10;
var b = 20;
const c = 30;

if (true){
    //a = 300;
    let a = 300;
    console.log("Inner: ",a)
}

console.log(a);
console.log(b);
console.log(c);

if(true){
    const username = "Levi Ackerman"
    if(username === "Levi Ackerman"){
        const website = "attacks on titan"
        console.log(username + website);        
    }
    //console.log(website); // trying to access local scope variable will throw error
}
//console.log(username)  // trying to access local scope variable will throw error