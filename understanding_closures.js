function assert(a, b) {
  if (a === true) {
    console.log(b);
  } else {
    console.log("wrong")
  }
}

//execution context & lexical environment
function animateIt(elementID) {
  var ele = document.getElementById(elementID);
  var tick = 0;
  var timer = setInterval(function(){
    if (tick < 100) {
      ele.style.left = ele.style.top = tick + "px";
      tick++;
    } else {
      clearInterval(timer);
      assert(tick === 100, "tick accessed via a closure");
      assert(ele, "element also accessed via a closure");
      assert(timer, "timer accessed via a closure")
    }
  }, 10);  
}

//the process of identifier registration
assert(typeof num === "number", "number variable is registered");
assert(typeof array === "object", "object variable is registered");
assert(typeof expFun === "function", "function expression is registered");
assert(typeof arrowFun === "function", "arrow function is registered");
assert(typeof declarationFun === "function", "function declaration is registered")

var num = 1;
var array = [1, 2];
var expFun = function() {};
var arrowFun = (x) => x;
function declarationFun() {};
