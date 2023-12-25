const user = {
    id: "23df",
    fullname:{
        "first name" : "ritik",
        "last name" : "singh",
    },
    dob:"22 march 2003",
}

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};

const obj4 = Object.assign({},obj1, obj2, obj3) //{} this will act as the target and all the obj will be the source

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);