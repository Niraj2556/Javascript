// prototype is different from __proto__ 
//It is "free space" which is created when when we create any "function"
//"prototype is exist only in function"

function user(name , age , email ,address ){
    const data= Object.create(user.prototype);
data.name= name ;
data.age=age;
data.email =email;
data.address =address;
return data;
}
// here I add a function 
user.prototype.about =function(){
    return`name is ${this.name} and age is ${this.age} ,email is ${this.email} & adress is ${this.address} `

}
user.prototype.check_age =function(){
    return this.age>=18;
}
const user1 = user("Alia",20,"alia@gmail","Lucknow")
const user2 = user("Alexa",18,"alexa2gmail","California")
// console.log(user1)
console.log(user1.about())
console.log(user1.check_age())
console.log(user2.about())
console.log(user2.check_age())