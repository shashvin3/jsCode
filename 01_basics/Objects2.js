const PokemonMaster = new Object()   //Singleton Object
//const PokemonMaster = {}           //Non Singleton Object   
PokemonMaster.id = 101;
PokemonMaster.name = "garry";

//console.log(PokemonMaster);

const userName ={
    id:201,
    fullName: {
            userFullName: {
                Name:"Ash",
                lastName:"Ketchum"
            }
    }
}
//console.log(userName.fullName.userFullName.Name);
let target;
const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'a', 4:'b'};
//const obj3 = {obj1 , obj2};
//const obj3 = Object.assign({},obj1, obj2)  //Merge two or more objects
const obj3 = {...obj1 , ...obj2};//Spread operator
//console.log(obj3);

const users =[
    {
        id:401,
        name:"Brock"
    },
    {
        id:402,
        name:"Tracy"
    },{
        id:403,
        name:"Cylin"
    },
]
//console.log(users[0].name);


// console.log(PokemonMaster);
// console.log(Object.keys(PokemonMaster)); //it give output value in array i.e it kept all the keys in array , now you can also use loop on it
// console.log(Object.values(PokemonMaster)); //it will give values of key
// console.log(Object.entries(PokemonMaster));  //it will give array pairs of key-value pair
// console.log(PokemonMaster.hasOwnProperty('id'));  //it checks if the key or property present in object or not


//------------------------------------Object Destructure-------------------------------------
const pokemon ={
    pokeName : "Infernap",
    type: "Fire",
    pokeMaster: "Ash Ketchum"
}
const {pokeMaster, type, pokeName} = pokemon 
//const {pokeMaster:master} = pokemon //Can assign to new variable names using a colon:
console.log(pokeMaster);
console.log(type);
console.log(pokeName);

//-------------------------------------JSON API--------------------------------------------------
{
    "name":"dark",
    "genre":"thriller",
    "type":"series"
}