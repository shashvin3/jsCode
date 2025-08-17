let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2023, 0, 26)   //In Js the month starts with 0 i.e. 0->january
// let myCreatedDate = new Date("2025-08-03")  //yyyy-mm-dd Format
let myCreatedDate = new Date("08-03-2025")      //mm-dd-yyyy format followed in Indaia mostly
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))  //converts millisecond into seconds

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());










// const nowInstant = Temporal.Now.instant();
// console.log(nowInstant.toString()); // e.g., 2025-08-17T07:54:00.000Z