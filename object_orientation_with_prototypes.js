//1. using prototype chain----------------------------------------------------------------------------
function assert(a, b) {
  if (a) {console.log(b)}
  else {console.log("Oops")};
}

function Person() {}
Person.prototype.dance = function() {};

function Ninja() {}
Ninja.prototype = new Person();
let ninja0 = new Ninja();
  //before configuring properties
assert(ninja0.constructor === Ninja, "This should not appear")

Object.defineProperty(ninja0, "constructor", {
  value: Ninja,
  emunerable: false,
  writable: true,
})
  //before configuring properties
assert(ninja0.constructor === Ninja, "Ninja is the constructor of ninja0")
