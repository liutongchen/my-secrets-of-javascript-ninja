function assert(a, b) {
  if (a === true) {
    console.log(b);
  } else {
    console.log("wrong")
  }
}

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
