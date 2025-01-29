// Type Guards are expressions or checks that allow TypeScript to determine the specific 
// type of a variable at runtime. They are used to ensure type safety and avoid runtime errors.

// For example, if you have a variable of type string | number, a type guard can help 
// TypeScript determine whether it’s a string or a number in a specific block of code.

// Why Are Type Guards Needed?
// When you use union types, TypeScript doesn’t know the exact type of a variable at 
// any given point. Type Guards help you narrow down the type so you can safely access 
// properties or methods specific to that type


// a) typeof Type Guard
// The typeof operator checks the type of a primitive value (string, number, boolean, etc.).
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); 
    } else {
        console.log(value.toFixed(2)); 
    }
}
printValue("hello world")
printValue(126269249229989999.20323232)


// b) instanceof Type Guard
// The instanceof operator checks if an object is an instance of a specific class or 
// constructor function.
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); 
    } else {
        animal.meow(); 
    }
}

// c) Custom Type Guards (User-Defined Type Guards)
// You can create your own type guard functions by returning a type predicate 
// (e.g., value is Type).

interface Bird {
    fly(): void;
}

interface Fish {
    swim(): void;
}

function isFish(pet: Bird | Fish): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Bird | Fish) {
    if (isFish(pet)) {
        pet.swim(); 
    } else {
        pet.fly(); 
}
}
// console.log (isFish) ;
