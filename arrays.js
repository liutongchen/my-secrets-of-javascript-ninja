function assert(a, b) {
  if (a) { console.log(b); }
  else { console.log("Oops"); }
}

//1. Removing and adding items at arbitrary positions of an array (note that "delete" method cannot ideally achieve this)-----
let ninja1 = ["naruto", "kakashi", "jilaiye"];
ninja1.splice(2, 1, "Sakura", "Sasuke")

//2. Testing arrays with "every" and "some" methods----------------------------------------------------------------------------
let ninjas = [{name: "naruto", food: "ramen"}, 
{name: "kakashi", food: "ramen"}, 
{name: "jilaiye"}];

let allNinjasAreNamed = ninjas.every(ninja => ninja.name);
let allNinjasLikeFood = ninjas.every(ninja => ninja.food);
let someNinjasLikeFood = ninjas.some(ninja => ninja.food);

assert(allNinjasAreNamed, "All ninjas are named");
assert(!allNinjasLikeFood, "Not all ninjas like food");
assert(someNinjasLikeFood, "But some ninjas like food");

//3. reuse code to store metadata: simulating array-like methods---------------------------------------------------------------
const elems = {
  length: 0,
  add: function(ele) {
    Array.prototype.push.call(this, ele);
  },
  gather: function(id) {
    this.add(document.getElementByID(id));
  },
  find: function(callback) {
    Array.prototype.find.call(this, callback);
  }
}

//4.create map------------------------------------------------------------------------------------------------------------------
let ninjaIslandMap = new Map();
let ninja1 = {name: "Naruto"};
let ninja2 = {name: "Kakashi"};
let ninja3 = {name: "Jilaiye"};
//set method
ninjaIslandMap.set(ninja1, {food: "ramen"});
ninjaIslandMap.set(ninja2, {food: "Putin"});
//get method
assert(ninjaIslandMap.get(ninja1).food === "ramen", "Ninja1 likes ramen")
assert(ninja1.name === "Naruto", "we can track the name of Ninja1");
//size property
assert(ninjaIslandMap.size === 2, "there are two ninjas on ninja island")
//has method
assert(ninjaIslandMap.has(ninja2), "ninja2 is also on the island");
//delete and clear method
assert(ninjaIslandMap.delete(ninja2), "ninja2 is gone");
ninjaIslandMap.clear()
assert(ninjaIslandMap.size === 0, "all ninjas are gone now")
