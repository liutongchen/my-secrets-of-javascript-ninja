function assert(a, b) {
    if (a) {console.log(b)}
    else {console.log("Oops")};
}
//1. Two ways to define getters and setters--------------------------------------------------------------------
//1) using object literals or using ES6 class definitions
const ninjaCollection = {
    ninjas: ["naruto", "sasuke", "kakashi"],
    get firstNinja() {
        console.log("Getting first ninja");
        return this.ninjas[0];
    },
    set firstNinja(value) {
        console.log("Setting first ninja");
        this.ninjas[0] = value;
    }
}

assert(ninjaCollection.firstNinja === "naruto", "The first Ninja is Naruto");
ninjaCollection.firstNinja = "Sakura";
assert(ninjaCollection.firstNinja === "Sakura", "The first ninja is now Sakura");

//2) using Object.defineProperty method
