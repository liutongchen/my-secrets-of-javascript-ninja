//function invocation influences the context of the function
function assert(a, b) {
  if (a === true) {
    console.log(b)
  } else {
    console.log("not working")
  }
}

function whatsMyContext(){
  return this
}

assert(whatsMyContext() === undefined, "function context undefined")

var getMyThis = whatsMyContext;

assert(getMyThis() === undefined, "function context undefined")

var ninja1 = {
  getMyThis: whatsMyContext
};

assert(ninja1.getMyThis() === ninja1, "working on ninja1")

var ninja2 = {
  getMyThis:whatsMyContext
}

assert(ninja2.getMyThis()===ninja2, "working on ninja2")


//using constructor functions

//1. constructor functions returning the object instance itself
function ninja() {
  this.skulk = function() {
    return this
  }
}

var ninja1 = new ninja();
var ninja2 = new ninja();

assert(ninja1.skulk() === ninja1, "ninja1 is skulking");
assert(ninja2.skulk() === ninja2, "ninja2 is skulking");

//2. constructor functions returning the a primitive: ignore the primitive and return the newly created object
function Ninja() {
  this.sulk = function() {
    return true
  }
  return 1
}

var ninja = new Ninja();

assert(Ninja() === 1, "function invocation as function return 1");
assert(typeof ninja === "object", "object returned when called as a constructor");
assert(typeof ninja.skulk === "function", "ninja object has a skulk method");

//3. constructors returning othe object values: object returned by the constructor is assigned to the variable "emperor"
var puppet = {
  rule: false
}

function Emperor() {
  this.rule = true;
  return puppet;
}

var emperor = new Emperor();

assert (emperor === puppet, "this emperor is a puppet")
assert(emperor.rule === false, "this new emperor doesn't know how to rule")
