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



