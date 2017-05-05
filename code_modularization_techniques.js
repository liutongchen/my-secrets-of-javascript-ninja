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

//3. using CommonJS to define a module

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
