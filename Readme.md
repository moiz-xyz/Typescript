# Learn-TypeScript

🚀 A repository for learning TypeScript through hands-on tutorials, examples, and exercises. Ideal for JavaScript developers or beginners who want to master TypeScript’s core features and advanced concepts for writing clean and scalable code. 💻

📚 Yahan par har ek important TypeScript concept ke liye 2 examples diye gaye hain, jisme unka use-case aur explanation diya gaya hai.

## 1. Primitive Types 🧑‍💻

### Example 1: string
let username: string = "JohnDoe";

### Example 1: Numbers
let age: number = 25;

## 2. Interfaces 🧩 

 ### Example 1: Basic Interface
 interface Person {
  name: string;
  age: number;
}

let john: Person = {
  name: "John",
  age: 30
};

## 3.  Type Inference and Type Annotations 🎯
### Example 1: Type Inference
let message = "Hello, World!";
### Example 2: Type Annotation
let age: number = 25;

## 4. Functions ⚙️
### Example 1: Function with Parameters and Return Type
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

 ### Example 2: Function Overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(1, 2)); // 3
console.log(combine("Hello", " World!")); // "Hello World!"


## 5. Classes and Objects 🏠
### Example 1: Basic Class with Constructor
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("John", 30);


 ### 6. Generics 🧳
## Example 1: Generic Function
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(5)); // 5
console.log(identity("Hello")); // "Hello"

###  7. Type Assertion 🔒
## Example 1: Simple Type Assertion

let value: any = "Hello, TypeScript!";
let length: number = (value as string).length;
console.log(length); // 18

### 8. Modules and Namespaces 🌍
## Example 1: Using Modules (export and import)
file: math.ts


export function add(a: number, b: number): number {
  return a + b;
}
file: main.ts

import { add } from './math';

console.log(add(3, 4)); // 7

