//module file has extension .mjs
import path from "path" //export module path.mjs


// return absalut path
// /Users/Desktop/ExpresNode/learn1
const currentDir = path.resolve();


// /Users/Desktop/ExpresNode/learn1/index.js
//currentDir += /index.js
const filePate = path.join(currentDir, "index.js")


/*{
    root: '/',
    dir: '/Users/Desktop/ExpresNode/learn1',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  }
*/
console.log(path.parse(filePate));

//------------------------------  we can do the same  ----------------------------------------


import {resolve, join, parse} from "path"

const currentDir1 = resolve();

const filePate1 = join(currentDir1, "index.js")

console.log(parse(filePate1));

//-----------------------------------file system  "fs"-----------------------------------------

import {resolve, join, parse} from "path"

const currentDir2 = resolve();

// /Users/Desktop/ExpresNode/learn1/package.json
const filePate2 = join(currentDir1, "package.json")

//utf8 text
//its error function call back
//fstat.promises.readFile(filePate, "utf8").then((text)=>console.log(text))
fstat.readFile(filePate, "utf8", (error, text)=>{
//it is called when the file is completely read
    console.log(text);
})