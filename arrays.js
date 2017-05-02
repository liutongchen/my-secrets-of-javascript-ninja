//1. Removing and adding items at arbitrary positions of an array (note that "delete" method cannot ideally achieve this)-----
let ninja1 = ["naruto", "kakashi", "jilaiye"];
ninja1.splice(2, 1, "Sakura", "Sasuke")

//2. Testing arrays with "every" and "some" methods----------------------------------------------------------------------------
function assert(a, b) {
  if (a) { console.log(b); }
  else { console.log("Oops"); }
}
let ninjas = [{name: "naruto", food: "ramen"}, 
{name: "kakashi", food: "ramen"}, 
{name: "jilaiye"}];

let allNinjasAreNamed = ninjas.every(ninja => ninja.name);
let allNinjasLikeFood = ninjas.every(ninja => ninja.food);
let someNinjasLikeFood = ninjas.some(ninja => ninja.food);

assert(allNinjasAreNamed, "All ninjas are named");
assert(!allNinjasLikeFood, "Not all ninjas like food");
assert(someNinjasLikeFood, "But some ninjas like food");
