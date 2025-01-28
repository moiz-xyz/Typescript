// What Are Generics?
//  gerics yah ha ka app jb ak bara projects bana rha ho gta ho tu us ian ap ksi  bhi function 
// ki type aesi rakha ha ka jo string bhi ho no bhi yah bolean ho tu us ka lya  ap genric function use 
// karata ho 
//  e.g 
function avg ( arg : any)  :any{
return arg
} // i this tye of case better use geeric function 

function identity <Type> ( arg :Type ) :Type {
return arg
}  // type denotes generic functon 


function identity2 <T> ( val : T )  :T { 
    return val
}
let arr : Array <number> = [1,2,3,4] ;
let arr1 : Array <string> = ["Abdul" , "Moiz"] ;

console.log(arr);
console.log(arr1);

   class Box <T>{
       content : T

 constructor (content :T){
    this.content = content ; 
 }
getcontent() :T{
    return this.content ;
}
   }


   const hello = new Box <string> ("hello genric function");
   console.log(hello.getcontent());
   


   class DataHolder<T> {
    private data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}


let nameHolder = new DataHolder<string>("Moiz"); 
let gradeHolder = new DataHolder<number>(95);    

console.log(nameHolder.getData()); // Output: Moiz
console.log(gradeHolder.getData()); // Output: 95
