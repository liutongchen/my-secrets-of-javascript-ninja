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
