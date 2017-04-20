function assert(a, b) {
    if (a) { console.log(b) }
    else { console.log("Oops") };
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

//2) using Object.defineProperty method (closure)
function Ninja() {
    let ninjas = ["naruto", "sasuke", "kakashi"];
    let getter = () => {
        console.log("Getting the first Ninja using closure");
        return ninjas[0];
    };

    let setter = value => {
        console.log("Setting the first Ninja using closure");
        ninjas[0] = value;
    }

    Object.defineProperty(this, "firstNinja", {
        get: getter,
        set: setter
    });
}


let ninjaCollection = new Ninja();
assert(ninjaCollection.ninjas === "undefined", "Don't have direct access to ninjas property");
assert(ninjaCollection.firstNinja === "naruto", "The first ninja is Naruto");
ninjaCollection.firstNinja = "Sakura";
assert(ninjaCollection.firstNinja === "Sakura", "The first ninja is now Sakura");

//2. Validating property value asignments with setters----------------------------------------------------------------
function enterPassword() {
    let password = 0000;
    Object.defineProperty(this, "password", {
        get: () => {
            return password;
        },
        set: value => {
            if (!Number.isInteger(value)) {
                throw new TypeError("Please enter an integer");
            }
            password = value;
        }
    })
}

let newPassword = new enterPassword();
try {
    newPassword.password = "ok";
} catch(e) {
    console.log("Password should be an integer");
}
