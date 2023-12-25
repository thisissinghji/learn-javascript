const obj = {
    "full name": "ritik singh",
    id : 20,
    email: "ritik@google.com",
    dob: "22-03-2003"
}

// console.log(obj["full name"]);

obj.email = "ritikstar000@gmail.com";
// console.log(obj);

Object.freeze(obj.email);
obj.email = "ritikritik";
console.log(obj);

obj.email = "kuamrsds";

console.log(obj);
// obj.greeting = function(){
//     console.log("Hello");
// }

// console.log(obj.greeting());

