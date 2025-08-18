const demon_slayer = ["Tanjiro", "Zenitsu", "Inosuke"]
const jujutsu_kaisen = ["Itadori", "Fushigiro", "Kugisaki"]

// demon_slayer.push(jujutsu_kaisen) //it will give array inside of array ---it will treat jujutsu kaisen as an 4th element in demon slayer
// console.log(demon_slayer)
// console.log(demon_slayer[3][1]); //to acess the element of array that is inside of another array
//---for above we can also use concatenate

const newAnime = demon_slayer.concat(jujutsu_kaisen)
console.log(newAnime);

const all_new_anime = [...demon_slayer, ...jujutsu_kaisen] //works like concat
console.log(all_new_anime)

const another_array = [1,2,3, [4, 5, 6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(3)
console.log(real_another_array)

console.log(Array.isArray("Ash Ketchum"));
console.log(Array.from("Ash Ketchum"));
console.log(Array.from({name:"Ash Ketchum"})); //interesting case -- it will give empty array if its not able to convert directly 

let score1 = 100;
let score2 = 200;
console.log(Array.of(score1,score2));
