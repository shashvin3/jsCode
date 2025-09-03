//Immediately Invoked Function Expression (IIFE)
(function chai(){
  console.log(`DB Connected`); 
})();

((name) => {
  console.log(`DB Connected 2 ${name}`); 
})("RamJi");

//Sometimes there is problem from the pollution of global scope so to remove that global scope variable or whatever pllutin it is to remove it we use iife
// Syntax  -  ()();