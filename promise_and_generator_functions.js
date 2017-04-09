function assert(a, b) {
  if (a) {
    console.log(b);
  } else {
    console.log("oops")
  }
}
//1. learning to use the basic of generator-------------------------------------------------------------------------------------
function* mealCooker() {
  yield "Japanese cuisine";
  yield* chineseCuisineGenerator();
  yield "Canadian poutin";
  
}

function* chineseCuisineGenerator() {
  yield "Cantonese cuisine";
  yield "Yangzhou cuisine";
  yield "Sichuan cuisine";
}

//version 1.0 of getting each meal (using while loop)
let mealIterator = mealCooker();
let meal;
while (!(meal = mealIterator.next()).done) {
  assert(meal !== null, meal.value)
}

//version 1.1 of getting each meal (using for-of loop)
for (let meal of mealCooker()) {
  assert(meal !== null, meal)
}

//2. iterate over a DOM tree with generator------------------------------------------------------------------------------------------

//without generator: using recursive function to traverse DOM
<html>
  <head>
    <script>
      function traverseDom(element, callback) {
        callback(element);
        element = element.firstElementChild;
        while(element) {
          traverseDom(element, callback);
          element = element.nextElementSibling;
        }
      }

      const subtree = document.getElementById("subTree");
      traverseDom(subTree, function(element){
        assert(element !== null, element.nodeName)
      })

      function assert(a, b) {
        if (a) {
          console.log(b);
        } else {
          console.log(wrong);
        }
      }
    </script>
  </head>
  <body>
    <div id="subTree">
    <form>
    <input type="text"/>
    </form>
    <p>Paragraph</p>
    <span>Span</span>
    </div>
    </html>

//using generator to traverse DOM

