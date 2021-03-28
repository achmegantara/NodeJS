// const fs = require("fs");

// fs.copyFileSync("text.txt", "text3.txt");
// console.log("text.txt was copied to text2.txt");

// const hero = require("superheroes");

// for(let i=0; i<10; i++){
// const nameHero = hero.random();
// console.log(nameHero);
// }

const op = require("./module");

const moduleTambah = op.tambah(10,5);
console.log(moduleTambah);