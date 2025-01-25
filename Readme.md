Learn-TypeScript
🚀 A repository for learning TypeScript through hands-on tutorials, examples, and exercises. Ideal for JavaScript developers or beginners who want to master TypeScript’s core features and advanced concepts for writing clean and scalable code. 💻

📚 Yahan par har ek important TypeScript concept ke liye 2 examples diye gaye hain, jisme unka use-case aur explanation diya gaya hai.

1. Primitive Types 🧑‍💻
Example 1: string
let username: string = "JohnDoe";
Use: string type ka use jab aapko kisi bhi text data ko store karna ho. Jaise user ke naam, email, ya description.
Explanation: TypeScript ensures karta hai ke username sirf text value ho.
Example 2: number
let age: number = 25;
Use: number type ka use jab aapko numerical values store karni ho. Jaise age, quantity, price, etc.
Explanation: TypeScript ensures karta hai ke age ek number ho, aur kisi bhi string ya non-numeric value ko assign nahi kar sakte.
2. Interfaces 🧩
Example 1: Basic Interface
interface Person {
  name: string;
  age: number;
}

let john: Person = {
  name: "John",
  age: 30
};
Use: Interface ka use object ka structure define karne ke liye hota hai. Jaise ki user profiles, employee details, etc.
Explanation: Person interface mein name aur age define kiye gaye hain. john variable ko Person type assign kiya gaya hai, jo ensure karta hai ke name aur age correct types hain.
3. Type Inference and Type Annotations 🎯
Example 1: Type Inference
let message = "Hello, World!";
Use: Jab aap TypeScript ko value assign karte ho, to TypeScript automatically uska type detect kar leta hai.
Explanation: Yahan message variable ko automatically string type assign ho gaya, kyunki "Hello, World!" ek string hai.
Example 2: Type Annotation
let age: number = 25;
Use: Jab aapko type explicitly define karna ho, taaki TypeScript enforce kare ke variable correct type ho.
Explanation: Yahan age ko explicitly number type assign kiya gaya hai.
4. Functions ⚙️
Example 1: Function with Parameters and Return Type
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
Use: Jab aapko function ka input aur output types define karna ho.
Explanation: greet function ko ek string type parameter aur string type return type diya gaya hai. TypeScript ensure karega ke function ko sirf string input milta hai aur output bhi string ho.
Example 2: Function Overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(1, 2)); // 3
console.log(combine("Hello", " World!")); // "Hello World!"
Use: Jab ek function multiple types ko handle kare, to function overloading ka use hota hai.
Explanation: combine function ko different input types ke liye overload kiya gaya hai, jo integers ya strings ko handle karta hai.
5. Classes and Objects 🏠
Example 1: Basic Class with Constructor
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("John", 30);
Use: Jab aapko objects create karna ho jo same structure share karte ho.
Explanation: Person class mein constructor use karke name aur age properties ko initialize kiya gaya hai. person1 ek instance hai jo Person class ka part hai.
6. Generics 🧳
Example 1: Generic Function
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(5)); // 5
console.log(identity("Hello")); // "Hello"
Use: Jab aapko same function ko multiple types ke saath reusable banani ho.
Explanation: identity function ko generic banaya gaya hai, jisme T ek placeholder type hai. Is function ko integers aur strings dono types ke saath use kiya ja sakta hai.
7. Type Assertion 🔒
Example 1: Simple Type Assertion
let value: any = "Hello, TypeScript!";
let length: number = (value as string).length;
console.log(length); // 18
Use: Jab aapko TypeScript ko batana ho ke aap jaante hain ke variable ka type kya hai.
Explanation: value ko any type diya gaya hai, lekin as string ka use karke humein TypeScript ko yeh batana hai ke yeh ek string hai, taki .length property access ki ja sake.
8. Modules and Namespaces 🌍
Example 1: Using Modules (export and import)
// file: math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// file: main.ts
import { add } from './math';

console.log(add(3, 4)); // 7
Use: Modules ka use code ko split karne aur reuse karne ke liye hota hai.
Explanation: math.ts mein add function ko export kiya gaya hai aur main.ts mein usse import karke use kiya gaya hai.