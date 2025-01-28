// A group of constants
enum    Status {
    Ceo = "Abdul Moiz" ,
    CTO = "Munir" ,
    Dm= "ali" ,
    Hr = "ayesha" ,
    Sales = "hello" ,
    team = 8,
}
console.log(Status);
console.log(Status.CTO);

// console.log(Status["Abdul Moiz"]);
console.log(Status[8]);


enum Direction {
    North,
    South,
    East,
    West,
}

let currentDirection: Direction = Direction.North;

console.log(currentDirection); 
console.log(Direction[0]);     
enum Status {
    Pending = 1,
    InProgress = 2,
    Completed = 3,
}

let taskStatus: Status = Status.InProgress;

console.log(taskStatus); 

enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

let favoriteColor: Colors = Colors.Red;

console.log(favoriteColor);
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

let today: Days = Days.Friday;

console.log(today); 

enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500,
}

console.log(HttpStatus.OK); 
console.log(HttpStatus[404]); 




