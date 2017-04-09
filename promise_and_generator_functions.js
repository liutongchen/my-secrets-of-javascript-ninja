function assert(a, b) {
  if (a === true) {
    console.log(b);
  } else {
    console.log("oops")
  }
}

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
/*
//version 1.0 of getting each meal (using while loop)
let mealIterator = mealCooker();
let meal;
while (!(meal = mealIterator.next()).done) {
  assert(meal !== null, meal.value)
}
*/
//version 1.1 of getting each meal (using for-of loop)
for (let meal of mealCooker()) {
  assert(meal !== null, meal)
}
