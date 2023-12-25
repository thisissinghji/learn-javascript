const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const arr4 = [1,5,48,5];
const arr3 = arr1.concat(arr2,arr4); //merges 2 or more array together
console.log(arr3);

const neww = [...arr1];
console.log(arr1);
console.log(neww);
console.log(typeof arr1);

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 } //all the elements 

console.log(Array.from("Ritik")); //this will convert the string "Ritik" into an array [ 'R', 'i', 't', 'i', 'k' ]

console.log(Array.from({name: "Ritik"})); //returns an empty array as it is not possbile to convert the given into an array

let num1= 100;
let num2 = 200;
let num3 = 300;
const newaa = Array.of(num1,num2,num3)
console.log(typeof newaa);