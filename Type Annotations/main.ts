//  inter face ah ka ap koi bhi chex ki type peh;la h define kr do 
//  for example

let mesg : string = "hello world";
console.log(mesg);



interface myobj{
  name : string,
  age : Number ,
  phoneNo : number,
  email : string , 
}
// const me : myobj = {
//     name : "Abdul Moiz",
//     age : "20",                 // Giving me an error
//     phoneNo : "0312123262",     // Givving me an error
//     email : "abc@gmail.com"
// }
const me1 : myobj = {
    name : "Abdul Moiz",
    age : 20, // Giving me an error
    phoneNo : 211121212, // Givving me an error
    email : "abc@gmail.com" ,
}
console.log(me1);


