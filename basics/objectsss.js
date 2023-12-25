const user = {
    name: " Ritik",
    mobile: "742548",
    dob: "22-03-2003",
}

const propertyDescriptor  ={
    value: user.dob,
    writable: false
}
Object.defineProperty(user, "dob", propertyDescriptor);

user.dob = "fndsdfn";
console.log(user);



