const NewArray = [1,2,3,4,5];

NewArray.push(66);//66 will be added at the last

NewArray.pop(); //last element will be deleted

NewArray.unshift(6);//adds 6 in the beginning of the array

NewArray.shift(); //deletes the very first element

console.log(NewArray.includes(10)); //checks if the element exist in the array or not

const arryy = NewArray.slice(0,3); //just slices the given indexed elements(last element not included)

const ary = NewArray.splice(0,3); //slice the given index elements and remove it from the main array(last element included)
console.log(NewArray);
console.log(arryy);
console.log(ary);
console.log(NewArray);
