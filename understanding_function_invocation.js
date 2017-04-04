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
function ninja() {
  this.skulk = function() {
    return this
  }
}

var ninja1 = new ninja();
var ninja2 = new ninja();

assert(ninja1.skulk() === ninja1, "ninja1 is skulking");
assert(ninja2.skulk() === ninja2, "ninja2 is skulking");
