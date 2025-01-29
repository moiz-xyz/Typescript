// A union type allows a variable, parameter, or return type to hold one of several
//  possible types.
//  It is denoted using the | symbol.

let first : number | string 
= 9
first = "hello  union" 
// to asign a singke varibe both the type then uinon is used in maths union was that 
// all the terms of both sets same as its one set icblde all properties


function  hello( value :string | number){
 console.log(value);
 
}
hello ("hello")
hello (1234)


// An intersection type combines multiple types into one. It is denoted using the & symbol. 
// The resulting type will have all the properties of the combined types.

type person = {
    name : string;
    age : number;
}
type employ = {
    role :string;
    id: number;
}

// type employperson = person | ye sb ka super set le ka arha  ha  means agr aik na bhi mila tu chl gyega 
type employperson = person & employ // is ko sri type milni chiya 
//  e.g ap aik data base bana rha ia ksi company ka tu ap type pehla sa he set kar do 
//  taka bd mai ap bhl na gao yah line main he error de ga 
const employ  :employperson ={
    name: "Moiz",
    id: 123,
    age: 30,
    role: "Developer"
} 
console.log(employ);
type User = {
    name: string;
    email: string;
};

type Permissions = {
    canEdit: boolean;
    canDelete: boolean;
};

type AdminUser = User & Permissions;

const admin: AdminUser = {
    name: "ali",
    email: "ali@example.com",
    canEdit: true,
    canDelete: false
};
console.log(admin);

// kb konsa instaal karna ha?
// Use union (|) when an object can be one of multiple types.
// Use intersection (&) when an object must satisfy multiple types at the same time.

