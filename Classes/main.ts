class secodyear {
    std_nmae : string;
    std_FName : string;
    std_class : number ;
    std_rollNo : number ;
    constructor (
        std_name : string ,
        std_FName : string ,
        std_class : number ,
        std_rollNo : number 
    ){
this.std_nmae = std_name;
this.std_FName = std_FName;
this.std_class = std_class;
this.std_rollNo = std_rollNo;
    }

}
 const first =  new secodyear ("Abdul Moiz" ," Ahned Nawaz" ,12 ,5006)
console.log(first);










// 1. Create and Interact with Objects
// Create instances of the secodyear class.
// Access and modify their properties.
// Practice calling methods (add a method to your class).
// typescript
// Copy
// Edit
// // Example
// const student = new secodyear("Ali", "Ahmed", 12, 101);
// console.log(student.std_nmae); // Access property
// 2. Add Methods
// Enhance your class by adding some methods to manipulate or display data.

// typescript
// Copy
// Edit
// class secodyear {
//     std_nmae: string;
//     std_FName: string;
//     std_class: number;
//     std_rollNo: number;

//     constructor(std_name: string, std_FName: string, std_class: number, std_rollNo: number) {
//         this.std_nmae = std_name;
//         this.std_FName = std_FName;
//         this.std_class = std_class;
//         this.std_rollNo = std_rollNo;
//     }

//     getFullName(): string {
//         return `${this.std_nmae} ${this.std_FName}`;
//     }

//     promoteClass(): void {
//         this.std_class++;
//     }
// }

// // Usage
// const student = new secodyear("Ali", "Ahmed", 12, 101);
// console.log(student.getFullName()); // Output: Ali Ahmed
// student.promoteClass();
// console.log(student.std_class); // Output: 13
// 3. Use Access Modifiers
// Learn about private, protected, and public access modifiers to restrict access to certain properties or methods.

// typescript
// Copy
// Edit
// class secodyear {
//     private std_nmae: string;
//     private std_FName: string;
//     public std_class: number;
//     public std_rollNo: number;

//     constructor(std_name: string, std_FName: string, std_class: number, std_rollNo: number) {
//         this.std_nmae = std_name;
//         this.std_FName = std_FName;
//         this.std_class = std_class;
//         this.std_rollNo = std_rollNo;
//     }

//     getFullName(): string {
//         return `${this.std_nmae} ${this.std_FName}`;
//     }
// }
// 4. Explore Inheritance
// Learn how to extend classes and reuse code using inheritance.

// typescript
// Copy
// Edit
// class Student {
//     std_name: string;
//     constructor(std_name: string) {
//         this.std_name = std_name;
//     }
// }

// class secodyear extends Student {
//     std_class: number;
//     constructor(std_name: string, std_class: number) {
//         super(std_name); // Call parent class constructor
//         this.std_class = std_class;
//     }
// }
// 5. Practice with Static Properties and Methods
// Add static members to your class to define properties or methods that are shared among all instances.

// typescript
// Copy
// Edit
// class secodyear {
//     static schoolName = "High School";
//     std_nmae: string;

//     constructor(std_name: string) {
//         this.std_nmae = std_name;
//     }

//     static getSchoolName(): string {
//         return this.schoolName;
//     }
// }

// console.log(secodyear.getSchoolName()); // Output: High School
// 6. Handle Error Cases
// Implement basic error handling using validations inside your methods or constructors.

// typescript
// Copy
// Edit
// class secodyear {
//     std_class: number;

//     constructor(std_class: number) {
//         if (std_class <= 0) {
//             throw new Error("Class number must be positive");
//         }
//         this.std_class = std_class;
//     }
// }
// 7. Learn Advanced Concepts
// Once you're comfortable, explore:

// Interfaces: Define the structure of objects.
// Abstract Classes: Define base classes that cannot be instantiated directly.
// Polymorphism: Override methods in child classes.
// Generics: Write reusable and type-safe components.
