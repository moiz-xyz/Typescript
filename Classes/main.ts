// // 1. Create and Interact with Objects

// // Create instances of the secodyear class.
// // Access and modify their properties.
// // Practice calling methods (add a method to your class).
// class secodyear {
//     std_nmae : string;
//     std_FName : string;
//     std_class : number ;
//     std_rollNo : number ;
//     constructor (
//         std_name : string , std_FName : string ,std_class : number ,std_rollNo : number )  
//           {
// this.std_nmae = std_name;
// this.std_FName = std_FName;
// this.std_class = std_class;
// this.std_rollNo = std_rollNo;}

// displayStudentsDetail(){
    
//     console.log(`Students name ${this.std_nmae}`);
//     console.log(`Father name ${this.std_FName}`);
//     console.log(`Class ${this.std_class}`);
//     console.log(`Roll No ${this.std_rollNo}`);
// }

// }
//  const first =  new secodyear ("Abdul Moiz" ," Ahned Nawaz" ,12 ,5006) ;
//  const second = new secodyear ("Yazdan Ali mirza" , "Ali moirza" , 12, 5001)
// first.displayStudentsDetail()
// second.displayStudentsDetail()



// // 2. Use Access Modifiers
// // Learn about private, protected, and public access modifiers to restrict access to 
// // certain properties or methods.
// class secodyear2 {
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

// const first2 =  new secodyear ("Abdul Moiz" ," Ahned Nawaz" ,12 ,5006) ;
// console.log(first2);

// // 4. Explore Inheritance
// // Learn how to extend classes and reuse code using inheritance.

// class Student {
//     std_name: string;
//     constructor(std_name: string) {
//         this.std_name = std_name;
//     }
// }

// class secodyear3 extends Student {
//     std_class: number;
//     constructor(std_name: string, std_class: number) {
//         super(std_name); 
//         this.std_class = std_class;
//     }
// }
// // 5. Practice with Static Properties and Methods
// // Add static members to your class to define properties or methods that are shared among all instances.

// class secodyear4 {
//     static schoolName = "High School";
//     std_nmae: string;

//     constructor(std_name: string) {
//         this.std_nmae = std_name;
//     }

//     static getSchoolName(): string {
//         return this.schoolName;
//     }
// }

// console.log(secodyear4.getSchoolName()); // Output: High School
// // 6. Handle Error Cases
// // Implement basic error handling using validations inside your methods or constructors.


// class secodyear5 {
//     std_class: number;

//     constructor(std_class: number) {
//         if (std_class <= 0) {
//             throw new Error("Class number must be positive");
//         }
//         this.std_class = std_class;
//     }
// }


class Bill {
    constructor(name1, price2) {
        this.name1 = name;
        this.price2 = price;
    }

    display() {
        console.log(`${this.name1}: $${this.price2}`);
    }
}

// Example usage:
const myBill = new Bill("Laptop", 1200);
myBill.display(); // Output: Laptop: $1200
