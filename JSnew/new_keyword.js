// New Keyword

function user(name,age,address){
    this.name = name;
    this.age = age;
    this.address =address;
}
user.prototype.about = function(){
    return `name is ${this.name} and age is ${this.age} ,email is ${this.email} & adress is ${this.address} `
}
user.prototype.check_age =function(){
    return this.age>=18 ;
}
const user1 = new user ("alexa" , 30,"Lucknow")
console.log(user1.about())

// to get the keys in the whole function
// for (key in user1){
    // console.log(key)
// }


// to get the keys only inside the main function
for (key in user1){
if (user1.hasOwnProperty(key)){
    console.log(key)
}
}