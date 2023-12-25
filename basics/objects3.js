const user = {
    name : "Ritik",
    age : 20,
    email: "ritiksingh@gmail.com",
    number: 70042864,
}

const {name:nm} = user; //de-structure
console.log(nm);

const propertyDescriptor = {
    value: user.dob,
    writable: false,
    enumerable: true,
    configurable: true
};

Object.defineProperty(user, "dob", propertyDescriptor);