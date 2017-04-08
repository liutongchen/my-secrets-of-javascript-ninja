function assert(a, b) {
  if (a === true) {
    console.log(b);
  } else {
    console.log("oops")
  }
}

//simple generator function

function* mealCooker() {
  yield "Chinese cuisine";
  yield "Japanese cuisine";
  yield "Canadian poutin";
}

for (let meal of mealCooker()) {
  assert(meal !== undefined, meal)
}

