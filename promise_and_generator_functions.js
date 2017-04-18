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

<html>
  <head>
    <script>
      const subtree = document.getElementById("subTree");

      //without generator: using recursive function to traverse DOM
      function traverseDom(element, callback) {
        callback(element);
        element = element.firstElementChild;
        while(element) {
          traverseDom(element, callback);
          element = element.nextElementSibling;
        }
      }

      traverseDom(subTree, function(element){
        assert(element !== null, element.nodeName)
      })

    //with generator: using generator to traverse DOM
    function* DomTraversal(element) {
      yield element;
      element = element.firstElementChild;
      while(element) {
        yield* DomTraversal(element);
        element = element.nextElementSibling;
      }
    }

     for (let element of DomTraversal(subTree)) {
      assert(element !== null, element.nodeName)
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

//3. learning the basic of promise-----------------------------------------------------------------------------------

let promise1 = new Promise((resolve, reject) => {
  undeclaredVariable++;
})

promise1.then(() => {console.log("This wouldn't happen")})
.catch(err => console.log("error caught by 'catch'"))

//4. create a getJSON promise
function getJSON(url) {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest;
    request.open("GET", url);
    request.onload = function() {
      try {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject(this.status + " " + this.statusText);
        }
      } catch(e) {
        reject(e.message);
      }
    };
    request.onerror = function() {reject(this.status + " " + this.statusText)};
    request.send();
  })
}

getJSON("http://www.npmjs.com/package/http-server").then(ninjas =>
{assert(ninja !== null, "ninjas obtained")}).catch(e => fail("should't be here"))

//5. using promise.all and promise.race

Promise.all([getJSON("data/ninjas.json"),getJSON("data/mapInfo.json"),
getJSON("data/plan.json")]).then(results=> {
  const ninja = results[0], mapInfo = results[1], plan = results[2];
  assert(ninja !== undefined && mapInfo !== undefined && plan !== undefined, 
  "The plan is ready to be sent out in motion");
}).catch(e => fail("A problem occurs!"))


//6. combining generator and promise (a rough sketch)
async(function*() {
  try {
    const ninja = yield getJSON("data/ninjas.json");
    const map = yield getJSON("data/mapInfo.json");
    const plan = yield getJSON("data/plan.json");
    //study the mission details
  } catch {
    //not able to get the mission details
}

function async(generator) {
  const interator = generator();
  
  function handle(iteratorResult) {
    if (interatorResult.done) {return;}
    
    const iteratorValue = iteratorResult.value;
    if (iteratorValue instanceof Promise) {
      iteratorValue.then(res => handle(iterator.next(res)).catch(e => iterator.throw(e));
    };

    try {
      (handle(iterator.next()) 
    } catch(e) {
      iterator.throw(e)
    }
