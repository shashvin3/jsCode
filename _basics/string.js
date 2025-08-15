const name = "Bajrangi"
const age = 21;
console.log(`My name is ${name} and age is ${age}`);
console.log(name.length)

const cartoonName = new String("Pokemon")  //By declaring string like this we can use its various method

console.log(cartoonName.length)
console.log(cartoonName.toUpperCase())
console.log(cartoonName.charAt(4))
console.log(cartoonName.indexOf('o'))

const newString = cartoonName.substring(2,4)
console.log(newString)

const newString1 = cartoonName.slice(-6,4)
console.log(newString1)