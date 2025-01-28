// 1. Create and Interact with Objects
// Create instances of the secodyear class.
// Access and modify their properties.
// Practice calling methods (add a method to your class).
var secodyear = /** @class */ (function () {
    function secodyear(std_name, std_FName, std_class, std_rollNo) {
        this.std_nmae = std_name;
        this.std_FName = std_FName;
        this.std_class = std_class;
        this.std_rollNo = std_rollNo;
    }
    secodyear.prototype.displayStudentsDetail = function () {
        console.log("Students name ".concat(this.std_nmae));
        console.log("Father name ".concat(this.std_FName));
        console.log("Class ".concat(this.std_class));
        console.log("Roll No ".concat(this.std_rollNo));
    };
    return secodyear;
}());
var first = new secodyear("Abdul Moiz", " Ahned Nawaz", 12, 5006);
var second = new secodyear("Yazdan Ali mirza", "Ali moirza", 12, 5001);
first.displayStudentsDetail();
second.displayStudentsDetail();
// 2. Use Access Modifiers
// Learn about private, protected, and public access modifiers to restrict access to 
// certain properties or methods.
var secodyear2 = /** @class */ (function () {
    function secodyear2(std_name, std_FName, std_class, std_rollNo) {
        this.std_nmae = std_name;
        this.std_FName = std_FName;
        this.std_class = std_class;
        this.std_rollNo = std_rollNo;
    }
    secodyear2.prototype.getFullName = function () {
        return "".concat(this.std_nmae, " ").concat(this.std_FName);
    };
    return secodyear2;
}());
var first2 = new secodyear("Abdul Moiz", " Ahned Nawaz", 12, 5006);
console.log(first2);
// 4. Explore Inheritance
// Learn how to extend classes and reuse code using inheritance.
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
