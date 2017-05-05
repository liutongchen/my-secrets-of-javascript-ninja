//1. using objects, closures and immediate functions to specify modules---------------------------------------------------------------
//task1: count clicks on a web page
const countClickModule = function() {
  let counter = 0;
  let handleClick = function() {
    alert(counter++)
  };
  return {
    clickCounter: function() {
      document.addEventListener("click", handleClick)
    }
  }
}();

countClickModule.clickCounter();

//task2: augment the above module without modifying the original code
(function(module) {
  let counter = 0;
  let scrollHandler = () => {
    console.log(scrollCounter++);
  };
  module.scrollCounter = () => 
    document.addEventListener("wheel", scrollHandler);
})(countModule);

//2. using AMD to specify a module dependent on jQuery------------------------------------------------------------------------------------
define("counterModule", ["jQuery"], 
      $ => {
          let num = 0;
          let handleClick = () => {console.log(num++);};
          return {
            clickCounter: () => $(document).on("click", handleClick)
          }
      }
)

//3. using CommonJS to define a module-----------------------------------------------------------------------------------

//filename: clickCounter.js
const $ = require("jQuery");
let counter = 0;
const clickHandler = () => { console.log(counter++); };
module.exports = {
  countClicks: () => {$(document).on("click", clickHandler)}
}

//to include this module in a different file, do the following:
const clickCounter= require("clickCounter.js");
clickCounter.countClicks();

//4. ES6 modules------------------------------------------------------------------------------------------------------------

//exporting and importing
//filename: msg.js
export const msg1 = "I can be seen from the global scope"; //export way 1
const msg2 = "I can only been seen in the module";
const msg3 = "I am going to be seen in the global scope";
const msg4 = "I'll go with msg3 too!";
export {msg3, msg4}; //export way 2

import {msg3, msg4, msg1}; // or "import * as msg from "msg.js" (if import all exported identifiers);

//using default exporting and importing
//********defaultMessageExp.js************
export default class Animal() {
  constructor(name) {
    this.name = name;
  }
}

export compareAnimal(animal1, animal2) {
  return animal1.name === animal2.name;
}

//**********defaultMessageImp.js**********
import ImportedAnimal, {compareAnimal} from "defaultMessageExp.js"; //when importing default export, we can use whatever name
const animal1 = new ImportedAnimal("Dog");
const animal2 = new ImportedAnimal("Frog");
assert(!compareAnimal(animal1, animal2), "we can compare the animals!");

//renaming exports and imports
//A. remaining in the exported file
//***********greetings.js***************
function sayHi() {
  console.log("Hi")
}
assert(typeof sayHi === "function" && typeof sayHello === "undefined", "we can only access sayHi")
export { sayHi as sayHello }
//***********main.js*******************
import {sayHello} from "greetings.js";
assert (typeof sayHi === "undefined" && typeof sayHello === "function", "when importing, we can only access the alias")

//renaming in the imported file
//************John.js******************
export function saySweetWords() {
  return "You are my everything";
}

//***********Mike.js********************
export function saySweetWords() {
  return "You are the only one for me";
}

//***********Mary.js*******************
import {saySweetWords as JohnSays} from "John.js";
import {saySweetWords as MikeSays} from "Mike.js";
assert(typeof saySweetWords === "undefined", "no access to the saySweetWords alias in the orginal file")
assert(JohnSays() === "You are my everything" && MikeSays() === "You are the only one for me", "Aliased identifiers accessible")
